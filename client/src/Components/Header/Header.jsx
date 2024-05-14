import "./header.css"
import { LogoIcon, ProfileIcon, BasketIcon, BurgerIcon } from "../BackToTheMain/Icons/icons"
import { Link } from "react-router-dom"
const Header = () => {
    return(
        <>
        <header>
            <p className="logo" ><LogoIcon/></p>
            <nav className="nav-menu">
                <Link to="/"><p className="nav-text">Home</p></Link>
                <Link to="/ourorders"><p className="nav-text">Our orders</p></Link>
                <Link to="/information"><p className="nav-text">Information</p></Link>
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
            <button className="Burger"><BurgerIcon/></button>
        </header>
        </>
    )
}

export default Header