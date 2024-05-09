import "./header.css"
import { Link } from "react-router-dom"
import { BasketIcon, BurgerIcon, LogoIcon, ProfileIcon } from "../BackToTheMain/Icons/icons"
const Header = () => {
    return(
        <>
        <header>
            <p className="logo" ><LogoIcon/></p>
            <nav className="nav-menu">
                <p to="/"><p className="nav-text">Home</p></p>
                <p to="/ourorders"><p className="nav-text">Our orders</p></p>
                <p to="/information"><p className="nav-text">Information</p></p>
            </nav>
            <div className="your-info">
                <div className="basket">
                    <hr />
                    <Link to="/basket"><BasketIcon/></Link>
                </div>
                 <div className="profile">
                    <p className="nav-text">Your profile</p>
                    <p className="info-img-profile"  ><ProfileIcon/></p>
                 </div>
            </div>
            <p className="Burger" ><BurgerIcon/></p>
        </header>
        <hr className="hrHeader"></hr>
        </>
    )
}

export default Header