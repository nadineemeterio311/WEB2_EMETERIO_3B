import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminLayout from "./components/admin/AdminLayout";

// ⚠️ IMPORTANT: Choose ONE of these import options based on where your files are located:

// OPTION 1: If Home.jsx, About.jsx, Login.jsx, Register.jsx are in the same 'src' folder
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

// OPTION 2: If they are in a 'pages' folder (Uncomment these and comment out Option 1)
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// OPTION 3: If they are in a 'components' folder (Uncomment these and comment out Option 1)
// import Home from "./components/Home";
// import About from "./components/About";
// import Login from "./components/Login";
// import Register from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes with Navbar */}
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/login" element={<><Navbar /><Login /></>} />
        <Route path="/register" element={<><Navbar /><Register /></>} />
        
        {/* Admin Routes (no public navbar) */}
        <Route path="/admin/*" element={<AdminLayout />} />
        
        {/* Redirect to home if route not found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
