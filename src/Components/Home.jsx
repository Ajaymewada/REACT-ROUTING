import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    const [orderprocess, setorderprocess] = useState(false)
    return <>
    <h1>Home</h1>
        <button onClick={() => {
            setorderprocess(true);
            setTimeout(() => {
                setorderprocess(false);
                navigate("order-summary");
            }, 3000);
        }}>Place the order</button>
        {
            orderprocess ? <p>Placing the order...</p> : null
        }
    </>
}

export default Home