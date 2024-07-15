import React, { Component } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SubMenu from './SubMenu'; // Import the SubMenu component

class MenuButton extends Component {
  state = {
    showSubMenu: false,
  };

  toggleSubMenu = () => {
    this.setState(prevState => ({
      showSubMenu: !prevState.showSubMenu,
    }));
  };

  render() {
    return (
      <div className="menu-button-container">
        <button className="menu-button" onClick={this.toggleSubMenu}>
          <MenuIcon />
        </button>
        {this.state.showSubMenu && <SubMenu />}
      </div>
    );
  }
}

export default MenuButton;
