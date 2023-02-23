import { NavLink } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
    const path = window.location.pathname;
    if (path === '/') return null;
    if (path === '/login') return null;
    if (path === '/signup') return null;
    
    return (
        <div className='footer_wrap'>
            <div className="footer">
                <NavLink to='/map' className={({ isActive }) => isActive ? "on" : ""}>
                    <div id='nav1' className="under_nav_btn">
                        <img src="images/footer/map_on.svg" alt="map" />
                        <img src="images/footer/map_basic.svg" alt="map" />
                        <p>Map</p>
                    </div>
                </NavLink>
                <NavLink to='/myroom' className={({ isActive }) => isActive ? "on" : ""}>
                    <div id='nav2' className="under_nav_btn">
                        <img src="images/footer/myroom_on.svg" alt="myroom" />
                        <img src="images/footer/myroom_basic.svg" alt="myroom" />
                        <p>Myroom</p>
                    </div>
                </NavLink>
                <NavLink to='/qrcode' className={({ isActive }) => isActive ? "on" : ""}>
                    <div id='nav3' className="under_nav_btn">
                        <img src="images/footer/qr_on.svg" alt="qr_code" />
                        <img src="images/footer/qr_basic.svg" alt="qr_code" />
                        <p>QRcode</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Footer;