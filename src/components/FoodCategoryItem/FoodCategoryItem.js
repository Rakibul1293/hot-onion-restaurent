import React, { useState, useEffect } from 'react';
import "./FoodCategoryItem.css";

const FoodCategoryItem = (props) => {
    const { key, title, description, price, img } = props.foodData;

    return (
        <div>
            <div className="food-category-item" onClick={(e) => props.handleFoodItemRoute(e, "FoodDetails", key)}>
                <div className="card">
                    <img className="card-img-top mx-auto pt-3" src={img} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p>{description}</p>
                        <h5>{price}</h5>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default FoodCategoryItem;