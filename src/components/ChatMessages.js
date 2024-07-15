import React, { Component } from 'react';
import MessageItem from './MessageItem';

class ChatMessages extends Component {
  state = {
    messages: [],
    senderName: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.chatId !== prevProps.chatId && this.props.chatId) {
      fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${this.props.chatId}`)
        .then(response => response.json())
        .then(data => {
          if (data.data.length > 0) {
            // Find the first message with sender.id not equal to 1
            const senderMessage = data.data.find(message => message.sender.id !== 1);
            if (senderMessage) {
              const senderName = senderMessage.sender.name;
              this.setState({ messages: data.data, senderName });
            } else {
              this.setState({ messages: data.data, senderName: '' });
            }
          } else {
            this.setState({ messages: [], senderName: '' });
          }
        })
        .catch(error => console.error('Error fetching messages:', error));
    }
  }

  render() {
    const { messages, senderName } = this.state;

    return (
      <div className="chat-messages">
        {senderName && <div className="sender-header">{senderName}</div>}
        {messages.map(message => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
    );
  }
}
export default ChatMessages;

  /*

  componentDidUpdate(prevProps) {
    if (this.props.chatId !== prevProps.chatId && this.props.chatId) {
      fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${this.props.chatId}`)
        .then(response => response.json())
        .then(data => this.setState({ messages: data.data}))
        .catch(error => console.error('Error fetching messages:', error));
    }
  }

  render() {
    const { messages} = this.state;
    console.log("messages: ", messages)

    return (
      <div className="chat-messages">
        
        {messages.map(message => (
          <MessageItem key={message.id} message={message} />
        ))} 
      </div>
      
      
    );
  }
}
*/


