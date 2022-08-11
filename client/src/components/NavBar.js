import {useEffect, useState} from 'react'

const NavBar = ({onLogout}) => {

    function handleLogout() {
        fetch('./logout', {
            method: 'DELETE',
        }).then(() => onLogout())
     
    }
    return(
        <div>
            <button onClick={handleLogout}>
                Logout</button>
        </div>
    )
}

export default NavBar;