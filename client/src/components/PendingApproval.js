import {useState, useEffect } from 'react'
import PendingApprovalCard from './PendingApprovalCard'

function PendingApproval({currentUser}) {
    const [pendingApproval, setPendingApproval] = useState([])
    const [errors, setErrors] = useState()

    useEffect(() => {
        fetch('/pendingapproval')
            .then((r) => {
                if (r.ok) {
                    r.json().then((pendingApproval) => setPendingApproval(pendingApproval))
                  
                } else {
                    r.json().then((err) => console.log(err.errors))
                }
            })
    }, [])

    console.log("hello")
  return (
    <div>
          <PendingApprovalCard pendingApproval={pendingApproval} user={currentUser} />
    </div>
  )
}

export default PendingApproval