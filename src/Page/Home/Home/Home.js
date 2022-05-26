import React from 'react';
import AutoParts from '../AutoParts/AutoParts';
import Banner from '../Banner/Banner';
import Collections from '../Collections/Collections';
import PartsCard from '../PartsCard/PartsCard';
import ShowReview from '../ShowReview/ShowReview';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
       <div>
            <div className='max-w-7xl mx-auto '>
            <Collections></Collections>

            <PartsCard></PartsCard>
            <Summary></Summary>
            <AutoParts></AutoParts>
            <ShowReview></ShowReview>
            <Banner></Banner>

        </div>
        
       </div>
    );
};

export default Home;