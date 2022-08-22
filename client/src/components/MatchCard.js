import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function MatchCard({matches, user}) {

   
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
            sx={{ 
              width: 900, height: 700, 
              borderRadius: "5px",
             borderColor: "#EB0F59" ,
              // display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
              <ImageListItem key="header" 
                
                cols={2}>
                
              </ImageListItem>
              {matches.length > 0 ? matches.map((match) => ( 
                
                <ImageListItem 
                >
                   
                    {
                      user.id === match.requestor.id ?
                      
                      <> 
                        <ImageListItem
                        >
                      <img
                        src={`${match.receiver.profile_photo}?w=248&fit=crop&auto=format`}
                        srcSet={`${match.receiver.profile_photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={match.receiver.name}
                        loading="lazy"
                      />
                        <ImageListItemBar
                          title={`${match.receiver.first_name}, ${match.receiver.age}`}
                          subtitle={match.receiver.bio} />
                        </ImageListItem>                      
                        </>

                        : 
                      <>
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
                    subtitle={match.requestor.bio}   /> 
                      </ImageListItem>
                      </>
                    }
                    
                  </ImageListItem>
              )
              ) : null
              }
          </ImageList>
          
      </div>
  )
}


export default MatchCard