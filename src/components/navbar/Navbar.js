import logo from '../../assets/logo.png';
import './navbarStyles.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='box-navbar'>
                <img src={logo} alt="logo de la universidad Itecce" className='imgLogo' />
            </div>
        </div>
    );
}

export default Navbar;