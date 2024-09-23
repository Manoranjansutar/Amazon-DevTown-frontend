import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Login = ({isAuthenticated,setIsAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios
        .post("http://localhost:5000/api/auth/login", formData)
        .then((res) => {
          console.log(res);

          if (res.data.success && formData.role === "admin") {
            toast.success("Admin logged in successfully");
            console.log(formData.role);
            console.log(res.data.token)
            setIsAuthenticated(true)
            localStorage.setItem("role",formData.role)
            localStorage.setItem("token",res.data.token)
            navigate('/dashboard')
          } else if (res.data.success && formData.role === "user") {
            toast.success("User logged in successfully");
            console.log(formData.role);
            localStorage.setItem("role",formData.role)
            localStorage.setItem("token",res.data.token)
            setIsAuthenticated(true)
            navigate('/')
          } else {
            setIsAuthenticated(false)
            toast.error("Invalid credentials");
          }
        });
    } catch (error) {
      console.log(error);
      console.log("error in login");
    }
  };

  return (
    <div className="absolute w-full mt-20">
      <Toaster />
      <div className="flex flex-col items-center justify-center p-4 mx-auto">
        <form className="w-96" onSubmit={handleLoginSubmit}>
          <h1 className="text-3xl jost">Sign In</h1>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 py-1 mt-5 border border-gray-500 rounded-md w-96"
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-3 py-1 mt-5 border border-gray-500 rounded-md w-96"
          />
          <div className="flex justify-center gap-4 mt-5">
            <label htmlFor="admin">Admin</label>
            <input
              type="radio"
              id="admin"
              name="role"
              value="admin"
              checked={formData.role === "admin"}
              onChange={handleChange}
              required
            />
            <label htmlFor="user">User</label>
            <input
              type="radio"
              id="user"
              name="role"
              value="user"
              checked={formData.role === "user"}
              onChange={handleChange}
              required
            />
          </div>
          <p className="mt-2 text-sm text-gray-500 w-96">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <Button className="mt-5 w-96" type="submit">
            LOGIN
          </Button>
        </form>
        <div className="relative flex items-center justify-center my-4 w-96">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative px-4 text-gray-500 bg-white">
            New to Amazon?
          </div>
        </div>
        <Link to="/register">
          <span className="text-gray-500">Create your Amazon Account</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
