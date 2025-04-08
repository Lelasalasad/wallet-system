import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../App.css';

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters long')
                .required('Required'),
        }),
        onSubmit: (values, { setSubmitting }) => {
            
            setTimeout(() => {
                setSubmitting(false);
                navigate('/Operations');
            }, 2000);
        },
    });

    return (
        <motion.div
            className="container log"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="form-container log">
                <h2>Login</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="input-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            required
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error-message">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            required
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="error-message">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <button type="submit" disabled={formik.isSubmitting}>
                        {formik.isSubmitting ? (
                            <>
                                <FaSpinner className="spinner" style={{ marginRight: '8px', animation: 'spin 1s infinite linear' }} />
                                Loading...
                            </>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
                <div className="register-link">
                    <p>If you don't have an account, <a className='a' href="/register">register here</a></p>
                </div>
            </div>
        </motion.div>
    );
};

export default Login;