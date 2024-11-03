import React, { useState } from "react";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import "./Auth.css";


export default function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.email) validationErrors.email = "Email is required";
        if (!formData.password) validationErrors.password = "Password is required";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    };

    const checkLogin = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/auth/checklogin`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const result = await response.json();

            if (response.ok) {
                window.location.href = "/";
            } else {
            }
        } catch (error) {
            window.location.href = "/";
        }
    };

    return (
        <div className="auth-out">
            <div className="auth-in">
                <div className="left">
                    <img src={logo} alt="Logo" className="img" />
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                        <div className="form-input-cont">
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>
                        <div className="form-input-cont">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <span className="form-error">{errors.password}</span>}
                        </div>
                        <button type="submit" className="main-button">
                            Login
                        </button>
                        <p className="auth-link">
                            Don't have an account? <a href="/auth/signup">Register</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
