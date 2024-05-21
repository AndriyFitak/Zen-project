import './ErrorMessage.scss';

import close from './img/close.svg';

import { useDispatch } from 'react-redux';

import { changeIsOpenModal } from '../../features/sllices/createOrderSlice';

const ErrorMessage = ({ errName, errMessage }) => {
    const dispatch = useDispatch();

    const handleChangeIsOpenModal = () => {
        dispatch(changeIsOpenModal());
    }
    return (
        <div className="error-message-wrapper">
            <div className="error-message-wrapper_content">
                <div className="error-message-wrapper_content_upper-cont">
                    <h3>{errName}</h3>
                    <img src={close} alt='close' onClick={() => handleChangeIsOpenModal()}/>
                </div>
                <hr />
                <p>{errMessage}</p>
            </div>
        </div>
    )
}

export default ErrorMessage;