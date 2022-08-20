import React from 'react'
import { useHistory } from "react-router-dom"
// import Alert from 'react-bootstrap/Alert';


function DeleteButtonMyProfile({user}) {
  let history = useHistory()

  function handleDelete() {
    fetch(`/user_accounts/${user.id}`, {
      method: 'DELETE',
    })
    history.push('/')
  }



  return (
    <div> 
        <button 
            className='ghost-profile'
            
            onClick={handleDelete}
        >
            Delete Profile
        </button>
{/* 
      <Alert key="danger" variant="danger">
        This is an alert—check it out!
      </Alert> */}
    </div>
  )
}

export default DeleteButtonMyProfile