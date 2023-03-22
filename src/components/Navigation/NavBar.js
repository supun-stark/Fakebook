import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navBar.css"

export default function NavBar() {
  return (
    
        <div className="navBarBox">
            <div className="NavBarLeft">
            
                <span className='logo'style={{fontFamily: 'Klavika'}}>Fakebook</span>
             
            </div>


            <div className="NavBarCenter">
                <div className="searchBarBox">
                    <SearchIcon className='searchIcon'/>
                    <input placeholder='Search' className="searchInput" />
                </div>
            </div>


            <div className="NavBarRight">
                 <div className="navBarLinks">
                    <span className='navBarLink'>Home</span>
                    <span className='navBarLink'>Profile</span>
                </div>
            


            <div className="navBarIcons">
                <div className="navBarIcon">
                    <GroupIcon className='requests'/>
                    <span className='iconTag'>8</span>
                </div>


                <div className="navBarIcon">
                    <MessageIcon className='messages'/>
                    <span className='iconTag'>6</span>
                </div>


                <div className="navBarIcon">
                    <PublicIcon className='notifications'/>
                    <span className='iconTag'>9</span>
                </div>


                <div className="navBarIcon">
                    <SettingsIcon className='settings'/>
                </div>


            </div>

            <div className="pic">
                <img src="/images/1.jpg" alt="" className="profilePicImage" />
                <span className='name'>Ann</span>
            </div>

            </div>

               
        </div>
  )
}
