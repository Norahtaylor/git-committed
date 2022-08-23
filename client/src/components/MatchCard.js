import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import ErrorPage from './ErrorPage'
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteIcon from '@mui/icons-material/Delete';


function MatchCard({matches, handleSelectedMatch, setMatches, updateCard, user, update, setUpdate}) {
let history = useHistory()

//shows more info and takes you to User Profile page 
//when i refresh, the page loses its state 
//how to keep the state saved 

function handleInfoClick(match) {
  fetch(`/matches/${match.id}`)
    .then(res => res.json())
    .then(handleSelectedMatch(match))
    history.push(`/userprofile/${match.id}`)
}
  
//Deletes the match 
  function handleMatchDelete(match) {
    console.log("i was clicked")
    fetch(`/matches/${match.id}`, {
      method: "DELETE",

    }).then(() => updateCard())
  }

  return (
    <>
    <div>
      <div>
        <h5 className='form-box-h5'
        > Love is in the air! </h5>
        <label className='label'>
          🎉 time to get your flirt on 🎉
        </label>
      </div>
      <div className="card-center"
          style={{
            //  display: "column",
              alignItems: "center",
            justifyContent: "center"
          }}
      >
          <ImageList 
            sx={{ 
              width: 900, height: 700, 
              borderRadius: "5px",
             borderColor: "#EB0F59" ,
            }}
          >
              <ImageListItem key="header"           
                cols={2}>
              </ImageListItem>
              {matches.length > 0 ? matches.map((match) => ( 
                <div>
                  {
                    user.id === match.requestor.id ?
                      <>
                        <ImageListItem
                          id={match.id}
                        >
                          <img
                            src={`${match.receiver.profile_photo}?w=248&fit=crop&auto=format`}
                            srcSet={`${match.receiver.profile_photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={match.receiver.name}
                            loading="lazy"
                          />
                          <ImageListItemBar
                            title={`${match.receiver.first_name}, ${match.receiver.age}`}
                            subtitle={match.receiver.bio}
                            actionIcon={
                              <>
                                <IconButton
                                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                  onClick={() => handleInfoClick(match)}
                               
                                >
                                  <InfoIcon />
                                </IconButton>
                                <IconButton
                                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                  aria-label="delete">
                                  <DeleteIcon id={match.id} onClick={() => handleMatchDelete(match)} />
                                </IconButton>
                              </>
                            }
                          />
                        </ImageListItem>
                      </>
                      :
                      <ImageListItem
                      >
                        <img
                          src={`${match.requestor.profile_photo}?w=248&fit=crop&auto=format`}
                          srcSet={`${match.requestor.profile_photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={match.requestor.name}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          title={`${match.requestor.first_name}, ${match.requestor.age}`}
                          subtitle={match.requestor.bio}
                          actionIcon={
                            <>
                              <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                onClick={() => handleInfoClick(match)}
                              >
                                <InfoIcon />
                              </IconButton>
                              <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label="delete">
                                <DeleteIcon id={match.id} onClick={() => handleMatchDelete(match)} />
                              </IconButton>

                            </>

                          }
                        />
                      </ImageListItem>
                  }
                </div>
              )
              ) : <ErrorPage history={history} />
              }            
          </ImageList>  
        </div>       
      </div>
    </>
  )
}

export default MatchCard;