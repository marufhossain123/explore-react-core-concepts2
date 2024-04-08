import { useState } from "react"

export default function Team(){
    const player = {
        border: '2px solid skyblue',
        padding: '15px',
        borderRadius: '20px',
        marginBottom: '10px'

    }

    const [team, setTeam] = useState(0);
    const handleAddd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () =>{
        const newRemove = team - 1;
        setTeam(newRemove);
        
    }
    return(
        <div style={player}>
            <h2>players: {team}</h2>
            <button onClick={handleAddd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}