import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../firebase/firebaseConfig";
import {
  ref as dbRef,
  set,
  get,
  remove,
  update,
  child,
} from "firebase/database";

// ─── Helper: File → Base64 ────────────────────────
const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });

// ─── Upload File ──────────────────────────────────
export const uploadFile = createAsyncThunk(
  "files/uploadFile",
  async ({ file, category, description }, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setUploadProgress(10));
      const base64Data = await fileToBase64(file);
      dispatch(setUploadProgress(60));

      const fileId = `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      const metadata = {
        id:          fileId,
        name:        file.name,
        title:       file.name,
        type:        file.type,
        size:        file.size,
        category:    category    || "Personal",
        description: description || "",
        uploadDate:  new Date().toISOString(),
        downloadURL: base64Data,
        storagePath: fileId,
      };

      await set(dbRef(database, `files/${fileId}`), metadata);
      dispatch(setUploadProgress(100));
      return metadata;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ─── Fetch Files ──────────────────────────────────
export const fetchFiles = createAsyncThunk(
  "files/fetchFiles",
  async (_, { rejectWithValue }) => {
    try {
      const snapshot = await get(child(dbRef(database), "files"));
      if (snapshot.exists()) return Object.values(snapshot.val());
      return [];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ─── Delete File ──────────────────────────────────
export const deleteFile = createAsyncThunk(
  "files/deleteFile",
  async (file, { rejectWithValue }) => {
    try {
      await remove(dbRef(database, `files/${file.id}`));
      return file.id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ─── Update Metadata ──────────────────────────────
export const updateFileMetadata = createAsyncThunk(
  "files/updateFileMetadata",
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      await update(dbRef(database, `files/${id}`), updates);
      return { id, updates };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ─── Slice ────────────────────────────────────────
const fileSlice = createSlice({
  name: "files",
  initialState: {
    items:          [],
    loading:        false,
    uploading:      false,
    uploadProgress: 0,
    error:          null,
    searchQuery:    "",
    filterCategory: "All",
    filterType:     "All",
  },
  reducers: {
    setUploadProgress: (state, action) => { state.uploadProgress = action.payload; },
    setSearchQuery:    (state, action) => { state.searchQuery    = action.payload; },
    setFilterCategory: (state, action) => { state.filterCategory = action.payload; },
    setFilterType:     (state, action) => { state.filterType     = action.payload; },
    clearError:        (state)         => { state.error          = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending,   (state)         => { state.uploading = true;  state.error = null; state.uploadProgress = 0; })
      .addCase(uploadFile.fulfilled, (state, action) => { state.uploading = false; state.uploadProgress = 0; state.items.unshift(action.payload); })
      .addCase(uploadFile.rejected,  (state, action) => { state.uploading = false; state.uploadProgress = 0; state.error = action.payload; })

      .addCase(fetchFiles.pending,   (state)         => { state.loading = true;  state.error = null; })
      .addCase(fetchFiles.fulfilled, (state, action) => { state.loading = false; state.items = action.payload.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate)); })
      .addCase(fetchFiles.rejected,  (state, action) => { state.loading = false; state.error = action.payload; })

      .addCase(deleteFile.pending,   (state)         => { state.loading = true; })
      .addCase(deleteFile.fulfilled, (state, action) => { state.loading = false; state.items = state.items.filter((f) => f.id !== action.payload); })
      .addCase(deleteFile.rejected,  (state, action) => { state.loading = false; state.error = action.payload; })

      .addCase(updateFileMetadata.fulfilled, (state, action) => {
        const { id, updates } = action.payload;
        const idx = state.items.findIndex((f) => f.id === id);
        if (idx !== -1) state.items[idx] = { ...state.items[idx], ...updates };
      });
  },
});

export const {
  setUploadProgress, setSearchQuery,
  setFilterCategory, setFilterType, clearError,
} = fileSlice.actions;

export const selectFilteredFiles = (state) => {
  const { items, searchQuery, filterCategory, filterType } = state.files;
  return items.filter((file) => {
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      file.name?.toLowerCase().includes(q) ||
      file.title?.toLowerCase().includes(q) ||
      file.description?.toLowerCase().includes(q);
    const matchCategory = filterCategory === "All" || file.category === filterCategory;
    const matchType =
      filterType === "All" ||
      (filterType === "PDF"   && file.type?.includes("pdf")) ||
      (filterType === "Image" && file.type?.startsWith("image/")) ||
      (filterType === "Other" && !file.type?.includes("pdf") && !file.type?.startsWith("image/"));
    return matchSearch && matchCategory && matchType;
  });
};

export default fileSlice.reducer;
