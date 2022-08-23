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
    <div>
          <PendingApprovalCard pendingApproval={pendingApproval} user={currentUser} />
          <Footer />
    </div>
  )
}

export default PendingApproval