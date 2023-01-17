import React from 'react';

const NumbersList = (props) => {
  return (
    <ul>
      {props.numbers.map((num) => (
        <li>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
