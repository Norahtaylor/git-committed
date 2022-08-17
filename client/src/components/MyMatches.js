import {useEffect, useState} from 'react';
import MatchCard from './MatchCard';
import NavBar from './NavBar';


export default function MyMatches({currentUser}) {
    const [matches, setMatches] = useState([])

console.log(currentUser)

useEffect(() => {
    fetch('/mymatches')
        .then(res => res.json())
        .then(matches => setMatches(matches))
}, [])

console.log(matches)
    
    return (
        <div>
            <MatchCard matches={matches}/>
        </div>
    );
}
