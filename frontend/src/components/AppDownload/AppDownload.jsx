import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <div className='app-download-content'>
                <h2 className='section-title'>Get the <span>Potato App</span></h2>
                <p>For a seamless experience and exclusive offers, download the Potato app today.</p>
                <div className="app-download-platforms">
                    <img src={assets.play_store} alt="Play Store" />
                    <img src={assets.app_store} alt="App Store" />
                </div>
            </div>
        </div>
    )
}

export default AppDownload
