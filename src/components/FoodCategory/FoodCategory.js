import React, { useEffect, useState } from 'react';
import "./FoodCategory.css";
import FoodCategoryItem from '../FoodCategoryItem/FoodCategoryItem';
import FoodDetails from '../FoodDetails/FoodDetails';
import Login from '../Auth/Login';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';
// import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const FoodCategory = () => {
    const data = fakeData.slice(0, 19);
    const breakfast = data.filter(data => data.type === "breakfast");
    const lunch = data.filter(data => data.type === "lunch");
    const dinner = data.filter(data => data.type === "dinner");

    const [foodData, setFoodData] = useState(lunch);
    const [foodDetail, setFoodDetail] = useState(lunch);

    const selectedMenuData = (menu, item) => {
        let newFoodData = [];
        if (menu === "breakfast" || menu === "lunch" || menu === "dinner") {
            newFoodData = item;
            console.log(newFoodData);
            setFoodData(newFoodData);
        }
        return newFoodData;
    }

    const eventTypes = "FoodCategoryItem";
    const [eventType, setEventType] = useState(eventTypes);
    const handleFoodItemRoute = (e, eventType, key) => {
        e.preventDefault();
        setEventType(eventType);
        const FoodDetails = foodData.filter(foodData => foodData.key === key);
        setFoodDetail(FoodDetails);
        console.log(FoodDetails);
        console.log(eventType);
    }

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-interval="false" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0"><span onClick={() => selectedMenuData("breakfast", breakfast)}>Breakfast</span></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1" className="active"><span onClick={() => selectedMenuData("lunch", lunch)}>Lunch</span></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"><span onClick={() => selectedMenuData("dinner", dinner)}>Dinner</span></li>
                </ol>

                {
                    eventType === "FoodCategoryItem" || eventType === "FoodDetails" || eventType === "addCart" ?
                        <div className="carousel-inner text-center">
                            <div className="carousel-item text-center">
                                <li></li>
                                <div className="card-deck">
                                    {
                                        eventType === "FoodCategoryItem" &&
                                        foodData.map(foodData => <FoodCategoryItem
                                            handleFoodItemRoute={handleFoodItemRoute}
                                            key={foodData.key}
                                            foodData={foodData}
                                        ></FoodCategoryItem>)
                                    }
                                    {
                                        eventType === "FoodDetails" &&
                                        foodDetail.map(foodDetail => <FoodDetails
                                            handleFoodItemRoute={handleFoodItemRoute}
                                            key={foodDetail.key}
                                            eventType={eventType}
                                            foodDetail={foodDetail}
                                        ></FoodDetails>)
                                    }
                                    {
                                        eventType === "addCart" &&
                                        foodDetail.map(foodDetail => <FoodDetails
                                            handleFoodItemRoute={handleFoodItemRoute}
                                            key={foodDetail.key}
                                            eventType={eventType}
                                            foodDetail={foodDetail}
                                        ></FoodDetails>)
                                    }
                                </div>

                                {
                                    eventType === "FoodCategoryItem" &&
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button
                                                type="button"
                                                className="btn btn-secondary  disabled">
                                                Checkout Your Food
                                            </button>
                                        </div>
                                    </div>
                                }
                                {
                                    eventType === "FoodDetails" &&
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button
                                                type="button"
                                                className="btn btn-secondary disabled ">
                                                Checkout Your Food
                                            </button>
                                        </div>
                                    </div>
                                }
                                {
                                    eventType === "addCart" &&
                                    <div className="row">
                                        <div className="col-md-12">
                                            <a href="/login">
                                                <button
                                                    onClick={(e) => handleFoodItemRoute(e, "login", "login")}
                                                    type="button"
                                                    className="btn btn-primary">
                                                    Checkout Your Food
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                }
                            </div>



                            <div className="carousel-item active text-center">
                                <li></li>
                                <div className="card-deck">
                                    {
                                        eventType === "FoodCategoryItem" &&
                                        foodData.map(foodData => <FoodCategoryItem
                                            handleFoodItemRoute={handleFoodItemRoute}
                                            key={foodData.key}
                                            foodData={foodData}
                                        ></FoodCategoryItem>)
                                    }
                                    {
                                        eventType === "FoodDetails" &&
                                        foodDetail.map(foodDetail => <FoodDetails
                                            handleFoodItemRoute={handleFoodItemRoute}
                                            key={foodDetail.key}
                                            eventType={eventType}
                                            foodDetail={foodDetail}
                                        ></FoodDetails>)
                                    }
                                    {
                                        eventType === "addCart" &&
                                        foodDetail.map(foodDetail => <FoodDetails
                                            handleFoodItemRoute={handleFoodItemRoute}
                                            key={foodDetail.key}
                                            eventType={eventType}
                                            foodDetail={foodDetail}
                                        ></FoodDetails>)
                                    }
                                </div>

                                {
                                    eventType === "FoodCategoryItem" &&
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button
                                                type="button"
                                                className="btn btn-secondary  disabled">
                                                Checkout Your Food
                                            </button>
                                        </div>
                                    </div>
                                }
                                {
                                    eventType === "FoodDetails" &&
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button
                                                type="button"
                                                className="btn btn-secondary disabled">
                                                Checkout Your Food
                                            </button>
                                        </div>
                                    </div>
                                }
                                {
                                    eventType === "addCart" &&
                                    <div className="row">
                                        <div className="col-md-12">
                                            <a href="/login">
                                                <button
                                                    onClick={(e) => handleFoodItemRoute(e, "login", "login")}
                                                    type="button"
                                                    className="btn btn-primary">
                                                    Checkout Your Food
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                }
                            </div>



                            <div className="carousel-item text-center">
                                <li></li>
                                <div className="card-deck">
                                    {
                                        eventType === "FoodCategoryItem" &&
                                        foodData.map(foodData => <FoodCategoryItem
                                            handleFoodItemRoute={handleFoodItemRoute}
                                            key={foodData.key}
                                            foodData={foodData}
                                        ></FoodCategoryItem>)
                                    }
                                    {
                                        eventType === "FoodDetails" &&
                                        foodDetail.map(foodDetail => <FoodDetails
                                            handleFoodItemRoute={handleFoodItemRoute}
                                            key={foodDetail.key}
                                            eventType={eventType}
                                            foodDetail={foodDetail}
                                        ></FoodDetails>)
                                    }
                                    {
                                        eventType === "addCart" &&
                                        foodDetail.map(foodDetail => <FoodDetails
                                            handleFoodItemRoute={handleFoodItemRoute}
                                            key={foodDetail.key}
                                            eventType={eventType}
                                            foodDetail={foodDetail}
                                        ></FoodDetails>)
                                    }
                                </div>

                                {
                                    eventType === "FoodCategoryItem" &&
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button
                                                type="button"
                                                className="btn btn-secondary  disabled">Checkout Your Food
                                            </button>
                                        </div>
                                    </div>
                                }
                                {
                                    eventType === "FoodDetails" &&
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button
                                                type="button"
                                                className="btn btn-secondary disabled">
                                                Checkout Your Food
                                            </button>
                                        </div>
                                    </div>
                                }
                                {
                                    eventType === "addCart" &&
                                    <div className="row">
                                        <div className="col-md-12">
                                            <a href="/login">
                                                <button
                                                    onClick={(e) => handleFoodItemRoute(e, "login", "login")}
                                                    type="button"
                                                    className="btn btn-primary">
                                                    Checkout Your Food
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div> :
                        <Login></Login>
                }
            </div>
        </div >
    );
};

export default FoodCategory;