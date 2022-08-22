import {useEffect, useState} from 'react';
import MatchCard from './MatchCard';
import NavBar from './NavBar';
import PendingRequests from './PendingRequestCard';


export default function MyMatches({currentUser}) {
    const [matches, setMatches] = useState([])
    const [errors, setErrors] = useState()

 
console.log("user", currentUser)

useEffect(() => {
    fetch('/mymatches')
        .then(res => res.json())
        .then(matches => setMatches(matches))
}, [])

console.log(matches)
    
    return (
        <div>
            <MatchCard user={currentUser} matches={matches}/>
        </div>
    );
}
