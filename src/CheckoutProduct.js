import React from 'react';
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {

    const [{basket},dispatch]= useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className='checkoutProduct'>
        <img className='CheckoutProduct_image' src={image} />

        <div className='checkoutProduct_Info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_Price'><small>₹</small> <strong>{price}</strong></p>
            <div className='checkoutProduct_rating'>
                {Array(rating).fill().map((_,i)=>(
                    <p>🌟</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
