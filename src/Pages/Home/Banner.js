import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen  bg-[url('/src/assets/images/bg.png')]">
  <div class="hero-content flex-col lg:flex-row-reverse  ">
    <img src={chair} alt='' class="lg:w-1/3  rounded-lg shadow-2xl " />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;