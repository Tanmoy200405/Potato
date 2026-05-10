import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {

  const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image.includes("/") ? image : url + "/images/" + image} alt={name} />
        {!cartItems[id]
          ? <div className='add-icon-container' onClick={() => addToCart(id)}>
              <img className='add' src={assets.add_icon_white} alt="" />
            </div>
          : <div className="food-item-counter">
            <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className='item-name'>{name}</p> 
          <img src={assets.rating_starts} alt="" className='rating-stars' />
        </div>
        <p className="food-item-desc">{desc}</p>
        <div className='item-footer'>
          <p className="food-item-price">{currency}{price}</p>
          <div className='tag'>Potato Pick</div>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
