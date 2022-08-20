import React from "react";
import doctor1 from "../../images/asian-young-main-group-hospital-professional.jpg";
import { Link } from "react-router-dom";

const Banner = ({ doctor }) => {
  console.log(doctor);
  return (
    <div class="hero min-h-screen bg-zinc-50">
      <div class="hero-content flex-col lg:flex-row ">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={doctor1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title justify-center">Name: {doctor?.name}</h2>

            <h2 class="font-bold text-lg justify-center">
              Organization: {doctor?.org}
            </h2>
            <h2 class="font-bold text-base"> Available Time Duration</h2>
            <h2 class="font-bold text-base"> {doctor?.availibility?.sun}</h2>
            <h2 class="font-bold text-base">{doctor?.availibility?.wed}</h2>
            <h2 class="font-bold text-base">{doctor?.availibility?.mon}</h2>
            <h2 class="font-bold text-base">{doctor?.availibility?.thu}</h2>
            <h2 class="font-bold text-base">
              Visit Duration In Min: {doctor?.visitDurationInMin}
            </h2>

            <div class="card-actions justify-center">
              <Link to="/appointment">
                <button class="btn btn-info uppercase text-white text-center rounded-lg">
                  Make Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
