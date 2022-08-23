import {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = ({ onLogout }) => {
    const history = useHistory()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function goBackHome(){
        history.push('/login')
    }

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        })
        .then((r) => {
            if(r.ok) {
            (onLogout())
            }
        })
        // .then(goBackHome)
         .then(() => history.push('/login'))
     }

    // function handleLogout() {
    //     fetch('/logout', {
    //         method: 'DELETE',
    //     }).then(onLogout())
    //     // .then(goBackHome)
    //     // .then(history.push('/login'))
    // }


    return (

        <div className='nav-bar'>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon className='menu-button'></MenuIcon>
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem>
                    <a 
                    
                        onClick={() => history.push('/myprofile')}
                        className='menu-button'
                        href="/myprofile"
                        
                    > 
                    My Profile 
                    </a>
                </MenuItem>
                <MenuItem >
                     <a 
                        onClick={() => history.push('/createprofile')}
                        className='menu-button'
                        href="/createprofile" 
                   
                    > 
                    Create Profile
                     </a> 
                </MenuItem>
                <MenuItem>
                    <a 
                        onClick={() => history.push('/swipe')}
                        href="/swipe"
                        className='menu-button'
                    >
                    Find love
                    </a>
                </MenuItem>
                <MenuItem>
                    <a 
                        onClick={() => history.push('/mymatches')} 
                        href='/mymatches'
                        className='menu-button'
                    > 
                    My Matches
                    </a>
                </MenuItem>
                <MenuItem>
                    <a
                        onClick={() => history.push('/pendingapproval')}
                        href="/pendingapproval"
                        className='menu-button'
                    >
                        Pending Your Approval
                    </a>
                </MenuItem>
                <MenuItem>
                    <a
                        onClick={() => history.push('/pendingrequests')}
                        href="/pendingrequests"
                        className='menu-button'
                    >
                        Your Match Requests
                    </a>
                </MenuItem>
                {/* <MenuItem>
                    <a 
                        onClick={() => history.push('/login')} 
                        href="/login"
                        className='menu-button'
                    >
                        Login
                    </a> 
                </MenuItem> */}
             <div>
                <Button 
                    onClick={() =>handleLogout()}
                >
                    Logout 
                </Button>
            </div> 
         </Menu>
        </div>
    
    );
}


export default NavBar;