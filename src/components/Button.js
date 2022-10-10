import { useState } from "react";

// Button is missing it's styling, but it can be easily be edited as we need. Can be made primary or secondary button.

const Button = ({ children, ...props }) => {
  return (
    <div>
      <button {...props} className="button">
        {children}
      </button>
    </div>
  );
};

export default Button;
