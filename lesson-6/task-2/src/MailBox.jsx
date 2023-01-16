import React from 'react';

const MailBox = ({ unreadedMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {unreadedMessages.length > 0 && (
        <span className="mailbox__count">{unreadedMessages.length}</span>
      )}
    </div>
  );
};

export default MailBox;
