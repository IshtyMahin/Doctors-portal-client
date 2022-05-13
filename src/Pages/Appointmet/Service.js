import React from "react";

const Service = ({ service,setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-secondary text-2xl text-center">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          
          <label htmlFor="booking-modal" 
          disabled={slots.length===0}
          onClick={()=>setTreatment(service)}
          className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">book appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
