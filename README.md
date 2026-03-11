Inventory Management System (React + Redux + Firebase)

A modern Inventory Management System built using React, Redux Toolkit, and Firebase Realtime Database.
It allows users to add, edit, delete, search, and manage products with real-time database operations.

Features
1. Add Product

Add a new product with:

Product Name

Category

Stock Quantity

Price

Data is stored in Firebase Realtime Database.

2. Edit Product

Update existing product details.

Opens a modal window for editing.

Changes are saved directly to Firebase.

3. Delete Product

Remove products from inventory.

Includes a confirmation dialog before deletion.

4. Product Table

Displays all products with:

Product Name

Category

Stock

Price

Status (Low Stock / In Stock)

5. Search

Search products by name or category.

6. Sorting

Products can be sorted by:

Name

Stock

Price

7. Low Stock Indicator

Products with stock less than 10 are marked as Low Stock.

Tech Stack

Frontend

React

Redux Toolkit

JavaScript

CSS (Inline Styling)

Backend / Database

Firebase Realtime Database

State Management

Redux Toolkit

Async Thunks

Project Structure
src
│
├── components
│   ├── AddProductForm.js
│   ├── EditProductModal.js
│   └── ProductTable.js
│
├── features
│   └── inventory
│       ├── inventorySlice.js
│       └── inventoryThunks.js
│
├── firebase
│   └── firebaseConfig.js
│
└── App.js
<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/e40b5e0f-f331-45c5-8787-e4cf0016b7e3" />
<img width="719" height="686" alt="image" src="https://github.com/user-attachments/assets/5e7bb7cd-f469-4043-80dd-777cfec12312" />


