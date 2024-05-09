import "./header.css"
import {Link} from "react-router-dom"
import Logo from "./img/Logo.png"
import BasketImg  from "./img/Basket.png"
import ProfileImg from "./img/Profile.png"
import BurgerImg from "./img/Burger.svg"
const Header = () => {
    return(
        <header>
            <img className="" src={Logo} alt="" />
            <nav className="nav-menu">
                <Link to="/"><p className="nav-text">Home</p></Link>
                <Link to="/ourorders"><p className="nav-text">Our orders</p></Link>
                <Link to="/information"><p className="nav-text">Information</p></Link>
            </nav>
            <div className="your-info">
                <div className="basket">
                    <hr className="hr-header"/>
                    <Link to="/basket"><img className="info-img-basket" src={BasketImg} alt="" /></Link>
                </div>
                 <div className="profile">
                    <p className="nav-text">Your profile</p>
                    <img className="info-img-profile" src={ProfileImg} alt="" />
                 </div>
            </div>
            <img className="Burger" src={BurgerImg} alt="" />
            
        </header>
        
    )
}

export default Header