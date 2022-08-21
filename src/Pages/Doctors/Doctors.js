import React, { useEffect, useState } from "react";
import Banner from "../Home/Banner";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <Link to="/appointment">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {doctors.map((doctor) => (
            <Banner doctor={doctor}></Banner>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Doctors;
