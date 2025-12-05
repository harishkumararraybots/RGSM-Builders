:

 RGSM Builders — React + Vite Project

A modern frontend setup using React, Vite, Tailwind CSS v3, React Router, Framer Motion, and Lucide Icons.

 **Tech Stack**

**React 18**

**Vite**

**Tailwind CSS v3**

**React Router DOM**

**Framer Motion**

**Lucide React Icons**

 **Project Setup**
1 Create the project
npm create vite@latest rgsm-builders --template react
cd rgsm-builders
npm install

** Install & Configure Tailwind CSS v3**
**Install Tailwind v3**
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p



**Add Tailwind to src/index.css**
@tailwind base;
@tailwind components;
@tailwind utilities;

**Install React Router**
npm install react-router-dom

** Install Framer Motion**
npm install framer-motion

** Install Lucide Icons**
npm install lucide-react

 **Run the App**
npm run dev

 **Recommended Project Structure**
rgsm-builders/
│── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│── public/
│── package.json
│── tailwind.config.js
│── README.md

 **License**

This project is for educational and development purposes.