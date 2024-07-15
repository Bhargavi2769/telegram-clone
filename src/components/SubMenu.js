
import React, { Component } from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

class SubMenu extends Component {
  state = {
    darkMode: false,
    userName: 'Beyond Chat',
  };

  toggleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    const { darkMode,userName } = this.state;
    const backgroundColor = darkMode ? '#696666' : '#31cfdb';
    const backgroundColorLowerPart = darkMode ? "#333" : "#ffffff"
    const textColor = darkMode ? '#ffffff' : '#090909';
    const avatarLetter = userName.charAt(0).toUpperCase();


    return (
      <div className="sub-menu" >
        <div className="sub-menu-section" style={{ width: 250, padding: 16, backgroundColor }}>
          <div className="user-details" style={{color: textColor}}>
            <p className='avatar'>{avatarLetter}</p>
            <h3>{userName}</h3>
            <p>+1234567890</p>
          </div>
          <div className="dark-light-mode">
            <button onClick={this.toggleDarkMode} color="inherit">
              {darkMode ? <LightModeOutlinedIcon /> : <DarkModeIcon />}
            </button>
          </div>
        </div>
        <div className="lower-sub-menu-section" style={{width : 250, padding: 16, backgroundColor: backgroundColorLowerPart}}>
          <button className='button-details' style={{color: textColor}}>
            <AccountCircleOutlinedIcon />  
            <p className='button-text'>My Profile</p>
          </button>
          <hr />
          <button className='button-details' style={{color: textColor}}>
            <GroupAddOutlinedIcon />
            <p className='button-text'>New Group</p>
          </button>
          <button className='button-details' style={{color: textColor}}>
            <ContactsOutlinedIcon />  
            <p className='button-text'>Contacts</p>
          </button>
          <button className='button-details' style={{color: textColor}}> 
            <CallOutlinedIcon />  
            <p className='button-text'>Calls</p>
          </button>
          <button className='button-details' style={{color: textColor}}>
            <AccessibilityNewOutlinedIcon />  
            <p className='button-text'>People Nearby</p>
          </button>
          <button className='button-details' style={{color: textColor}}>
            <GradeOutlinedIcon />  
            <p className='button-text'>Saved Messages</p>
          </button>
          <button className='button-details' style={{color: textColor}}>
            <SettingsSuggestOutlinedIcon />  
            <p className='button-text'>Settings</p>
          </button>
          <hr />
          <button className='button-details' style={{color: textColor}}>
            <InsertInvitationOutlinedIcon />  
            <p className='button-text'>Invite Friends</p>
          </button>
          <button className='button-details' style={{color: textColor}}>
            <HelpOutlineOutlinedIcon />  
            <p className='button-text'>Telegram Features</p>
          </button>

        </div>
      </div>
    );
  }
}

export default SubMenu;



