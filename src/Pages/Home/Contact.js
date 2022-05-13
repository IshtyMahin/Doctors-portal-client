import React from "react";

import appointment from "../../assets/images/appointment.png";
const Contact = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="flex flex-col  items-center py-5"
    >
      <div className="text-center">
        <h4 className="text-xl text-primary">Contact us</h4>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
      </div>
      <div className="lg:w-1/2 mx-auto pt-4">
        <form className="contact__form ">
          <input
            className="form-control w-full rounded text-lg py-2 px-3"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
          />
          <br />

          <input
            className="form-control w-full rounded text-lg py-2 px-3 "
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />
          <br />
          <textarea
            className="textarea textarea-bordered from-control w-full"
            id="message"
            name="message"
            placeholder="Message"
            row='5'
          ></textarea>
          <br />
          <div className="w-full flex justify-center p-3">
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary  w-1/3">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
