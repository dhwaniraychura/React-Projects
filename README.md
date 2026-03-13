# 📁 DocVault — Digital Document Manager

DocVault is a **cloud-based digital document management system** built using **React, Redux Toolkit, and Firebase Realtime Database**.
It allows users to upload, organize, search, edit, and delete documents directly from the browser without any backend server.

---

## 🚀 Features

* 📤 Upload files using **Drag & Drop** or **Browse**
* 📂 View documents in a **responsive card grid**
* ✏️ Edit file **title, category, and description**
* 🗑 Delete files with **confirmation**
* 🔎 **Real-time search** by file name or description
* 🏷 Filter files by **category and file type**
* 📊 Dashboard statistics:

  * Total files
  * Storage used
  * Categories count
  * Weekly uploads
* ⚡ Instant UI updates using **Redux Toolkit**

---

## 🛠 Tech Stack

| Layer            | Technology                 |
| ---------------- | -------------------------- |
| UI               | React 18 + Vite            |
| State Management | Redux Toolkit              |
| Middleware       | Redux Thunk                |
| Database         | Firebase Realtime Database |
| File Handling    | FileReader API (Base64)    |
| Styling          | Custom CSS                 |
| Deployment       | Vercel                     |


## 📂 Project Structure

```
src
│
├── app
│   └── store.js
│
├── features
│   └── fileSlice.js
│
├── components
│   ├── UploadFile.jsx
│   ├── FileCard.jsx
│   ├── FileList.jsx
│   └── SearchFilter.jsx
│
├── firebase
│   └── firebaseConfig.js
│
├── pages
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

# Clone the repository:

git clone [https://github.com/yourusername/docvault.git](https://github.com/dhwaniraychura/React-Projects/edit/doc-vault)

# Go to the project folder:

cd docvault

# Install dependencies:

npm install

Run the development server:

npm run dev

---

## 🔥 Firebase Setup

1. Go to **Firebase Console**
2. Create a new project
3. Enable **Realtime Database**
4. Create a **Web App**
5. Copy the Firebase configuration
6. Paste it inside:

src/firebase/firebaseConfig.js

Example configuration:

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
databaseURL: "YOUR_DATABASE_URL",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_PROJECT.appspot.com",
messagingSenderId: "XXXX",
appId: "XXXX"
};

---

## 🚀 Deployment

# To build the project:

npm run build

Then deploy easily on **Vercel**:

1. Push project to GitHub
2. Go to Vercel
3. Import repository
4. Click **Deploy**

---

## 📸 Screenshot



## 💡 Why This Project Uses Firebase Realtime DB

Firebase Storage requires a **paid Blaze plan**, but storing files as **Base64 in Realtime Database** allows the project to run entirely on the **free Firebase Spark plan**.

---

## 👨‍💻 Author

**Dhwani Raychura**

Built with ❤️ using
React • Redux Toolkit • Firebase • Vercel
