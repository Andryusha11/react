import React from 'react';

const Expand = ({ children, icon, title }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn">{icon}</button>
      </div>
      {children}
    </div>
  );
};

export default Expand;
