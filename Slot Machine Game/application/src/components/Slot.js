import React from "react";

const Slot = ({ x, y, z }) => {
  return (
    <>
      <img src={x} alt="Fruit Icon" className="fruit-image" />
      <img src={y} alt="Fruit Icon" className="fruit-image" />
      <img src={z} alt="Fruit Icon" className="fruit-image" />
    </>
  );
};

export default Slot;
