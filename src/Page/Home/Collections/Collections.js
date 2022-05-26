import React from 'react';
import wheel from '../../../image/banner/wheel.jpg'

const Collections = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage: `url(${wheel})`}}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Welcome To Auto Parts Manufacture</h1>
                    <p class="mb-5">We manufacture all kind of parts. You can order or contact with us any time</p>
                    <button class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Collections;