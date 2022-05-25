import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AutoParts from '../AutoParts/AutoParts';
import Banner from '../Banner/Banner';
import PartsCard from '../PartsCard/PartsCard';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
       <div>
            <div className='max-w-7xl mx-auto '>
            <Banner></Banner>
            <PartsCard></PartsCard>
            <Summary></Summary>
            <AutoParts></AutoParts>
        </div>
        
       </div>
    );
};

export default Home;