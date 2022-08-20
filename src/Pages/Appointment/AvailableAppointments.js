import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ date }) => {
  return (
    <div className="font-bold text-sky-500 text-lg text-center">
      You Have Your Appointment on: {format(date, "PP")}
    </div>
  );
};

export default AvailableAppointments;
