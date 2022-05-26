import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const ShowReview = () => {
   
    const { data: ratings, isLoading, refetch } = useQuery('users', () => fetch('https://protected-sierra-14862.herokuapp.com/review').then(res => res.json()))

    if (isLoading  ) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-24'>
            <div className="divider my-20"></div> 
            <h2 className='text-6xl text-center my-5 text-gray-800'>FeedBack From Our Customer</h2>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 gap-4  lg:gap-8 grid-cols-1'>
                {
                    ratings.map(rating => <div className="card w-96 border-2 shadow-md " key={rating._id}>
                        <div className="card-body items-center text-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=92310"  alt=''/>
                                </div>
                            </div>
                            <h2 className="card-title">{rating.Name}</h2>
                            <p>{rating.description}</p>
                            <div className="card-actions justify-start">
                                <p>Rating: <span className='text-yellow-700 font-bold'> {rating.rating} Star</span></p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ShowReview;