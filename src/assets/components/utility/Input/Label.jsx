import React from 'react';

const Label = (props) => {
  const { htmlFor, children, variant } = props;
  return (
    <label 
      htmlFor={htmlFor}
      className={`block text-slate-500 mb-2 text-md font-bold ${variant}`}
    >
      {children}
    </label>
  );
}

export default Label;
