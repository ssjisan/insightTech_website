import { useEffect, useState } from "react";
import { db } from "./firebase";

export default function Dashboard() {
    const [clientRequests, setClientRequests] = useState([]);

    useEffect(() => {
        const dataFromDb = [];
        const request =  db.collection("ClientRequest")
        .onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                dataFromDb.push({
                    ...doc.data(),
                    key:doc.id,
                })
                setClientRequests(request)
            })
        })

    }, [])
    console.log("ssss",clientRequests);
    return (
        <div>
            <h2>Client Requests</h2>
            <ul>
                {clientRequests.map(request => (
                    <li key={request.id}>
                        <p>Name: {request.name}</p>
                        <p>Email: {request.email}</p>
                        {/* Add other fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    )
}
