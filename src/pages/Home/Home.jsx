import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import info_icon from '../../assets/info_icon.png'
import play_icon from '../../assets/play_icon.png'
const Home = () => {
  return (
    <div className='home'>
    <Navbar />
    <div className="hero">
      <img src={hero_banner} alt="" className='banner-img' />
      <div className="hero-caption">
        <img src={hero_title} alt="" className='hero-title' />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur iure aliquam distinctio vitae ea nihil cum libero harum quas minima ratione qui consequuntur totam quos ipsa dolorum, fuga nemo dolorem.</p>
        <div className="hero-btn">
          <button className='btn play-btn'><img src={play_icon} alt="" /> Play</button>
          <button className='btn info-btn'><img src={info_icon} alt="" /> More Info</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home