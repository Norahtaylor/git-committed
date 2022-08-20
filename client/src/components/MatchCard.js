import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function MatchCard({matches, currentUser}) {
  console.log(currentUser)
   
  return (
    <div>
      <div >
        <h5 className='form-box-h5'
        > Love is in the air! </h5>
        <label className='label'>
          🎉 time to get your flirt on 🎉
        </label>
      </div>

          <ImageList 
            sx={{ width: 900, height: 700, 
              borderRadius: "5px",
             borderColor: "#EB0F59" }}
          >
              <ImageListItem key="header" 
                
                cols={2}>
                
              </ImageListItem>
              {matches.length > 0 ? matches.map((match) => ( 
                
                  <ImageListItem 
                  
                  key={match.id}
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