import React from 'react'
import {useHistory} from 'react-router-dom'

function ErrorPage({history}) {
    history = useHistory()
  return (
    <div 
    className="card-center"
      style={{
         display: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <button onClick={() => history.push('/swipe')}>Take me to find love</button>
        <div
          //  className='no-matches'
        >
              
              {/* <iframe src="https://giphy.com/embed/QB78LMb32YqoE" 
              width="480" 
              height="326" 
              frameBorder="0" 
              class="giphy-embed" 
              alignItems="center"
              justifyContent= "center"

              allowFullScreen>
                </iframe> */}
                {/* <p>
                    <a href="https://giphy.com/gifs/sad-crying-james-van-der-beek-QB78LMb32YqoE">
                    </a>
                </p> */}
          

          <button onClick={() => history.push('/swipe')}>Take me to find love</button>

      </div>
      </div>
  )
}

export default ErrorPage