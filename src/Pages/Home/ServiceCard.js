import React from "react";

const ServiceCard = ({ service }) => {
  const { img, name } = service;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl py-5">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="font-bold">{name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio
          corporis architecto incidunt adipisci consequatur est perspiciatis,
          beatae facere inventore voluptatem explicabo officia.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
