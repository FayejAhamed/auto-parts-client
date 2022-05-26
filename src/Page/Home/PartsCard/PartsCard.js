import React, { useEffect, useState } from 'react';
import SingleParts from '../SingleParts/SingleParts';

const PartsCard = () => {
    const[parts, setParts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/purchase')
        .then(res=>res.json())
        .then(data=>setParts(data))
    }, [])
    return (
        <div className='py-20 mx-auto '>
              <div className="divider my-20"></div> 

            <h2 className='text-5xl font-semibold text-center my-4 py-4'>We Manufacture All Kind of Vehicle parts</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:mx-auto gap-8 mx-auto'>
                {
                    parts.map(part=><SingleParts
                        key={part._id}
                        part={part}></SingleParts>)
                }
            </div>
            <div className="divider mt-28"></div> 

            
        </div>
    );
};

export default PartsCard;