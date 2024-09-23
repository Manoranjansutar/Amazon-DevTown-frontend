import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import {toast,Toaster} from "react-hot-toast"

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/api/auth/register", formData)
        .then((res) => {
          console.log(res);
          console.log(formData)
          if (res.data.success && formData.role === "admin") {
            toast.success("Admin registered successfully");
            console.log(formData.role);
            console.log(res.data.token)
            navigate('/login')
          } else if (res.data.success && formData.role === "user") {
            toast.success("User registered successfully");
            console.log(formData.role);
            navigate('/login')
          } else {
            toast.error("something went wrong");
          }
        });
    } catch (error) {
      console.log(error);
      console.log("error in registering");
    }
  };
  
  return (
    <div className="absolute w-full mt-20 ">
      <Toaster/>
      <div className="flex flex-col items-center justify-center p-4 mx-auto">
        <form className="w-96" onSubmit={handleSubmit}>
          <h1 className="text-3xl jost">Create Account</h1>
          <p className="mt-5">Email</p>
          <input
            type="text"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            className="p-3 py-1 border border-gray-500 rounded-md w-96"
          />
          <p className="mt-5">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            className="p-3 py-1 border border-gray-500 rounded-md w-96"
          />
          <p className="mt-5">Role</p>
          <div className="flex gap-4 mt-1">
            <label htmlFor="admin">Admin</label>
            <input type="radio" id="admin" name="role" value="admin"   checked={formData.role === "admin"}
              onChange={handleChange}/>

            <label htmlFor="user">User</label>
            <input type="radio" id="user" name="role" value="user"   checked={formData.role === "user"}
              onChange={handleChange} />
          </div>
          <p className="mt-2 text-sm text-gray-500 w-96">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <Button className="mt-5 w-96" type='submit'>Create Account</Button>
        </form>
        <div className="relative flex items-center justify-center my-4 w-96">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative px-4 text-gray-500 bg-white">
            Already have an account ?{" "}
            <Link to="/login">
              <span className="font-semibold text-gray-500">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
