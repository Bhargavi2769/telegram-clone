import React, { Component } from 'react';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChatItem from './ChatItem';
import SearchBar from './SearchBar';
import SearchIcon from '@mui/icons-material/Search';

import SubMenu from './SubMenu';

class ChatList extends Component {
  state = {
    chats: [],
    showDrawer: false,
    showSearchBar: false,
  };

  componentDidMount() {
    fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1')
      .then(response => response.json())
      .then(data => this.setState({ chats: data.data.data }))
      .catch(error => console.error('Error fetching chats:', error));
  }

  toggleDrawer = (open) => () => {
    this.setState({ showDrawer: open });
  };
  toggleSearchBar = () => {
    this.setState((prevState) => ({ showSearchBar: !prevState.showSearchBar }));
  };
  render() {
    const { chats, showDrawer,showSearchBar } = this.state;
    const { selectChat } = this.props;

    return (
      <div className="chat-list">
        <div className="header">
          <IconButton className="menu-button" onClick={this.toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <h5 className='heading'>Telegram</h5>
          <IconButton onClick={this.toggleSearchBar}>
            <SearchIcon />
          </IconButton>
        </div>
        {showSearchBar && <SearchBar />}
        {chats.map(chat => (
          <ChatItem key={chat.id} chat={chat} selectChat={selectChat} />
        ))}
        <Drawer anchor="left" open={showDrawer} onClose={this.toggleDrawer(false)}>
          <SubMenu />
        </Drawer>
      </div>
    );
  }
}

export default ChatList;

