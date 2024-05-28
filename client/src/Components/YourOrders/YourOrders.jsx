import BackToTheMain from "../BackToTheMain/BackToTheMain";
import ProductsList from "./ProductsList/ProductsList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { ordersGet } from "../../features/sllices/yourOrdersSlice";

import './YourOrders.scss';
import './media.scss';

import loading from './img/loading.svg';

const YourOrders = () => {
    const dispatch = useDispatch();

    const list = useSelector(state => state.yourOrders.list);
    const { isLoading, isError } = useSelector(state => state.yourOrders);

    const phoneNumber = localStorage.getItem('phoneNumber');

    useEffect(() => {
        if (phoneNumber) {
            dispatch(ordersGet({ phoneNumber: phoneNumber }));
        } else {
            alert('You do not have any orders');
        };
    }, [phoneNumber, dispatch])

    return (
        <>
            {
                isLoading && 
                <center className='loading'>
                    <img src={loading} alt="loading" />
                </center>
            }
            {
                isError &&
                <ErrorMessage 
                    errName='Server Error'
                    errMessage='Oops! Something went wrong'
                />
            }
            <div className="container">
                <section className="upper-section">
                    <BackToTheMain/>
                    <div className="upper-section_info-block">
                        <p>Your orders</p>
                        <hr />
                    </div>
                </section>
                <section className="main-section">
                {
                    list.map(item => {
                        return (
                        item.orderProducts.map(product => (
                            <ProductsList
                            key={product._id}
                            id={product._id}
                            img={product.imgSrc}
                            name={product.productName}
                            price={product.productPrice}
                            count={product.count}
                            date={item.createdAt}
                            status='Виконано'
                            />
                        ))
                        )
                    })
                }
                </section>
            </div>
        </>
    );
}

export default YourOrders;