import {useState} from 'react'
import { useHistory} from 'react-router-dom'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorPage from './ErrorPage'

function PendingRequests({ updateCard, requests, handleSelectedMatch, setRequests, currentUser}) {
  const [click, setClick] = useState()
  let history = useHistory()

  function handleInfoClick(match) {
    console.log('info clicked')
    fetch(`/matches/${match.id}`)
      .then(res => res.json())
      .then(handleSelectedMatch(match))
    history.push(`/userprofile/${match.id}`)
  }

  function handleDelete(match) {
    console.log("i was clicked")
    fetch(`/matches/${match.id}`, {
      method: "DELETE",
    }).then(() => updateCard())
  }

  return (
    <>
      <div > 
      <h5 className='form-box-h5'
      > People I've swiped right on
      </h5>
        <label className='label'>
          Patience is a virtue.
        </label>
      </div>
       <div 
        className="card-center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "auto",

        }}
     
      >

        <ImageList
          // rowHeight={164}
          sx={{
          
            width: 900, height: 700,
            borderRadius: "5px",
            borderColor: "#EB0F59",
            overflow: "scroll",
          }}
        >
          <ImageListItem key="header"

            cols={2}>
            <ListSubheader
            
              component="div"
            >
            
            </ListSubheader>
          </ImageListItem>
          {requests.length > 0 ? requests.map((match) => (

            <ImageListItem
              key={match.id}
              id={match.id}
            >       
              <img 
              // sx={{overflow: "auto" }}
                         
                src={`${match.receiver.profile_photo}?w=248&fit=crop&auto=format`}
                srcSet={`${match.receiver.profile_photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={match.receiver.name}
                loading="lazy"
              />               
               <ImageListItemBar
                // onClick={handleInfoClick}
                title={`${match.receiver.first_name}, ${match.receiver.age}`}
                subtitle={`📍${match.receiver.location}`}
                actionIcon={
                  <>
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    onClick={() => handleInfoClick(match)}
                    aria-label={`info about ${match.first_name}`}
                  >
                  <InfoIcon />       

                  </IconButton>
                  <IconButton 
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label="delete">
                    <DeleteIcon id ={match.id} onClick={ () => handleDelete(match) }/>
                  </IconButton> 
                  </>
                }
              /> 
            </ImageListItem>
          )
          ) : <ErrorPage  />
          }
        </ImageList>

      </div>
    </>
  )
}

export default PendingRequests