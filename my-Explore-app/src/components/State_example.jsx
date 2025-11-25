 import { useState } from "react";
 export default function StateExample(){
    const [count, setCount] = useState(0);
    return(
        <>
            <h2>Counter using State :</h2>
            <p>Count : {count}</p>
            <button onClick={() => {setCount(count + 1)}}>Increament</button>
            <button onClick={() => {setCount(count - 1)}}>Decreament</button>
        </>
    )
}