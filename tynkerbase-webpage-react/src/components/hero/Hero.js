import React from 'react'
import './HeroStyles.css'
import Video from '../../assets/11922045_2160_2160_24fps.mp4'

function Hero() {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4' />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>The cloud, in the palm of your hand</h1>
        <h2>TynkerBase provides an easy-to-use, affordable, and educational platform for deploying and managing cloud services on your own hardware</h2>
      </div>
    </div>
  )
}

export default Hero
