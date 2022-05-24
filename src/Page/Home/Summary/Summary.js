import React from 'react';

const Summary = () => {
    return (
        <div className='mt-24 bg-gray-300 py-10 px-4 rounded-lg'>
            <h2 className='text-primary text-center text-5xl font-bold'>We Served in the Whole World</h2>
            <h3 className='text-center text-2xl mt-2 font-mono text-gray-800'>Our All customer are satisfied</h3>
            <div class="divider"></div>
            <div class="stats stats-vertical lg:stats-horizontal bg-primary mx-auto text-center mt-14 text-primary-content flex justify-center md:stats-horizontal shadow">

                <div class="stat">
                    <div class="stat-figure text-secondary mr-24">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" alt='' />
                            </div>
                        </div>
                    </div>

                    <div class="stat-title">we served</div>
                    <div class="stat-value">31K+</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary mr-24">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="stat-title">Our Annual Revenue</div>
                    <div class="stat-value">200M+</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary mr-24">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value">300+</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Summary;