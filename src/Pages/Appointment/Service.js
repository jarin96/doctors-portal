import React from "react";

const Service = ({ service, setAppointment }) => {
  const { name, availibility } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl text-center">Name: {name}</h2>
        <p>
          {availibility?.sun.length > 0 ? (
            <span>Sunday: {availibility?.sun}</span>
          ) : (
            <span className="text-red-500">No Slots</span>
          )}
        </p>

        <p>Wednesday: {availibility?.wed} </p>
        <p>
          <span>Thursday: {availibility?.thu}</span>
        </p>
        <p>Monday: {availibility?.mon} </p>
        <div class="card-actions justify-center">
          <label
            for="my-modal-6"
            onClick={() => setAppointment(service)}
            class="btn modal-button btn-primary text-secondary-content"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
