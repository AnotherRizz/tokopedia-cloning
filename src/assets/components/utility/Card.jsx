import React from "react";

const Card = (props) => {
  const { children, variant } = props;
  return <div className={` border ${variant} `}>{children}</div>;
};

export default Card;
