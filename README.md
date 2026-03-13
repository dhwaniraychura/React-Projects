# 📁 DocVault — Digital Document Manager

A production-ready document management system built with React, Redux Toolkit, and Firebase.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```


```

## 📂 Project Structure

```
src/
├── app/
│    └── store.js              # Redux store
├── features/
│    └── fileSlice.js          # All Redux logic + Firebase thunks
├── components/
│    ├── UploadFile.jsx         # Upload modal with drag & drop
│    ├── FileList.jsx           # Grid of cards
│    ├── FileCard.jsx           # Individual file card with edit/delete
│    └── SearchFilter.jsx       # Search + category + type filters
├── firebase/
│    └── firebaseConfig.js      # Firebase initialization
├── pages/
│    └── Dashboard.jsx          # Main dashboard layout
├── App.jsx
├── main.jsx
└── index.css                   # All styles
```

---

## ✅ Features

- **Upload** — Drag & drop or browse, with real-time progress bar
- **View** — Responsive card grid with file type icons
- **Edit** — Rename, change category, add description inline
- **Delete** — Confirmation flow before permanent deletion
- **Search** — Instant filter by name / description
- **Filter** — By category (Personal, Academic, Office, etc.) and type (PDF, Image)
- **Stats** — Live counts for total files, storage, categories, weekly uploads
- **Redux** — Full loading/error states via `createAsyncThunk`

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | React 18 + Vite |
| State | Redux Toolkit + Thunk |
| Storage | Firebase Storage |
| Database | Firebase Realtime DB |
| Styling | Custom CSS (dark theme) |


