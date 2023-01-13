import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={10} interval={100} />
      <Counter start={20} interval={200} />
      <Counter start={30} interval={300} />
    </>
  );
};

export default App;
