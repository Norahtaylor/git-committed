import {useState} from 'react'
import DeleteButtonMyProfile from './DeleteButtonMyProfile'
import {useHistory} from 'react-router-dom'
import EditProfile from './EditProfile'

function MyProfile({user, editDetails, setEditDetails, setUser}) {
  
  let history = useHistory()

  //Fetch request for Edit form auto fill 
  function editPost() {
    // setEditId(post_id)
    fetch(`/user_accounts/${user.id}`)
      .then(res => res.json())
      .then(user => setEditDetails({
        first_name: user.first_name,
        age: user.age,
        location: user.hometown,
        location: user.location,
        gender: user.gender,
        interested_in: user.interested_in,
        bio: user.bio,
        education: user.education,
        profile_photo: user.profile_photo,
        language: user.language
      }))
    history.push(`/editprofile/${user.id}`)
  }

  return (
    <>
    <div>
      <h1
        style={{textAlign:"center",
              color:"#27182F"}}
        >
         My Profile</h1>
      
    </div>



<br></br>
<br></br>
     <div className='homepage-profile'>

            <div className="container-profile" id="container">
                <div className="form-container-profile">
                    <form className="sign-in-container-profile " 
                    >
                        <img className=''
                          src={user.profile_photo} 
                          style={{
                            width:"100%",
                            justifyContent: "center",
                           
                          }}
                        />
                        
                    </form>
                </div>

                    <div className="overlay-container-profile">
                            <div className="overlay-profile">
                        <div 
                          className="overlay-panel-profile overlay-right"
                        >
                      <h1 >{user.first_name} </h1>
                      <br></br>
                      <br></br>
                          <div className='grid-container'>
                          
                            <p 
                            className='item1'>
                              Neighborhood:
                            </p>
                            <p className='item2'>
                              {user.location}
                            </p>
                          
                  <br></br>
                            <p className="item1"
                            >
                              Age:</p>
                            <p className='item2'>
                              {user.age}
                            </p>
                  <br></br>
                            <p className='item1'>
                              Interested In:
                            </p>

                            <p className='item2'>
                              { user.interested_in === "bi" ? "Women and Men" : user.interested_in}
                            </p>
                  <br></br>
                  <p
                    className='item1'>
                    Favorite Coding Language:
                  </p>
                  <p className='item2'
                  >
                    {user.language}</p>
                    <br></br>
                            <p className='item1'>
                              Hometown: 
                            </p>
                            <p className='item2'>
                              {user.hometown}
                            </p>
                  <br></br>
                            <p className='item1'>
                              Education:
                            </p>
                            <p className='item2'>
                              {user.education}
                            </p>
                            
                </div>
                <br></br>
                <br></br>
                <p 
                style={{textAlign: "center", paddingLeft: "4px", paddingRight: "4px"}}
                >
                  Bio: {user.bio}</p>
                <br></br>
                <button type="button"
                className='ghost-profile'
                onClick={editPost}
                >
                  Edit Profile</button>
                <br></br>
                <DeleteButtonMyProfile 
                  setUser={setUser} user={user} 
                />
                        </div>
                        
                    </div>
                </div>
            </div>

           

        </div>
    </>
  )
}

export default MyProfile