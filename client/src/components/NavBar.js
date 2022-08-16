import {useEffect, useState} from 'react'
import { useHistory, Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';



const NavBar = ({onLogout}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let navigate = useHistory()

    function handleLogout() {
        fetch('./logout', {
            method: 'DELETE',
        }).then(() => onLogout())
        navigate.push('./login')
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

                <MenuItem href="/myprofile" className='menu-button' onClick={handleClose}>
                    <Link className='menu-button' to="/myprofile" >
                        My Profile </Link>
                   </MenuItem>
                <MenuItem className='menu-button' onClick={handleClose}>
                    <Link to="/createprofile" >
                        Create Profile </Link>
                </MenuItem>
                <MenuItem className='menu-button' onClick={handleClose}>
                    <Link to="/mymatches" > My Matches </Link>
                </MenuItem>
                <MenuItem className='menu-button' onClick={handleClose}>
                    <Link to="/swipe" >Swipe </Link></MenuItem>
                <MenuItem className='menu-button' onClick={handleClose}>
                    <Link to="/login">Login </Link></MenuItem>
                <MenuItem className='menu-button' onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}


export default NavBar;