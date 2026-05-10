import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({ category, setCategory }) => {

  const { menu_list } = useContext(StoreContext);

  return (
    <div className='explore-menu' id='explore-menu'>
      <div className='explore-menu-header'>
        <h2 className='section-title'>Curated <span>Categories</span></h2>
        <p className='explore-menu-text'>Dive into our collection of carefully crafted categories, each offering a unique culinary journey.</p>
      </div>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <div className={`img-wrapper ${category === item.menu_name ? "active" : ""}`}>
                <img src={item.menu_image} alt={item.menu_name} />
              </div>
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <div className='divider'></div>
    </div>
  )
}

export default ExploreMenu
