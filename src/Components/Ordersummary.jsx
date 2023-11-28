import React from 'react'
import { useNavigate } from 'react-router-dom'

function Ordersummary() {
    const navigate = useNavigate();
    return (
        <>
            <div>Order-summary page</div>
            <button onClick={() => { navigate ("/")}}>Go back</button>
        </>
    )
}

export default Ordersummary