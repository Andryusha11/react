import React from 'react';

const Expand = ({ children, icon }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">Some title</span>
        <button className="expand__toggle-btn">{icon}</button>
      </div>
      {children}
    </div>
  );
};

export default Expand;
