import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from "../../assets/images/fluoride.png"

import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"

const Services = () => {
    const services = [
        {
            _id:1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id:2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id:3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ]
    return (
        <div className='my-28 mx-8'>
            <div className='text-center'>
            <h3 className='text-primary font-bold text-xl'>Our Service</h3>
            <h2 className='font-bold text-3xl uppercase'>Services We provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  my-6'>
             {
                 services.map(service => <ServiceCard
                     key={service._id}
                     service={service}
                 ></ServiceCard>)
             }
        </div>
        </div>
    );
};

export default Services;