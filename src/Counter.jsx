import { useState } from "react"

 export default function Counter(){
 const [count, setcount] = useState(0);
 const handleAdd = () =>{
    const newCount = count + 1;
    setcount(newCount);
 }
 const handleReduce = () =>{
    const result = count - 1;
    setcount(result);
 }
    return (
    <div style={{border:'2px solid purple'}}>
<h3>Counter:{count}</h3>
<button onClick={handleAdd}>Add</button>
<button onClick={handleReduce}>reduce</button>
    </div>
        )
 }