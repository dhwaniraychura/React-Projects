import { useEffect, useState } from "react"

export default function LifecycleExample(){
    const [count, Setcount] = useState(0);
    useEffect(() => {
       console.log("Mounted...");
        const timer = setInterval(() => {
            Setcount((c) => c + 1);
        },1000)
        return () => {
            console.log("Unmounted...");
            clearInterval(timer);
        } 
    },[])
    useEffect(() => {
        if(count > 0){
            console.log("Updated...");
        }
    })
    return(
       <>
           <h2>LifeCycle Example :</h2>
           <p>Timer : {count} </p>
           <p>Open the browser console to clearly see when the component mounts, updates, and unmounts.</p>
       </>
    )
}