import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from "../Shared/PrimaryButton";
const MakeAppointment = () => {
  return (
   <section style={{
     background: `url(${appointment})`
    }} className="flex justify-center items-center ">
     <div className="flex-1 hidden lg:block">
       <img className="mt-[-200px]" src={doctor} alt=""/>
     </div>
     <div className="flex-1 p-8">
       <h3 className="text-xl text-primary font-bold">Appointment</h3>
       <h2 className="text-3xl text-white">Make an Appointment Today</h2>
       <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit minus delectus quas ratione temporibus maiores earum dolorem sint, iusto vero tempora unde, quis placeat repudiandae tenetur itaque sunt deserunt alias eius est! Nemo optio voluptatem voluptas praesentium harum architecto ipsa.</p>
       <PrimaryButton>Get started</PrimaryButton>
     </div>
   </section>
  );
};

export default MakeAppointment;
