import {useState, useEffect } from 'react'
import PendingRequestCard from './PendingRequestCard'

function PendingRequests({currentUser, handleSelectedMatch, updateCard, update, setUpdate}) {
    const [requests, setRequests] = useState([])
    // const [update, setUpdate] = useState(false)

    console.log(currentUser)

    useEffect(() => {
        fetch('/yourrequests')
            .then((r) => {
                if (r.ok) {
                    r.json().then((requests) => setRequests(requests))
                    // history.push('/pendingapproval')
                } else {
                    r.json().then((err) => console.log(err.errors))
                }
            })
    }, [update])

    console.log(requests)
    //whatever variable i set, anytime this variable changes use effect will rerun 
 
  return (
    <div>
        <PendingRequestCard handleSelectedMatch={handleSelectedMatch} updateCard={updateCard} update={update} setUpdate={setUpdate}setRequests={setRequests} requests={requests}/>
    </div>
  )
}

export default PendingRequests