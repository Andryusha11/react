import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState('online');

  useEffect(() => {
    const changeStatus = (e) => {
      setIsOnline(e.target.navigator.onLine ? 'online' : 'offline');
    };
    addEventListener('online', changeStatus);
    addEventListener('offline', changeStatus);
    return () => {
      removeEventListener('online', changeStatus);
      removeEventListener('offline', changeStatus);
    };
  });
  const style = isOnline === 'online' ? 'status' : 'status status_offline';
  return <div className={style}>{isOnline}</div>;
};

export default ConnectionStatus;
