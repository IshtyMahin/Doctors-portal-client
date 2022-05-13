import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";
const AvailableAppointments = ({ date }) => {
  const [services,setServices] = useState([]);
  const [treatment,setTreatment]=useState(null)
  useEffect(()=>{
    fetch('services.json')
    .then(res=> res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div className="m-5 lg:m-12">
      <p className="text-center text-secondary text-2xl mb-2 ">Available Appointment on  {format(date, "PPP")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
         {
           services.map(service=><Service
                key={service._id}
                service={service}
                setTreatment={setTreatment}
           ></Service>)
         }         
      </div>
      {treatment && <BookingModal
      key={treatment._id} 
      date={date}
      treatment={treatment}
      setTreatment={setTreatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
