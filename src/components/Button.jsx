import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-[#616878] font-poppins font-medium text-[18px] text-[#FAFBFF] hover:text-[#000000] hover:bg-[#FAFBFF] outline-none ${styles} rounded-[10px] hover:transition duration-1000 ease-in-out`}
    >
      Get Started
    </button>
  );
};

export default Button;
