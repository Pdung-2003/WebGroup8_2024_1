import React, { useState } from "react";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import "./Auth.css";


export default function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
        setErrors({});

        const validationErrors = {};
        if (!formData.email) validationErrors.email = "Email is required";
        if (!formData.password) validationErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = "Passwords do not match";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    };

    return (
        <div className="auth-out">
            <div className="auth-in">
                <div className="left">
                    <img src={logo} alt="Logo" className="img" />
                </div>
                <div className="right">
                    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
                        <div className="form-input-cont">
                            <label>Name</label>
                            <input type="text" placeholder="Enter Your Name" name="name" value={formData.name} onChange={handleChange} />
                            {errors.name && <span className="form-error">{errors.name}</span>}
                        </div>
                        <div className="form-input-cont">
                            <label>Email</label>
                            <input type="text" placeholder="Enter Your Email" name="email" value={formData.email} onChange={handleChange} />
                            {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>
                        <div className="form-input-cont">
                            <label>Password</label>
                            <input type="password" placeholder="Enter Your Password" name="password" value={formData.password} onChange={handleChange} />
                            {errors.password && <span className="form-error">{errors.password}</span>}
                        </div>
                        <div className="form-input-cont">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Confirm Your Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                            {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
                        </div>
                        <button type="submit" className="main-button">Register</button>
                        <p className="auth-link">Already have an account? <a href="/auth/signin">Log in</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
