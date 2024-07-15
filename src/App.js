import React, { Component } from 'react';
import ChatList from './components/ChatList.js';
import ChatMessages from './components/ChatMessages';
import './App.css';

class App extends Component {
  state = {
    selectedChatId: null,
  };

  selectChat = (id) => {
    this.setState({ selectedChatId: id });
  };

  render() {
    return (
      <div className="app">
        <ChatList selectChat={this.selectChat} />
        <ChatMessages chatId={this.state.selectedChatId} />
      </div>
    );
  }
}

export default App;
