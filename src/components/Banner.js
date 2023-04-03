import { Discord, Twitter } from 'react-bootstrap-icons';
import 'animate.css';
import banner from '../assets/img/Group 2084.svg';

export const Banner = () => {
  return (
    <section className="banner" id="home">
        <div>
          <div className="title-wrapper">
            <img src={banner} alt="" />
            <div className="buttons-wrapper">
            <button className="button-tw" onClick={() => console.log('connect')}>
              <Twitter size={25} />
              <span>Follow Our Twitter</span>
            </button>
            <button className='button-discord' onClick={() => console.log('connect')}>
              <Discord size={25} />
              <span>Join our Discord</span>
            </button>
          </div>
          </div>

        </div>
    </section>
  )
}
