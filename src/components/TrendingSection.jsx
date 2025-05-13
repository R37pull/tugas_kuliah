import React from 'react';
import './css/style.css'; // Import CSS
import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TrendingSection = () => {
    return (
        <section className="trending-product" id="trending">
            <div className="center-text">
                <h2>Our Trending
                    <span>Products</span>
                </h2>
            </div>
            <div className="products">
                {
                    [...Array(6)].map((_, index) => (
                        <div className="row" key={index}>
                            <img src="image/1.jpg" alt="Product"/>
                            <div className="product-text">
                                <h5>Sale</h5>
                            </div>
                            <div className="heart-icon">
                                <i className="bx bx-heart"></i>
                            </div>
                            <div className="ratting">
                                <i className="bx bx-star"></i>
                                <i className="bx bx-star"></i>
                                <i className="bx bx-star"></i>
                                <i className="bx bx-star"></i>
                                <i className="bx bxs-star-half"></i>
                            </div>
                            <div className="price">
                                <h4>Half Running Set</h4>
                                <p>$99 - $129</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default TrendingSection;
