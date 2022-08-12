import {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";

const NavBar = ({onLogout}) => {
    let navigate = useHistory()

    function handleLogout() {
        fetch('./logout', {
            method: 'DELETE',
        }).then(() => onLogout())
        navigate.push('./login')
    }
    return(
        <div>
            <details className='details'>
                <summary className='summary'></summary>
                <nav className="menu">
                    <a href="#link">Home</a>
                    <a href="#link">Work</a>
                    <a href="#link">Links</a>
                    <a href="#link">Contact</a>
                    <a href="#link">About</a>
                </nav>
                <button onClick={handleLogout}>
                Logout</button>
            </details>
        </div>
    )
}

export default NavBar;