import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const validateName = (name) => {
        const regex = /^[A-Za-z]+$/;
        return regex.test(name);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6; 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newErrors = {};
        
        if (!validateName(formData.firstName)) {
            newErrors.firstName = "First name must contain only letters.";
        }
        if (!validateName(formData.lastName)) {
            newErrors.lastName = "Last name must contain only letters.";
        }
        if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!validatePassword(formData.password)) {
            newErrors.password = "Password must be at least 6 characters long.";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match!";
        }

        setErrors(newErrors);
        
        const valid = Object.values(newErrors).every((error) => error === '');

        if (valid) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigate('/login');
            }, 3000);
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    {['firstName', 'lastName', 'email', 'password', 'confirmPassword'].map((field, index) => (
                        <div className="input-group" key={index}>
                            <label>{field === 'confirmPassword' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                            <div className="input-wrapper">
                                <input 
                                    type={field.includes('password') ? (field === 'confirmPassword' ? (showConfirmPassword ? 'text' : 'password') : (showPassword ? 'text' : 'password')) : 'text'} 
                                    placeholder={field === 'confirmPassword' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)} 
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleInputChange}
                                    required 
                                    className={errors[field] ? 'error' : ''}
                                />
                                {field.includes('password') && (
                                    <span 
                                        className="toggle-password" 
                                        onClick={() => {
                                            if (field === 'password') {
                                                setShowPassword(!showPassword);
                                            } else {
                                                setShowConfirmPassword(!showConfirmPassword);
                                            }
                                        }}
                                    >
                                        {field === 'password' ? (showPassword ? <FaEyeSlash /> : <FaEye />) : (showConfirmPassword ? <FaEyeSlash /> : <FaEye />)}
                                    </span>
                                )}
                            </div>
                            {errors[field] && <div className="error-message">{errors[field]}</div>}
                        </div>
                    ))}
                    <button type="submit" disabled={loading} className="submit-button">
                    {loading ? (
        <>
            <FaSpinner className="spinner" style={{ animation: 'spin 1s infinite linear', marginRight: '8px' }} />
            Loading...
        </>
    ) : (
        'Register'
    )}                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;