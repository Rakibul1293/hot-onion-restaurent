import React, { useState } from 'react';
import "./FoodDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// import { useCartContext } from '../FoodDetails/FoodDetails';
// const CartContext = createContext();
// export const CartContextProvider = ({ children }) => {
//     const cartVal = cartVals(0);
//     console.log(cartVal);
//     return <CartContext.Provider value={cartVal}>{children}</CartContext.Provider>;
// }
// export const useCartContext = () => useContext(CartContext);



// const usePrevious = value => {
//     const prev = useRef();
//     useEffect(() => {
//         prev.current = value;
//     }, [value]);
//     return prev.current;
// }
// const previous = usePrevious(count);



const FoodDetails = (props) => {
    const { key, title, description, price, img } = props.foodDetail;
    const [count, setCount] = useState(1);
    if (count == 0) {
        setCount(1);
    }

    return (
        <div className="d-flex justify-content-between">
            <div className="right-part text-justify">
                <h1>{title}</h1>
                <p>{description}</p>
                <h1>${price}</h1>
                <button
                    style={{ display: "block" }}
                    className="signUp-btn button-margin">
                    <FontAwesomeIcon
                        onClick={() => setCount(count + 1)}
                        icon={faPlus} size="sm"
                    /> {count}
                    <FontAwesomeIcon
                        onClick={() => setCount(count - 1)}
                        icon={faMinus} size="sm"
                    />
                </button>
                <button
                    onClick={(e) => props.handleFoodItemRoute(e, "addCart", key)}
                    className="signUp-btn button-margin"
                ><FontAwesomeIcon icon={faShoppingCart} /> Add Cart
                </button>
            </div>

            <div className="left-part">
                <div className="card">
                    <img className="card-img-top mx-auto pt-3" src={img} alt="Card image cap" />
                    <div className="card-body">
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FoodDetails;