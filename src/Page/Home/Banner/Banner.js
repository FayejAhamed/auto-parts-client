import React from 'react';
import banner from '../../../image/banner/banner.jpg'


const Banner = () => {
    return (

       <div className='mt-28 bg-slate-200 rounded-xl pt-14'>
           <h2 className='text-6xl font-semibold text-center pb-3'>More About Out Manufacturing</h2>
            <div class="card card-side bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mb-20 gap-3 p-12" >
            <figure><img src={banner} alt="Movie" /></figure>
            <div class="card-body ">
                <h2 class="text-4xl text-center font-semibold">Our Service is first Class</h2>
                <p>We Are A Customer Focused, Proven Source With Over 50 Years Of Experience In The Industry. We are a high volume, “Build to Print” manufacturer of precision turned parts.Finding the ideal automotive accessories manufacturer is what we do best. The fastest way to bring unique new products to market. What do you want to make? QC Site Visits. Manufacturing Marketplace. Cut the Middlemen. From Design to Delivery.</p>
                <div class="mt-3 text-center">
                    <button class="btn btn-primary">Learn More</button>
                </div>
                
            </div>

        </div>
       </div>

    );
};

export default Banner;