import BackToTheMain from '../BackToTheMain/BackToTheMain';
import ProductsList from './ProductsList/ProductsList';

import './PlaceAnOrder.scss';
import './media.scss'

import pickupImg from './img/svg1.svg';
import deliveryImg from './img/svg2.svg';

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { orderCreate, finishPrice } from '../../features/slices/createOrder';

const PlaceAnOrder = () => {
    const dispatch = useDispatch();

    const ordersList = useSelector(state => state.createOrder.list)

    const isLoading = useSelector(state => state.createOrder.isLoading);
    const isError = useSelector(state => state.createOrder.isError);

    const totalPrice = useSelector(state => state.createOrder.totalPrice);

    const [form, setForm] = useState({
        name: '',
        phoneNumber: null,
        cardNumber: null,
        delivery: {
            adress: '',
            typeDel: ''
        },
        wishes: '',
        orderProducts: [

        ]
    });

    const handleUpdateForm = (formType, formName) => { 
        setForm({
          ...form,
          [formType]: formName
        });
      }

      const handleUpdateDeliveryForm = (formType, formName) => {
        setForm({
            ...form,
            delivery: {
                ...form.delivery,
                [formType]: formName
            }
        })
      }

      const handleUpdateDeliveryType = (type) => {
        setForm({
          ...form,
          delivery: {
            ...form.delivery,
            typeDel: type
          }
        });
      }

      const dispatchCreateOrder = () => {
        dispatch(orderCreate({ 
            name: form.name, 
            phoneNumber: parseInt(form.phoneNumber), 
            cardNumber: parseInt(form.cardNumber), 
            delivery: {
                typeDel: form.delivery.typeDel, 
                adress: form.delivery.adress && form.delivery.adress
            }, 
            wishes: form.wishes && form.wishes, 
            finishPrice: totalPrice,
            orderProducts: form.orderProducts 
        }));
        localStorage.setItem('phoneNumber', form.phoneNumber);
      }

      const handleCreateOrder = () => {
        form.orderProducts = ordersList;
        if (form.name && form.phoneNumber && form.cardNumber && form.delivery.typeDel && form.orderProducts && form.delivery.typeDel) {
            if (form.delivery.typeDel === 'delivery') {
                if (form.delivery.adress) {
                    dispatchCreateOrder();
                    return;
                } else {
                    alert('Invalid request!');
                };
            }
            if (!localStorage.getItem('phoneNumber')) dispatchCreateOrder();
        } else {
            // change in future
            alert('Invalid request!');
        };
    }

    useEffect(() => {
        dispatch(finishPrice());
    }, [])

    return (
        <div className="container">
            <section className="upper-section">
                <BackToTheMain/>
                <div className="round-div">
                    <p>Place an order</p>
                </div>
            </section>
            <section className="cards-section">
                { ordersList.map(item => (
                    <ProductsList
                    imgSrc={item.imgSrc}
                    name={item.productName}
                    price={item.productPrice}
                    count={item.count}
                    id={item.id}
                    key={item.id}
                    />
                )) }
            </section>
            <section className="form-section">
                <div className="info-block">
                    <p>Information</p>
                    <hr />
                </div>
                <form className="form">
                    <div className="form_info">
                        <div className="form_div">
                            <p>Name</p>
                            <input type="text" placeholder='Write your name*' className={form.name ? "form_div_valid-input" : "form_div_invalid-input"} onChange={(e) => handleUpdateForm('name', e.target.value)} />
                        </div>
                        <div className="form_div">
                            <p>Phone number</p>
                            <input type="text" placeholder='Write your phone number*' className={form.phoneNumber ? "form_div_valid-input" : "form_div_invalid-input"} onChange={(e) => handleUpdateForm('phoneNumber', e.target.value)} />
                        </div>
                        <div className="form_div">
                            <p>Address</p>
                            <input type="text" placeholder='Write your address' className={form.delivery.typeDel === 'delivery' ? ( form.delivery.adress ? "form_div_valid-input" : "form_div_invalid-input" ) : "form_div_valid-input"} onChange={(e) => handleUpdateDeliveryForm('adress', e.target.value)} />
                        </div>
                        <div className="form_div">
                            <p>Card number</p>
                            <input type="text" placeholder='Write your card number*' className={form.cardNumber ? "form_div_valid-input" : "form_div_invalid-input"} onChange={(e) => handleUpdateForm('cardNumber', e.target.value)} />
                        </div>
                        <div className="form_div">
                            <p>Wishes</p>
                            <textarea placeholder='Write your wishes' cols="20" rows="5" className="form_div_valid-input" onChange={(e) => handleUpdateForm('wishes', e.target.value)}></textarea>
                        </div>
                            <p className='total-price'>Total price: <strong>{totalPrice}</strong></p>
                    </div>
                    <div className="form_delivery">
                        <div className="form_delivery_buttons">
                            <p>Delivery</p>
                            <button type="button" onClick={() => handleUpdateDeliveryType('pickup')}>Pickup <img src={pickupImg} alt='pickup' /></button>
                            <button type="button" onClick={() => handleUpdateDeliveryType('delivery')}>Delivery to the house <img src={deliveryImg} alt='delivery'/></button>
                        </div>
                        <div className="submit">
                            <button type="button" onClick={() => handleCreateOrder()} className="submit_button">Order</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default PlaceAnOrder;