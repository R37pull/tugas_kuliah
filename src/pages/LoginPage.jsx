import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
