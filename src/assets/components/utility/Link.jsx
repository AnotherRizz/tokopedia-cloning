import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = (props) => {
  const { children, to, variant } = props;

  return (
    <div>
      <RouterLink to={to} className={` text-slate-500 hover:text-green-500 ${variant}`}>
        {children}
      </RouterLink>
    </div>
  );
};

export default Link;
