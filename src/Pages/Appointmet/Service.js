import React from "react";
import PrimaryButton from '../Shared/PrimaryButton'
const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="text-secondary text-2xl text-center">{name}</h2>
        <p>{
            slots.length ? 
             <span>{slots[0]}</span>
            :
            <span className="text-red-500">Try another date</span>
            }</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div class="card-actions justify-center">
            {
                slots.length===0?
                <button disabled className="btn">Book appointment</button>
                :<PrimaryButton>Book appointment</PrimaryButton>
            }
           
        </div>
      </div>
    </div>
  );
};

export default Service;
