import React, { useState } from "react";
import clinic from "../../images/benyamin-bohlouli-e7MJLM5VGjY-unsplash.jpg";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="bg-zinc-50">
      <h1 className="text-center  font-serif text-2xl">Make An Appointment</h1>
      <div class="hero min-h-screen bg-zinc-50">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={clinic}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="Doctors clinic"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
