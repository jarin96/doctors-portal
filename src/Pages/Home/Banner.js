import React from "react";
import doctor1 from "../../images/portrait-smiling-handsome-male-doctor-man.jpg";
import doctor2 from "../../images/portrait-beautiful-brunette-nurse-isolated-black.jpg";
import doctor3 from "../../images/portrait-smiling-male-doctor.jpg";

const Banner = ({ doctor }) => {
  console.log(doctor);
  return (
    <div class="hero min-h-screen bg-zinc-50">
      <div class="hero-content flex-col lg:flex-row ">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={doctor3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{doctor?.name}</h2>

            <h2>{doctor?.org}</h2>
            <h2> Available Time Duration</h2>
            <h2> {doctor?.availibility?.sun}</h2>
            <h2>{doctor?.availibility?.wed}</h2>
            <h2>{doctor?.availibility?.mon}</h2>
            <h2>{doctor?.availibility?.thu}</h2>
            <h2>Visit Duration In Min: {doctor?.visitDurationInMin}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
