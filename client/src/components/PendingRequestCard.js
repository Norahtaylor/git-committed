import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

function PendingRequests({requests, currentUser}) {
  console.log("requests,", requests)
  console.log("user", currentUser)

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

              //   actionIcon={
              //       <IconButton
              //           sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              //           aria-label={`info about ${item.title}`}
              //       >
              //           <InfoIcon />
              //       </IconButton>
              //   }
              />
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