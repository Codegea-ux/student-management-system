# 🎓 Student Management System

A full-stack web application built using **Flask** and **MySQL** that allows users to manage student records with authentication and a modern UI.

---

## 🚀 Features

* 🔐 User Authentication (Register / Login / Logout)
* ➕ Add Student Records
* 📋 View Students in Dashboard
* 🔄 Real-time updates using JavaScript (Fetch API)
* 🗄️ MySQL Database Integration
* 🎨 Modern UI using Bootstrap

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, Bootstrap, JavaScript
* **Backend:** Python (Flask)
* **Database:** MySQL (XAMPP)

---

## 📁 Project Structure

```
student-management-system/
│
├── app.py
├── requirements.txt
│
├── templates/
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
│
└── static/
    ├── style.css
    └── script.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/yourusername/student-management-system.git
cd student-management-system
```

---

### 2. Install dependencies

```
pip install -r requirements.txt
```

---

### 3. Start MySQL (XAMPP)

* Open XAMPP Control Panel
* Start **MySQL**

---

### 4. Create database

Open phpMyAdmin and run:

```
CREATE DATABASE student_db;
```

---

### 5. Run the application

```
python app.py
```

---

### 6. Open in browser

```
http://127.0.0.1:5000/
```

---

## 🔐 Authentication

* Passwords are securely hashed using **bcrypt**
* Session-based login system

---

---

## 📌 Future Improvements

* 📊 Add marks & report system
* 🔍 Search and filter students
* ✏️ Edit/Delete student records
* 🌐 Deploy online (Render / Railway)
* 🎨 Improve UI with advanced components

---

## 👨‍💻 Author

**Himal Chowdary**

---

## ⭐ Acknowledgements

This project was built as a learning step toward full-stack development and backend engineering.
