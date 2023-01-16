import React from 'react';
import Offline from './Offline';
import Online from './Online';

const Status = (props) => {
  const elem = props.isOnline ? <Online /> : <Offline />;
  return <>{elem}</>;
};

export default Status;
