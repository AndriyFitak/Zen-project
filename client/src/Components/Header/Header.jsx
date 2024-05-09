import "./header.css"
import Logo from "./img/Logo.png"
import BasketImg  from "./img/Basket.png"
import ProfileImg from "./img/Profile.png"
import BurgerImg from "./img/Burger.svg"
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
                    <p to="/basket"><img className="info-img-basket" src={BasketImg} alt="" /></p>
                </div>
                 <div className="profile">
                    <p className="nav-text">Your profile</p>
                    <p className="info-img-profile"  ><ProfileIcon/></p>
                 </div>
            </div>
            <img className="Burger" src={BurgerImg} alt="" />
        </header>
        </>
    )
}

export default Header