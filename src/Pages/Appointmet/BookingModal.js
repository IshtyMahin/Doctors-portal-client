
import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date,setTreatment }) => {

    const {_id,name,slots} = treatment;

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id,name,slot);
        setTreatment(null)
    }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className=" text-xl text-secondary mb-6">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 justify-items-center">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {
                slots.map(slot =><option value={slot}>{slot}</option>)
              }
              
            </select>
            <input
              type="text" name="name"
              placeholder="Your Name"
              className="input input-bordered w-full "
            />
            <input
              type="email" name='email'
              placeholder="Email Address"
              className="input input-bordered w-full "
            />
            <input
              type="text" name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Type here"
              className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
