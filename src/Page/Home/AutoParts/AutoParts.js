import React from 'react';
import parts1 from '../../../image/parts/parts1.png'

const AutoParts = () => {
    return (
        <div className='bg-indigo-900  flex sm:flex-col md:flex-rows lg:flex-row p-10 items-center mt-28'>
            <div className='text-center py-4 sm:pb-10 text-white' >
                <h1 className='text-5xl font-semibold'>Keep Your Vehicle in Great Condition with Top Auto Parts</h1>
                <p className='text-2xl py-4 font-medium'>Engineered for your best workout yet</p>
                <button class="btn btn-active btn-warning">Explore more</button>
                
            </div>
            <div><img src={parts1} alt="" /></div>
            
        </div>
    );
};

export default AutoParts;