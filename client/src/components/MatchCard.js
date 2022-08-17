import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function MatchCard({matches}) {
    
   
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"

    }}>

          <ImageList sx={{ width: 900, height: 450 }}>
              <ImageListItem key="header" cols={5}>
                  <ListSubheader component="div"
                  >
                    My Matches
                  </ListSubheader>
              </ImageListItem>
              {matches.length > 0 ? matches.map((match) => ( 
                
                  <ImageListItem key={match.id}
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
  )
}


export default MatchCard