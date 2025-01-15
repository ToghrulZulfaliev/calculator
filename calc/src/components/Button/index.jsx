import React from "react";
import "./button.css";
const Button = ({ className, value, onClick }) => {
  return (
    <button
      className={className}
      onClick={() => {
        {
          value;
        }
      }}
    >
      {value}
    </button>
  );
};

export default Button;
