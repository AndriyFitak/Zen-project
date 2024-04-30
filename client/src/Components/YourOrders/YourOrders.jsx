import BackToTheMain from "../BackToTheMain/BackToTheMain";
import ProductsList from "./ProductsList/ProductsList";

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { ordersGet } from "../../features/slices/yourOrders";

import './YourOrders.scss';
import './media.scss';

const YourOrders = () => {
    const dispatch = useDispatch();

    const list = useSelector(state => state.yourOrders.list);

    const phoneNumber = localStorage.getItem('phoneNumber');

    useEffect(() => {
        if (phoneNumber) {
            dispatch(ordersGet({ phoneNumber: phoneNumber }));
        } else {
            alert('You do not have any orders');
        };
    }, [])

    return (
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
                        status='Доставлено'
                        />
                    ))
                    )
                })
            }
            </section>
        </div>
    );
}

export default YourOrders;