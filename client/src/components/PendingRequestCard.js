import {useState} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

function PendingRequests({requests, currentUser}) {
  const [click, setClick] = useState()

  function handleInfoClick(){
    setClick(!click)
  }

  function handleDelete(id) {
    console.log(id)
    console.log("i was clicked")
    fetch(`/matches/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requestor_id: null,
        status: "",
        accepted: false
      })
    })
  }

  return (
    <>

      <div > 
      <h5 className='form-box-h5'
      > Match Requests You Sent </h5>
        <label className='label'>
          Patience is a virtue.
        </label>
      </div>
       <div 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"

        }}
     
      >

        <ImageList
          // rowHeight={164}
          sx={{
          
            width: 900, height: 700,
            borderRadius: "5px",
            borderColor: "#EB0F59",
          }}
        >
          <ImageListItem key="header"

            cols={2}>
            <ListSubheader
              //   sx={{ color: "white",
              //   backgroundColor: "#EB0F59" 
              // }}
              component="div"
            >
            
            </ListSubheader>
          </ImageListItem>
          {requests.length > 0 ? requests.map((match) => (

            <ImageListItem
              // sx={{
              //   minWidth: "100%",
              //   maxWidth: "50px",
              //   minHeight: "50%",
              //   // justifyContent: "space-between"
              // }}

              key={match.id}
              id={match.id}
            >
        
              <img sx={{overflow: "auto"}}
              
                src={`${match.receiver.profile_photo}?w=248&fit=crop&auto=format`}
                srcSet={`${match.receiver.profile_photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={match.receiver.name}
                loading="lazy"
              />

              
              {click ? <ImageListItemBar
                onClick={handleInfoClick}
                title={`"${match.receiver.bio}"`}
                subtitle={`💻 ${match.receiver.education}, ${match.receiver.language}`}

                actionIcon={
                  <>
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    onClick={handleInfoClick}
                    aria-label={`info about ${match.first_name}`}
                  >
                    <InfoIcon />
                 
                 
                  </IconButton>
                  {/* <IconButton aria-label="delete">
                    <DeleteIcon id ={match.id} onClick={ (id) => handleDelete(id) }/>
                  </IconButton>  */}
                  </>
                }
              /> :  
              <ImageListItemBar
            
                title={`${match.receiver.first_name}, ${match.receiver.age}`}
              
                subtitle={`📍${match.receiver.location}`}
          
                
                actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        onClick={handleInfoClick}
                       aria-label={`info about ${match.first_name}`}
                    >
                        <InfoIcon />
                    </IconButton>
                }
              /> }
            </ImageListItem>
          )
          ) : null
          }
        </ImageList>

      </div>
    </>
  )
}

export default PendingRequests