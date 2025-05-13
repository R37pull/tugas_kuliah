import React from 'react';
import './css/style.css'; // Import CSS
import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MainSection = () => {
    return (
        <section className="main-home">
            <div className="main-text">
                <h5>Winter Collection</h5>
                <h1>New Winter
                    <br/>
                    Collection</h1>
                <p>There's Nothing like Trend</p>
                <a href="#trending" className="main-btn">
                    Shop Now
                    <i className="bx bx-right-arrow-alt"></i>
                </a>
            </div>
        </section>
    );
};

export default MainSection;
