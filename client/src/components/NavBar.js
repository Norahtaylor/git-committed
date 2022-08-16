import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useHistory } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = ({onLogout}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let history = useHistory()

    function handleLogout() {
        fetch('./logout', {
            method: 'DELETE',
        }).then(() => onLogout())
        history.push('./login')
    }

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

                    <a 
                        className='menu-button'
                        href="/myprofile"
                        onClick={() => history.push('/myprofile')}
                    > 
                    My Profile 
                    </a>
                    <a 
                        className='menu-button'
                        href="/createprofile" 
                        onClick={() => history.push('/createprofile')}
                    >
                    Create Profile
                    </a>

                    <a 
                        onClick={() => history.push('/mymatches')} 
                        href='/mymatches'
                        className='menu-button'
                    > 
                    My Matches
                    </a>
                
                    <a 
                        onClick={() => history.push('/swipe')}
                        href="/swipe"
                        className='menu-button'
                    >
                    Find love
                    </a>
             
                    <a 
                        onClick={() => history.push('/login')} 
                        href="/login"
                        className='menu-button'
                    >Login
                    </a> 
                
             <div>
                <Button 
                    onClick={handleLogout}
                >
                    Logout 
                </Button>
            </div> 
         </Menu>
        </div>
    
    );
}


export default NavBar;