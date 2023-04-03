import { Discord, Twitter } from 'react-bootstrap-icons';
import 'animate.css';
import logo from '../assets/img/bannerlogo.png';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <div>
        <div className="title-wrapper">
          <div className="bannercontainer">
            <h1 className='title'>{`JAKANDA`} </h1>
            <span className="tagline">LIVING 4 LOVE</span>
            <img className="logo" src = {logo}></img>
          </div>
          <div className="buttons-wrapper">
          <button className="button-tw" onClick={() => window.open('https://twitter.com/JakandaLab', '_blank')}>
              <Twitter size={25} />
              <span>Follow Our Twitter</span>
            </button>
            <button className='button-discord' onClick={() => window.open('https://discord.gg/jakanda', '_blank')}>
              <Discord size={25} />
              <span>Join our Discord</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
