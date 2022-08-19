import React, { useEffect, useState } from "react";
import Banner from "../Home/Banner";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      {doctors.map((doctor) => (
        <Banner doctor={doctor}></Banner>
      ))}
    </div>
  );
};

export default Doctors;
