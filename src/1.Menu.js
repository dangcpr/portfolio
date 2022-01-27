import './App.css';
import logo from './LogoDang.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Menu() {
    AOS.init();
    return(
        <div className='Block' data-aos-anchor-placement="top-top">
            <div className="logoDiv">
            <a href="https://dangcpr.github.io/portfolio">
                <img src={logo} alt="LogoDang" className='logo'></img></a>
            </div>
            <div className='BlockMenu'>
                <nav className='Menu'>
                    <a href = "#HomePage">Trang chủ</a>
                    <a href = "#AboutMe">About Me</a>
                    <a href = "#Portfolio">Portfolio</a>
                    <a href = "#Contact">Contact</a>
                </nav>
            </div>
        </div>
    )
}
export default Menu;