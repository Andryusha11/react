import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [demenions, setDimensions] = useState({ width: null, height: null });
  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({
      width: innerWidth,
      height: innerHeight,
    });
    const handleResize = (e) => {
      const { innerHeight, innerWidth } = e.target;
      setDimensions({
        width: innerWidth,
        height: innerHeight,
      });
    };
    addEventListener('resize', handleResize);
    return () => removeEventListener('resize', handleResize);
  }, []);
  const { width, height } = demenions;
  return <div className="dimensions">{`${width} - ${height}`}</div>;
};

export default Dimensions;
