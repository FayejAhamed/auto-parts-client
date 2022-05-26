import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='text-center mt-24'>
            <h2 className='text-6xl '>This is My Bio Data</h2>
            <div class="card max-w-6xl bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">My name  is Fayej Ahamed</h2>
                    <p>Email: foyezfoyez017@gmail.com</p>
                    <p>My educational background is: undergraduate drop out from science</p>
                    <p>I am frontend Web developer. I am very highly Skilled in React Js, Also I can biuld  a dynamic Website. Also i am skilled in Single Page Application</p>
                    <p>My project link:</p>
                    <a className='text-blue-700' href="https://ahamed-law-office.web.app/home">1:Law Office</a>
                    <a className='text-blue-700' href="https://stalwart-eclair-575422.netlify.app/">2:New dell release</a>
                    <a className='text-blue-700' href="https://electronics-warehouse-ef7bc.web.app/">3:Warehouse</a>
                    
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;