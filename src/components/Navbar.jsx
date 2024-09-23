import React from "react";
import logo from "./../assets/amazon.jpg";
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag, UserRound } from "lucide-react";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="px-[5vw] py-4 flex justify-between items-center border-b border-gray-500 absolute w-full bg-black">
      <Link to="/">
        <img src={logo} alt="" className="w-28" />
      </Link>

      {isAuthenticated && localStorage.getItem("role") === "admin" ? (
        <div className="flex items-center gap-2 ">
          <Link to="/dashboard">
            <p className="text-white">Dashborad</p>
          </Link>
          <Link to='/add_product'><p className="text-white">Add Product</p></Link>
          <UserRound className="text-white" />
          <Button
            className="text-black bg-white hover:bg-white "
            onClick={handleLogout}
          >
            LOGOUT
          </Button>
        </div>
      ) : (
        <>
          {location.pathname === "/login" ||
          location.pathname === "/register" ? (
            <></>
          ) : (
            <div className="flex items-center gap-3">
              <Link to='/wishlist'><Heart className="text-white"/></Link>
              <ShoppingBag className="text-white"/>
              <UserRound className="text-white"/>
              {isAuthenticated ? (
                <Button onClick={handleLogout}>LOGOUT</Button>
              ) : (
                <Link to="/login">
                  <Button>LOGIN</Button>
                </Link>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
