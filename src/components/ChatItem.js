import React from 'react';
const ChatItem = ({ chat, selectChat }) => {

  // const avatarLetter = chat.creator.name.charAt(0).toUpperCase();

  return (
    <>
      <div className="chat-item" onClick={() => selectChat(chat.id)}>
        <div className="chat-avatar">
          <img src={chat.avatar} alt={chat.creator.name} />
        </div>
        <div className="chat-info">
          <p className='chat-name'>{chat.creator.name}</p>
        </div>
      </div>
    </>
  )
  
};

export default ChatItem;
