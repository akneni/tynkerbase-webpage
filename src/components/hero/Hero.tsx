import './HeroStyles.css'
import Video from '../../assets/OtherVideo.mp4'

export function Hero() {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4' />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>The Cloud in the palm of your hand</h1>
        <h2>Open Source, Affordable and Educational</h2>
      </div>
    </div>
  )
}
