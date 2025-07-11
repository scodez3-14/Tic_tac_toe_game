import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      <h5>{value}</h5>
    </div>
  );
};

export default Square;
