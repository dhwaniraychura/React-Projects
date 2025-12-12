📝 Project Description

Student Registration & Management System is a React-based web application that allows users to:

Add new student records

Edit existing entries

Delete individual students

Clear all records

View statistics like

Total Students

Last Registered Student

Local Storage Status

All data is saved automatically using localStorage, ensuring records remain even after page refresh.

The project includes a clean UI, a modern dark theme, reusable components, and fully responsive design
📁 Module Explanations

Below is the explanation of every main component and module in your project.

1️⃣ App.jsx (Main Controller Component)

This is the root component that manages all application logic:

Main Functions

handleAdd: Adds a new student OR updates an existing student.

handleDelete: Deletes a student using their roll number.

handleEdit: Sends the selected student to the form for editing.

handleClear: Clears all records from the table.

State Variables

students → Stores all student data, saved in localStorage

editingStudent → Tracks which student is currently being edited

Features

Automatically syncs state with localStorage using useEffect

Renders 3 main sections:

RecordRow → stats cards

RecordForm → form to add/edit

RecordList → table of students

2️⃣ RecordForm.jsx (Add / Edit Student Form)

This component contains the student input form.

Key Features

Handles controlled inputs (React state for each field)

Supports:

Roll number

Name

Date of Birth

Email

Password

Gender (Radio)

Course (Dropdown)

Address (Textarea)

If a student is being edited, the form autofills using useEffect

After submission:

Calls onAdd(formData)

Resets the form

3️⃣ RecordRow.jsx (Dashboard Summary Cards)

This component displays three stylish summary cards:

Shows:

Total Students — live count

Last Registered Student — using Lucide icons

Storage Status — indicates local JSON storage

UI Includes:

Frosted glass effect using backdrop-filter

Modern card styling

Icons from lucide-react

4️⃣ RecordList.jsx (Student Table Viewer)

Displays all registered students in a clean table.

Features:

Table header with Roll, Name, Email, Gender, Course, DOB

“Edit” button → sends data for editing

“Delete” button → removes student

“Clear All” button → deletes all records

Message “No Students Registered” when empty

5️⃣ index.css (Theme + Layout Styling)

This file includes:

UI Styles:

Full page dark mode

Modern form design

Glow effects on focus

Custom buttons

Styled table + header

Responsive layout

Card styling for RecordRow

Overall, CSS gives the app a professional dashboard look.
🚀 Steps to Run the Project

Follow these steps to run the app on your system:

1️⃣ Clone the repository
git clone https://github.com/dhwaniraychura/React-Projects.git

2️⃣ Go into your project folder
cd React-Projects

3️⃣ Switch to your branch
git checkout localbox_minor

4️⃣ Install all dependencies
npm install

5️⃣ Start the development server
npm start


Your app will start running at:
<img width="1826" height="911" alt="image" src="https://github.com/user-attachments/assets/de50cad8-5907-49a5-bfe3-938fa3a77d0d" />
<img width="1769" height="900" alt="image" src="https://github.com/user-attachments/assets/0e94cc01-e33c-499c-ba21-1d58403965eb" />
<img width="1892" height="906" alt="image" src="https://github.com/user-attachments/assets/4dd6be16-b25b-41a8-ba14-4f646e8f8149" />
<img width="1436" height="967" alt="image" src="https://github.com/user-attachments/assets/9043887b-1562-4bc7-bd47-b39046c13734" />
<img width="1715" height="400" alt="image" src="https://github.com/user-attachments/assets/491492f1-b5d4-4a34-90f3-97e2e9d88b3a" />




