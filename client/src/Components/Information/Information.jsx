import React from 'react';
import facebook from './img/facebook.png';
import youtube from './img/youtube.png';
import instagram from './img/insta.png';
import telega from './img/telega.png';
import whatsup from './img/whatsup.png';
import kievstar from './img/kievstar.png';
import vadafone from './img/vadafone.png';
import lifesell from './img/lifesell.png';

import './Information.scss';

const Information = () => {
    return (
        <>
        <div className='container'>
            <header className='header'>
                <div className='info'>
                    <p className='pInfo'>Information</p>
                </div>
            </header>
            <body className='body'>
                <p className='social-networkP'>social network</p>
                <div className='social-networkblock'>
                    <div className='social-networkblockprocent'>
                        <div className='social-network1'>
                            <div className='facebookblock'>
                                <a href="https://uk-ua.facebook.com/"><img src={facebook} alt="" /></a>
                                <p>@ZEN-hotNews</p>
                            </div>
                            <div className='youtubeblock'>
                                <a href="https://www.youtube.com/"><img src={youtube} alt="" /></a>
                                <p>@ZEN-videos</p>
                            </div>
                            <div className='instagramblock'>
                                <a href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
                                <p>@ZEN-posts</p>
                            </div>
                        </div>  
                        <div className='social-network2'>
                            <div className='telegramblock'>
                                <a href="https://telegram.org/"><img src={telega} alt="" /></a>
                                <p>@ZEN-MENUupdatess</p>
                            </div>
                            <div className='whatsupblock'>
                                <a href="https://www.whatsapp.com/"><img src={whatsup} alt="" /></a>
                                <p>@ZEN-supportChat</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <p className='numbersP'>phone numbers</p>
                <div className='phone-numbersblock'>
                    <div className='phone-numbersblockprocent'>
                        <div className='phone-numbersblock1'>
                            <div className='kievstarblock'>
                                <a href="https://kyivstar.ua/"><img src={kievstar} alt="" /></a>
                                <p> +067 999 898989</p>
                            </div>
                            <div className='vadafoneblock'>
                                <a href="https://www.vodafone.ua/"><img src={vadafone} alt="" /></a>
                                <p> +050 999 898989</p>
                            </div>
                        </div>
                        <div className='phone-numbersblock2'>
                            <div className='lifecellblock'>
                                <a href="https://www.lifecell.ua/uk/"><img src={lifesell} alt="" /></a>
                                <p> +093 999 898989</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <p className='mailP'>Mail</p>
                <div className='mailblock'>
                    <p>ZEN-official@gmail.com</p>
                </div>
                <p className='Our-partnersP'>Our partners</p>
                <div className='ourpartnersblock'>
                    <p>@PESpatron-official</p>
                    <p>@PalianytsiaUA</p>
                </div>
            </body>
        </div>
        
        </>
    )
}
export default Information