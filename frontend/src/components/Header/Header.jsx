import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='header-contents'>
                <h1 className='header-title'>Delectable moments <br /> delivered to your <span>doorstep</span>.</h1>
                <p className='header-desc'>Experience the finest flavors from the comfort of your home. Potato brings you a curated selection of premium cuisines, prepared by master chefs using the freshest local ingredients.</p>
                <div className='header-btns'>
                    <button className='primary-btn' onClick={() => document.getElementById('explore-menu').scrollIntoView({behavior: 'smooth'})}>View Menu</button>
                    <button className='secondary-btn' onClick={() => navigate('/myorders')}>Track Order</button>
                </div>
            </div>
        </div>
    )
}

export default Header
