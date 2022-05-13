import React from "react";
import { format } from "date-fns";
const AvailableAppointments = ({ date }) => {
  return (
    <div>
      <p className="text-center text-secondary text-2xl">Available Appointment on  {format(date, "PPP")}</p>
    </div>
  );
};

export default AvailableAppointments;
