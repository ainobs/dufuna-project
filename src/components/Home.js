import './Home.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { FcGoogle } from 'react-icons/fc';
import BG from '../images/cutleryblackBG.png';

const Home = () => {
    return ( 
        <div className="home">
            <img src={BG} alt='cutlery background' className='homeBG'/>
            <br/>
            <div className='buttons'>
                <button type='submit' className='signIn'>Sign In</button><br/>
                <button type='submit' className='signUp'>Sign Up</button>
                <h5 className='signText'>OR</h5>
            </div>
            <div className="socialIcons">
                <IconContext.Provider value={{ color:'#1877F2' }}>
                    <FaFacebookF />
                </IconContext.Provider>
                <FcGoogle />
                <IconContext.Provider value={{ color: '#1877F2'}}>
                    <FaTwitter />
                </IconContext.Provider>
                
            </div>
            
        </div>
     );
}
 
export default Home;