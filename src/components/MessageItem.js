import React from 'react';

const MessageItem = ({ message }) => {
  
  const messageTime = new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return(
    <>
      <div className={`message-item ${message.sender_id === 1 ? 'left' : 'right'}`}>
        <div className="message-content">
          <h5>{message.sender.name}</h5>
          <p>{message.message}</p>
          <p className="message-time">{messageTime}</p>
        </div>
      </div>
    </>
  );
};

export default MessageItem;
