import React from "react";
import treatment from "../../assets/images/treatment.png";

const About2 = () => {
  return (
    <div class="hero  ">
      <div class="hero-content flex-col lg:flex-row lg:px-32 lg:pb-64">
        <img className="w-4/6 lg:w-1/3"  src={treatment} alt="" />
        <div className="ml-6">
          <h1 class="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is a long establish fact that a reader will be distracted by the
            readable content of a page when looking at its layout. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Corrupti quidem non
            placeat similique ad natus!
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About2;
