import { useEffect, useState } from "react"
import './friends.css'
import Friend from "./Friend";



export default function Friends(){
    const [friends,setfriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users ')
        .then(res => res.json())
        .then(data => setfriends(data))
    },[]);
    return(
        <div className="box">
            <h3>friends:{friends.length}</h3>
            {
        friends.map(friend => <Friend friend={friend}></Friend>)
    }
        </div>
    )
}