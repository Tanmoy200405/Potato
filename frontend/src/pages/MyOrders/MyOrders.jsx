import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

const MyOrders = () => {

  const [data, setData] = useState([]);
  const { url, token, currency } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setData(response.data.data)
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token])

  return (
    <div className='my-orders'>
      <h2 className='section-title'>My <span>Orders</span></h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className='my-orders-order'>
              <img src={assets.parcel_icon} alt="" className='parcel-icon' />
              <div className='order-details'>
                <p className='order-items'>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity
                    } else {
                      return item.name + " x " + item.quantity + ", "
                    }
                  })}
                </p>
              </div>
              <p className='order-amount'>{currency}{order.amount}.00</p>
              <p className='order-item-count'>Items: {order.items.length}</p>
              <p className='order-status'>
                <span className={`status-dot ${order.status.toLowerCase()}`}>&#x25cf;</span> 
                <b className='status-text'>{order.status}</b>
              </p>
              <button className='track-btn' onClick={fetchOrders}>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
