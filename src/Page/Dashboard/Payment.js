import React, { useEffect, useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
// const stripePromise = loadStripe('pk_test_51L2U51Gg854iD71nu8G8rLXwXVRqCAyVipHiX4JexzKZPbuBKOLwIzSXLbI9r3p9959shNL0hKIMeLKJyoU8twTM00f3VGc58a');


const Payment = () => {
    const [user] = useAuthState(auth)
    const [products, setProducts]= useState([]);
    const { id } = useParams();
    console.log(products);
    const url = `http://localhost:5000/payment/${id}`

    useEffect(()=>{
        fetch(url,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setProducts(data);
        })
    },[])

  

  
    return (
        <div>
            <h2>This Payment{id}</h2>

        <div className="card mx-auto w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div className="card-body">
                <p className='text-success'>Hello, {user?.name} </p>
                <h2 className="card-title">Please Pay for {products?.price}</h2>
                <p>Please pay: ${products?.price}</p>
            </div>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            {/* <div className="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm products={products}/>
                </Elements> 
            </div> */}
        </div>
    </div>
    );
};

export default Payment;