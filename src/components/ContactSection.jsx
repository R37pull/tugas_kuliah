import React from 'react';
import './css/style.css'; // Import CSS
import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactSection = () => {
    return (
        <section className="contact">
            <div className="first-info">
                <img src="../image/logo.png" alt="Logo" />
                <p>
                    3245 Grant Street Longview, <br />
                    TX united kingdom 765378
                </p>
                <p>0160134248147</p>
                <p>sani@gmail.com</p>
                <div className="social-icon">
                    <a href="#"><i className="bx bxl-facebook"></i></a>
                    <a href="#"><i className="bx bxl-twitter"></i></a>
                    <a href="#"><i className="bx bxl-instagram"></i></a>
                    <a href="#"><i className="bx bxl-youtube"></i></a>
                    <a href="#"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>

            <div className="footer">
                <div className="second-info">
                    <h4>Support</h4>
                    <p>Contact us</p>
                    <p>About page</p>
                    <p>Size Guide</p>
                    <p>Shopping & Returns</p>
                    <p>Privacy</p>
                </div>

                <div className="third-info">
                    <h4>Shop</h4>
                    <p>Men's Shopping</p>
                    <p>Women's Shopping</p>
                    <p>Kids' Shopping</p>
                    <p>Furniture</p>
                    <p>Discount</p>
                </div>

                <div className="fourth-info">
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Affiliate</p>
                    <p>Login</p>
                </div>

                <div className="five">
                    <h4>Subscribe</h4>
                    <p>Receive updates, hot deals, and discounts sent straight to your inbox daily.</p>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eum, Debitis.</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
