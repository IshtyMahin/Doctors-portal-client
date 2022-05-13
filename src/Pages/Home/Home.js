import React from 'react';
import About2 from './About2';

import MakeAppointment from './MakeAppointment';

import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Home = () => {
    return (
        <div className=' lg:px-12'>
            <Banner></Banner>
            <Info ></Info>
            <Services></Services>
            <About2></About2>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;