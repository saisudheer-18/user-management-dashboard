# 🚀 User Management Dashboard

A modern **User Directory Dashboard** built using **React + Vite** that allows users to view, search, sort, and explore detailed user information.

---

## 🌐 Live Demo

👉 https://user-management-dashboard-ekmz.vercel.app/

---

## 📌 About the Project

The **User Management Dashboard** is a frontend application that fetches user data from a public API and displays it in a clean, interactive interface.

This project demonstrates core frontend development concepts such as:

* API integration
* State management using React Hooks
* Client-side search and sorting
* Routing between pages
* Component-based architecture

---

## 📊 Features

### 🏠 Dashboard

* Displays all users in a structured table
* Shows:

  * Name
  * Email
  * Phone
  * Company

---

### 🔍 Search Functionality

* Filter users by:

  * Name
  * Email
* Instant client-side filtering using `.filter()`

---

### 🔃 Sorting

* Sort users by:

  * Name (Ascending / Descending)
  * Company (Ascending / Descending)
* Implemented using `.sort()`

---

### 👤 User Detail Page

* Click on any user to view full details:

  * Username
  * Address
  * Phone
  * Website
  * Company information

---

## 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6+)
* HTML5
* CSS3
* React Router

---

## 🌐 API Used

* https://jsonplaceholder.typicode.com/users

---

## 📂 Project Structure

```bash
src/
│── assets/
│
│── components/
│   ├── Sidebar/
│   └── UserTable/
│
│── layout/
│   └── MainLayout.jsx
│
│── pages/
│   ├── Dashboard/
│   └── UserDetail/
│
│── services/
│   └── api.js
│
│── styles/
│   └── global.css
│
│── App.jsx
│── main.jsx
```

---

## 📸 Screenshots

### 🏠 Dashboard

Displays all users in a clean table layout.

<img width="953" height="475" alt="image" src="https://github.com/user-attachments/assets/a3001321-46b9-40b5-a5ba-39d7c0ec671e" />


---

### 🔍 Search Feature

Users can filter results in real-time.

<img width="581" height="413" alt="image" src="https://github.com/user-attachments/assets/c47eeab3-6a6b-4373-ad01-a3a441b2a535" />



---

### 🔃 Sorting

Users can sort by name and company.
**Sort By Name**
<img width="571" height="308" alt="image" src="https://github.com/user-attachments/assets/f4005885-ffc2-439f-9fa3-942b53ed7ec8" />

**Sort By Company**
<img width="568" height="298" alt="image" src="https://github.com/user-attachments/assets/f4c322ce-67cc-44af-ac32-250a2b6e7ba0" />


---

### 👤 User Detail Page

Displays complete user information.

<img width="361" height="194" alt="image" src="https://github.com/user-attachments/assets/e2adb552-0b45-4f2b-a71e-8df4e7c973eb" />


---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/user-management-dashboard.git

# Navigate into the project
cd user-management-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔄 Application Flow

1. App initializes via `main.jsx`
2. Routing handled in `App.jsx`
3. Dashboard fetches user data from API
4. Data stored using React state
5. Displayed using reusable components
6. User interactions:

   * Search → filters users
   * Sort → rearranges data
   * Click → navigates to detail page

---

## 🧠 Core Concepts Used

* React Hooks (`useState`, `useEffect`)
* Component-based architecture
* API integration
* Array methods (`map`, `filter`, `sort`)
* Routing using React Router

---

## ⚠️ Challenges Faced

* Handling client-side filtering and sorting efficiently
* Managing nested API data (address, company)
* Fixing deployment issues (routing & build configuration)

---

## 💡 What I Learned

* Structuring scalable React applications
* Debugging real-world deployment issues
* Managing UI state effectively
* Improving code readability and reusability

---

## 🚀 Future Improvements

* Pagination for large datasets
* Debounced search for performance
* Loading spinner and error handling
* Dark mode 🌙
* UI enhancements

---

## 👨‍💻 Author

GitHub: https://github.com/saisudheer
