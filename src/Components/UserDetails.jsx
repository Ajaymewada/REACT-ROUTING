import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const params = useParams();
    console.log(params);
    let userId = params.userId;
    let userNames = ["Pravalika", "Chandhana", "Pavan"]
    return (
        <div style={{marginTop:"40px"}}>
            {
                userNames[(userId - 1)] == null ? <div>No User Found!</div> : <div>User deatils : {userNames[(userId - 1)]}</div>
            }
        </div>
    )
}

export default UserDetails