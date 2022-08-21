import React from "react";
import { format } from "date-fns";

const BookingModal = ({ date, appointment, setAppointment }) => {
  const { name, availibility } = appointment;

  const handleBooking = (event) => {
    event.preventDefault();
    setAppointment(null);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">Booking for: {name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />
            <select class="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Available Time slot
              </option>
              <option>10:00 AM - 10:15 AM</option>
              <option>10:15 AM - 10:30 AM</option>
              <option>10:30 AM - 10:45 AM</option>
              <option>10:45 AM - 10:55 AM</option>
              <option>10:55 AM - 11:10 AM</option>
              <option>12:10 PM - 12:25 PM</option>
              <option>12:25 PM - 12:55 PM</option>
              <option>13:00 PM - 13:15 PM</option>
              <option>13:15 PM - 13:30 PM</option>
              <option>13:30 PM - 13:45 PM</option>
              <option>15:30 PM - 15:45 PM</option>
              <option>5:45 PM - 6:00 PM</option>
              <option>8:45 PM - 9:00 PM</option>
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
