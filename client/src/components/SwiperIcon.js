import React from 'react'
import SwipeIcon from '@mui/icons-material/Swipe';


function SwiperIcon() {
  return (
      <div 
        style={{
          alignItems: 'center',
          justifyContent: "center",
          flexDirection: 'column',
          display: 'center'
        }}
      >
        {/* <SwipeIcon 
          sx={{
            justifyContent: "center",
            flexDirection: "column",
            display: "center"
          }} 
        // className="swipe-right" 
        /> */}
   
         <span>Swipe right to ❤️, left to say goodbye 👋</span>
    </div>
        
  )
}

export default SwiperIcon