import React from 'react';
import About2 from './About2';

import MakeAppointment from './MakeAppointment';

import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-3 lg:px-12'>
            <Banner></Banner>
            <Info ></Info>
            <Services></Services>
            <About2></About2>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;