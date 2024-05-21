import "./header.css"
import { LogoIcon, ProfileIcon, BasketIcon, BurgerIcon } from "../BackToTheMain/Icons/icons"
import { Link } from "react-router-dom"
const Header = () => {
    return(
        <>
        <header className="header">
            <p className="logo"><LogoIcon/></p>
            <nav className="nav-menu">
                <Link to="/" className="nav-text">Home</Link>
                <Link to="/yourOrders" className="nav-text">Your orders</Link>
                <Link to="/placeAnOrder" className="nav-text">Place An Order</Link>
                <Link to="/information" className="nav-text">Information</Link>
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
            <button className="burger"><BurgerIcon/></button>
        </header>
        </>
    )
}

export default Header