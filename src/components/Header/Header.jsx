import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const onLogout = () => {
    dispatch(logout());
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  const handleChange = (e) => {
    setText(e.target.value)
    if (e.key == "Enter") {
      navigate("/search/"+text)
    }
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <input onKeyUp={handleChange} placeholder="search post" name="text" />
      {user ? (
        <>
          <Link to="/profile">{user.name}</Link>
          <Button onClick={onLogout}>Logout</Button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Header;
