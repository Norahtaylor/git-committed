import {useState, useEffect } from 'react'
import PendingRequestCard from './PendingRequestCard'

function PendingRequests({currentUser}) {
    const [requests, setRequests] = useState([])

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
    }, [])



 
  return (
    <div>
        <PendingRequestCard requests={requests}/>
    </div>
  )
}

export default PendingRequests