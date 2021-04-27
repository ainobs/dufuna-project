import './Landing.css';
import BG from '../images/cutleryBG.png';

const Landing = () => {
    return ( 
        <div className="landing">
            <img className='landingBG' src={BG} alt='cutlery background'/>
            <br/>
            <span className='landingText'>Let's Get</span>
            <br/>
            <span className='landingText'>You Eating</span>
            <div className="logo">
                <span className='logoText'>aFI</span>
            </div>

        </div>
     );
}
 
export default Landing;