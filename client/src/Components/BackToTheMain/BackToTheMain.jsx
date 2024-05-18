import './BackToTheMain.scss'

import iconSrc from './img/img.svg';

import { useNavigate } from 'react-router-dom';

const BackToTheMain = () => {
    const navigate = useNavigate();

    return (
        <div className="wrapper" onClick={() => navigate('/')}>
            <div className="icon">
                <img src={iconSrc} alt="icon" />
            </div>
            <p>Back to the <br /> main</p>
        </div>
    );
}

export default BackToTheMain;