import React from 'react';
import './BannerTop.css';

const BannerTop = () => {
    return (
        <section className="top-banner">
            <h1 className="text-center txt-dec">Best Food Waiting For Your Belly</h1>
            <div className="input-group">
                <input type="text" className="form-control form-rounded box-width" placeholder="Search for..." />
                <span className="input-group-btn">
                    <button className="btn btn-search" type="button">Search</button>
                </span>
            </div>
        </section>
    );
};

export default BannerTop;