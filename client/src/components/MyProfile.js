import {useState} from 'react'
import DeleteButtonMyProfile from './DeleteButtonMyProfile'

function MyProfile({user, setUser}) {

  console.log(user.language)

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
                <button type="button "className='ghost-profile'>Edit Profile</button>
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