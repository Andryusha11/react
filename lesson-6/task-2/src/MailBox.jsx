import React from 'react';

const Mailbox = ({ unreadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>

      {unreadedMessages.length > 0 && (
        <span className="mailbox__count">{unreadMessages.length}</span>
      )}
    </div>
  );
};

export default Mailbox;
