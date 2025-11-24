import React, { useState, useEffect } from "react";
function Counter(){
    const [count, Setcount] = useState(0);
    function Increment(){
      Setcount(count + 1)   
    }
    function Decrement(){
      Setcount(count - 1)   
    }
    const [counter, Setcounter] = useState(0);
    useEffect(() => {
       const timer = setInterval(() =>{
             Setcounter((prev) => prev + 1);
        },1000)

        return () => clearInterval(timer);
    },[])
    return(
        <div>
            <h2 style={{marginBottom:'5px'}}>Counter : {count}</h2>
            <button onClick={Increment}>Increament</button>
            <button onClick={Decrement}>Decrement</button>
             <br/>
            <h2>Count : {counter}</h2>
        </div>
    )
}
export default Counter;