import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { name, email, password, password2 } = formData;
  const { isSuccess, message,isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: message,
      });
      navigate("/login")
    }
    if(isError){
      notification.error({
        message: message,
      });
    }
    dispatch(reset())
  }, [isSuccess, message,isError]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      notification.error({
        message: "Passwords do not match!!!",
      });
    } else {
      dispatch(register(formData));
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="name"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="password"
      />
      <input
        type="password"
        name="password2"
        value={password2}
        onChange={onChange}
        placeholder="confirm password"
      />
      <button type="submit">Register</button>
    </form>
  );
};
export default Register;
