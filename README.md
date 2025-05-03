# Amazon Clone - Online Store React App

## Overview
This is a fictional Amazon-style online store built using **React**, **Redux**, and **React-Bootstrap**. It features user registration and login, a dynamic product page, a cart with shipment options, and a help section for shipping support.

## Features
- ✅ User registration and login (with validation)
- ✅ Product listing using `.map()`
- ✅ Cart with running total
- ✅ Redux state management for user and cart
- ✅ Selectable shipment method
- ✅ Help page for shipping info
- ✅ Responsive and styled UI with Bootstrap

## Technologies Used
- React
- Redux Toolkit
- React Router
- React Bootstrap
- Formik (for form handling and validation)

## Setup Instructions

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd online-store
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the app:**
```bash
npm start
```

The app will start on `http://localhost:3000`

## File Structure
```
online-store/
├── public/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── slices/
│   │   ├── cartSlice.js
│   │   └── userSlice.js
│   ├── Components/
│   │   ├── Header.js
│   │   ├── Landing.js
│   │   ├── Products.js
│   │   ├── Cart.js
│   │   ├── Registration.js
│   │   └── Help.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Notes
- Project initialized with `create-react-app`
- Uses localStorage for username persistence
- Cart and shipment managed with Redux
- Includes meaningful comments and naming conventions per Google JS Style Guide

---

## License
MIT
