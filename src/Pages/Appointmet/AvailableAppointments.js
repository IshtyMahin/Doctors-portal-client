import React, {  useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";
import Loading from "../Shared/Loading";

import { useQuery } from "react-query";
const AvailableAppointments = ({ date }) => {
  
  const [treatment,setTreatment]=useState(null);

  const formattedDate = format(date,"PP");

  const  {data: services, isLoading,refetch} = useQuery(['available',formattedDate], () =>fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res=> res.json())
    
    )

    if(isLoading){
      return <Loading></Loading>
    }
  
  return (
    <div className="m-5 lg:m-12">
      <p className="text-center text-secondary text-2xl mb-2 ">Available Appointment on  {format(date, "PPP")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
         {
           services?.map(service=><Service
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
      setTreatment={setTreatment}
      refetch={refetch}
      ></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
