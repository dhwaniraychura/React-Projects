import { useState } from "react";
export default function FormExample(){
    const [Id, SetId] = useState('');
    const [Course, SetCourse] = useState('');
    const Register = (e) => {
        e.preventDefault();
        console.log('Submitted:', Id, Course);
    }
    return(
        <>
            <h2>Form Example :</h2> 
               <form onSubmit={Register}>
                  <label htmlFor="#">ID : </label>
                  <input type="number" placeholder="Enter Your Id" value={Id} onChange={(e) => {SetId(e.target.value)}} />
                  <br />
                  <br />
                  <label htmlFor="#">Course :</label>
                  <input type="text" placeholder="Enter Your Course" value={Course} onChange={(e) => {SetCourse(e.target.value)}}/>
                  <br />
                  <br />
                  <button type="submit">Submit</button>
                 <p>Submitted: {`${Id}, ${Course}`}</p>
               </form>
        </>
    )
}