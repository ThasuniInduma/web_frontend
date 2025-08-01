import React, { useContext } from "react";
import './CakeItem.css'
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../assets/assets";


const CakeItem = ({id,name,price,description,image}) => {
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

    return (
        <div className='cake-item'>
            <div className='cake-item-image-container'>
                <img className='cake-item-image' src={image} alt='' />
                {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                : <div className='cake-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='' />
                </div>
                } 
            </div>
            <div className='cake-item-info'>
                <div className='cake-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='' />
                </div>
                <p className='cake-item-desc'>{description}</p>
                <p className='cake-item-price'>LKR {price}</p>
            </div>
        </div>
    )
}
export default CakeItem