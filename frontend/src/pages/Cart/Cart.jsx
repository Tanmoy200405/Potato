import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <div className='divider'></div>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            const itemImage = item.image.includes("/") ? item.image : url + "/images/" + item.image;
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={itemImage} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{currency}{item.price}</p>
                  <div className='quantity-badge'>{cartItems[item._id]}</div>
                  <p>{currency}{item.price * cartItems[item._id]}</p>
                  <p className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)}>✕</p>
                </div>
                <div className='divider'></div>
              </div>
            )
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2 className='section-title'>Cart <span>Totals</span></h2>
          <div className='cart-total-container'>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <div className='divider'></div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p>
            </div>
            <div className='divider'></div>
            <div className="cart-total-details total-row">
              <b>Total</b>
              <b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b>
            </div>
          </div>
          <button className='checkout-btn' onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p className='promo-text'>Have a promo code? Enter it here</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='Enter code' />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
