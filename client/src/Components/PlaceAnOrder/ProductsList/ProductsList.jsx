import { useDispatch } from "react-redux";

import { changeCount, finishPrice } from '../../../features/sllices/createOrderSlice';

const ProductsList = ({imgSrc, name, price, count, id}) => {
    const dispatch = useDispatch();

    const changeProductCount = (id, operation) => {
        dispatch(changeCount({id: id, operation: operation}));
        dispatch(finishPrice());
    }
    console.log(id)
    return (
        <div className="card" id={id}>
        <div className="img-section">
            <img src={imgSrc} alt={name} />
        </div>
        <div className="info-section">
            <p className="name">{name}</p>
            <p className='price'>{price} uah</p>
            <div className="count">
                <button className='count_btn' id={id} onClick={() => changeProductCount(id, 'minus')}>-</button>
                <p className="count_text">{count}</p>
                <button className='count_btn' id={id} onClick={() => changeProductCount(id, 'plus')}>+</button>
            </div>
        </div>
    </div>
    );
}

export default ProductsList;