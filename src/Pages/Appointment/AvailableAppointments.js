import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="font-bold text-sky-500 text-lg text-center bg-zinc-50">
      You Have Your Appointment on: {format(date, "PP")}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <Service service={service} setAppointment={setAppointment}></Service>
        ))}
      </div>
      {appointment && (
        <BookingModal
          date={date}
          appointment={appointment}
          setAppointment={setAppointment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
