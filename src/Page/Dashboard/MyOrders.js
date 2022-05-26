import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate('')
    const [items, setitems] = useState([])

    useEffect(() => {
        fetch(`https://protected-sierra-14862.herokuapp.com/orders/${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }
                else if (res.status === 401) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setitems(data)
            })
    }, [])
console.log(items);
    // delete Item api call
    const deleteItem = (props) => {
        // console.log(props)
      
            fetch(`https://protected-sierra-14862.herokuapp.com/orders/${props}`, {
                method: 'Delete',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaing = items.filter(itme => itme._id !== props)
                        setitems(remaing)
                    }
                })
                
        
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {items?.map(item => <div key={item?._id} className="card w-full lg:w-80 my-[35px] mx-auto bg-base-100 shadow-xl">
                    <figure><img src={item?.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Product Name : {item?.name}
                            {
                                item?.paid === 'panding' ? <div className="badge badge-primary pb-[3px]">{item?.paid}</div> : <div className="badge badge-primary pb-[3px]">paid</div>
                            }
                        </h2>
                        <div className=" justify-start">
                            <p className='my-[6px] font-semibold'>Total Price : {parseFloat(item?.price) * parseFloat(item.quantity)}</p>
                            <p className='my-[6px] font-semibold'>Quantity : {item?.quantity}</p>
                            <p className='my-[6px] font-semibold'>Reciver Name : {item?.reciverName}</p>
                            <small className='mb-[6px] font-semibold'>User Email:{item?.email}</small>
                            <p className='my-[6px] font-semibold'><small>Address: {item.Address}</small></p>
                            <p className='my-[6px] font-semibold'>Phone Number : <small>{item?.PhoneNumber}</small></p>

                            <div className='flex justify-between'>


                                
                                <div>
                                    {
                                        item?.paid === 'panding' && <Link to={`/dashboard/payment/${item?._id}`}><button className="btn bg-green-700 px-[40px] text-white " >Pay</button></Link>
                                    }
                                </div>
                                <label htmlFor="my-modal-3" className="btn modal-button bg-red-500 border-0 px-5">Delete</label>

                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box relative">
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-lg font-bold">Are sure You want to delete the order?</h3>
                                        <button className="btn bg-red-500 px-[40px] text-white " onClick={() => deleteItem(item?._id)}>Delete</button>
                                    </div>
                                </div>

                               
                            </div>

                        </div>
                    </div>
                </div>)}

            </div>
        </div >
    );
};

export default MyOrders;