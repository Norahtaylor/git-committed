import {useState, useEffect } from 'react'
import PendingApprovalCard from './PendingApprovalCard'
import Footer from './Footer'

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

    console.log("hello", pendingApproval)
  return (
    <div 
        style={{
            //   backgroundImage: 'url(https://images.unsplash.com/photo-1619963258837-b83f3406cfcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)',
            //   backgroundImage: `url(https://images.unsplash.com/photo-1620503292890-c597f62cce8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`,
              height: "1000px",
             backgroundSize: "cover"

        }}
    >
          <PendingApprovalCard pendingApproval={pendingApproval} user={currentUser} />
  
    </div>
  )
}

export default PendingApproval