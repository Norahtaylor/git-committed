import React from 'react'
import { useHistory } from "react-router-dom";


function UserProfile({ match, user }) {
    let navigate = useHistory()

  return (
      <> 
          <div>
              <h1
                  style={{
                      textAlign: "center",
                      color: "#27182F"
                  }}
              >
                  My Profile</h1>

          </div>
          <br></br>
          <br></br>
          <div className='homepage-profile'>

              <div className="container-profile" id="container">
                  {user.id === match.requestor_id ? 
                <>
                  <div className="form-container-profile">
                      <form className="sign-in-container-profile "
                      >
                          <img className=''
                              src={match.receiver.profile_photo}
                              style={{
                                  width: "100%",
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

                                      <h1 >{match.receiver.first_name} </h1>
                                      <br></br>
                                      <br></br>
                            <div className='grid-container'>

                                <p
                                    className='item1'>
                                    Neighborhood:
                                    </p>
                                    <p className='item2'>
                                        {match.receiver.location}
                                </p>
                                <br></br>
                                          <p className="item1"
                                          >
                                              Age:</p>
                                          <p className='item2'>
                                              {match.receiver.age}
                                          </p>
                                          <br></br>
                                          <p className='item1'>
                                              Interested In:
                                          </p>

                                          <p className='item2'>
                                              {match.receiver.interested_in === "bi" ? "Women and Men" : match.receiver.interested_in}
                                          </p>
                                          <br></br>
                                          <p
                                              className='item1'>
                                              Favorite Coding Language:
                                          </p>
                                          <p className='item2'
                                          >
                                              {match.receiver.language}</p>
                                          <br></br>
                                          <p className='item1'>
                                              Hometown:
                                          </p>
                                          <p className='item2'>
                                              {match.receiver.hometown}
                                          </p>
                                          <br></br>
                                          <p className='item1'>
                                              Education:
                                          </p>
                                          <p className='item2'>
                                              {match.receiver.education}
                                          </p>

                            </div>
                            <br></br>
                                      <p
                                          style={{ textAlign: "center", paddingLeft: "4px", paddingRight: "4px" }}
                                      >
                                          Bio: {match.receiver.bio}</p>
                                          <br></br>
                            <button 
                                className='ghost-profile' 
                                onClick={() => navigate.push('/mymatches')}
                            >
                                Back to Matches</button>
                        </div>
                    </div>
                </div>
                </>
                  :
                      <>
                          <div className="form-container-profile">
                              <form className="sign-in-container-profile "
                              >
                                  <img className=''
                                      src={match.requestor.profile_photo}
                                      style={{
                                          width: "100%",
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

                                      <h1 >{match.requestor.first_name} </h1>
                                      <br></br>
                                      <br></br>
                                      <div className='grid-container'>

                                          <p
                                              className='item1'>
                                              Neighborhood:
                                          </p>
                                          <p className='item2'>
                                              {match.requestor.location}
                                          </p>
                                          <br></br>
                                          <p className="item1"
                                          >
                                              Age:</p>
                                          <p className='item2'>
                                              {match.requestor.age}
                                          </p>
                                          <br></br>
                                          <p className='item1'>
                                              Interested In:
                                          </p>

                                          <p className='item2'>
                                              {match.requestor.interested_in === "bi" ? "Women and Men" : match.requestor.interested_in}
                                          </p>
                                          <br></br>
                                          <p
                                              className='item1'>
                                              Favorite Coding Language:
                                          </p>
                                          <p className='item2'
                                          >
                                              {match.requestor.language}</p>
                                          <br></br>
                                          <p className='item1'>
                                              Hometown:
                                          </p>
                                          <p className='item2'>
                                              {match.requestor.hometown}
                                          </p>
                                          <br></br>
                                          <p className='item1'>
                                              Education:
                                          </p>
                                          <p className='item2'>
                                              {match.requestor.education}
                                          </p>

                                      </div>
                                      <br></br>
                                      <p
                                          style={{ textAlign: "center", paddingLeft: "4px", paddingRight: "4px" }}
                                      >
                                          Bio: {match.requestor.bio}</p>
                                      <br></br>
                                      <br></br>
                                      <button className='ghost-profile' onClick={() => navigate.push('/mymatches')}
                                      >
                                        Back to Matches</button>
                                  </div>
                              </div>
                          </div>
                      </>
                  }

            </div>
        </div>
      </>
  )
}

export default UserProfile