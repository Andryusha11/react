import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((data) => {
        setUser(data);
      });
  }, [userId]);
  if (!user) {
    return null;
  }
  return (
    <div className="user">
      <img alt="User Avatar" src={user.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{user.name}</span>
        <span className="user__location">{user.location}</span>
      </div>
    </div>
  );
};

export default User;
