import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location={'Kiev'} time={2} />
      <Clock location={'London'} time={0} />
      <Clock location={'New York'} time={-5} />
    </>
  );
};

export default App;
