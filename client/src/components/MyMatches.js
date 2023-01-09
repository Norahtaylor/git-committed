import {useEffect, useState} from 'react';
import MatchCard from './MatchCard';
import PendingRequests from './PendingRequestCard';
import Chat from './Chat'


export default function MyMatches({ currentUser, handleSelectedMatch, updateCard, update }) {
    const [matches, setMatches] = useState([])
    const [errors, setErrors] = useState()



useEffect(() => {
    fetch('/thematches')
        .then(res => res.json())
        .then(matches => setMatches(matches))
}, [update])

    
    return (
        <div>
            <MatchCard 
                user={currentUser} 
                handleSelectedMatch={handleSelectedMatch} 
                setMatches={setMatches} 
                matches={matches} 
                updateCard={updateCard}
            />

            {/* <Chat 
                user={currentUser}
                handleSelectedMatch={handleSelectedMatch}
                setMatches={setMatches}
                matches={matches}
                updateCard={updateCard}
            /> */}


        </div>
    );
}
