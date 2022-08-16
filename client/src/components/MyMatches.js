import {useEffect, useState} from 'react';
import MatchCard from './MatchCard';
import NavBar from './NavBar';


export default function MyMatches({currentUser}) {
    const [matches, setMatches] = useState([])

console.log(currentUser)

//    fetch('/mymatches')
//     .then(res => res.json())
//     .then(matches => setMatches(matches))

useEffect(() => {
    fetch('/mymatches')
        .then(res => res.json())
        .then(matches => setMatches(matches))
}, [])

console.log(matches)
    
    return (
        <div>


            {/* <NavBar /> */}
            <MatchCard matches={matches}/>
        </div>
    );
}
