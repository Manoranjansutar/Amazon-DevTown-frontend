import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/user/Home";
import Login from "./components/loginRegister/Login";
import Register from "./components/loginRegister/Register";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Dashboard from "./components/admin/Dashboard";
import Wishlist from "./components/user/Wishlist";
import AddProduct from "./components/admin/AddProduct";
import ProductDetails from "./components/ProductDetails";
import Search from './components/Search.jsx';
import Footer from "./components/Footer";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, []);

  return (
    <BrowserRouter>
      {/* <Toaster /> */}
      <Navbar
        token={isAuthenticated ? "token" : null}
        setIsAuthenticated={setIsAuthenticated}
        isAuthenticated={isAuthenticated}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated && role === "admin" ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/wishlist"
          element={
            isAuthenticated && role === "user" ? (
              <Wishlist />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/add_product" element={isAuthenticated && role === 'admin' ? <AddProduct/> : <Navigate to='/login'/>}/>
        <Route path="/product/productdetails/:id" element={<ProductDetails        />} />
        <Route path="/search/:keyword" element={<Search/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
