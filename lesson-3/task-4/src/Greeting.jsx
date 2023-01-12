import React from 'react';

const Greeting = (props) => {
  const ageDate = Date.now() - props.user.birthDate;
  const ageInMilis = new Date(ageDate);
  const age = Math.abs(ageInMilis.getUTCFullYear() - 1970);
  return (
    <div className="greeting">{`My name is ${props.user.firstName} ${props.user.lastName}. I am ${age} years old`}</div>
  );
};

export default Greeting;
