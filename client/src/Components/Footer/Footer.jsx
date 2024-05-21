import s from './Footer.module.scss'
import { Link } from 'react-router-dom'
import { DownloadIcon1, DownloadIcon2, FooterLogoIcon, InstagramIcon, FacebookIcon } from '../BackToTheMain/Icons/icons'

const Footer = () => {
    return (

        <footer className={s.footer}>
        <div className={s.footer_logo}>
        <FooterLogoIcon className={s.footer_logo_img}/>
        <p className={s.footer_logo_text}>© Copyright 2022 Zen. All rights reserved.</p>
        </div>
        <div className={s.footer_QuickNavigation}>
        <p>Quick Navigation:</p>
        <Link className={s.footer_QuickNavigation_nav} to='/'>Home</Link>
        <Link  className={s.footer_QuickNavigation_nav} to='/information'>Information</Link>
        <Link className={s.footer_QuickNavigation_nav} to='/aboutUs'>About us</Link>
        </div>
        <div className={s.footer_DownloadApp}>
            <p>Download App:</p>
        <p className={s.footer_DownloadAppIcon}><DownloadIcon1/></p>
        <p className={s.footer_DownloadAppIcon}><DownloadIcon2/></p>
        </div>
        <div className={s.FollowUs}>
            <p>Follow Us:</p>
            <p className={s.FollowUs_icon}><InstagramIcon/></p>
            <p className={s.FollowUs_icon}><FacebookIcon/></p>
        </div>
        </footer>
    )
}

export default Footer