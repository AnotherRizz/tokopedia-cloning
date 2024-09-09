import React from "react";

const Banner = (props) => {
  const { children, variant } = props;
  return (
    <div className={`w-[25%]  rounded-xl  ${variant} `}>
      {children}
    </div>
  );
};

export default Banner;
