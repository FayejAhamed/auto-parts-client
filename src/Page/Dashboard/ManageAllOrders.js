import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const ManageAllOrders = () => {
    const [items, setItems] = useState([])
    const { data: products, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/purchase',).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    const deleteItem = (props) => {
        // console.log(props)

        fetch(`http://localhost:5000/purchase/${props}`, {
            method: 'Delete',
        })
            .then(response => response.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaing = items.filter(itme => itme._id !== props)
                    setItems(remaing)
                }
            })

    }

    return (
        <div className='mt-14'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr>



                                <th>{index + 1}</th>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>
                                    <label for="my-modal-3" class="btn modal-button btn-xs bg-red-500 border-0 px-5">Delete</label>

                                    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                                    <div class="modal">
                                        <div class="modal-box relative">
                                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <h3 class="text-lg font-bold">Are sure You want to delete the order?</h3>
                                          <button onClick={() => deleteItem(product._id)} className="btn border-0 my-6 text-white bg-red-500 btn-xs"><span onClick={() => window.location.reload()}>Remove user</span> </button>
                                        </div>
                                    </div>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;