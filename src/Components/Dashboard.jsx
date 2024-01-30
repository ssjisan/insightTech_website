import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [clientRequests, setClientRequests] = useState([]);

    useEffect(() => {
        // Fetch data from Firebase Realtime Database
        axios.get('https://insighttechbd-d4ca9-default-rtdb.firebaseio.com/ClientRequest.json')
            .then(response => {
                // Process retrieved data
                const requestData = response.data;
                const requestsArray = Object.keys(requestData).map(key => {
                    return { id: key, ...requestData[key] };
                });
                setClientRequests(requestsArray);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleRemoveRequest = (id) => {
        // Make a DELETE request to Firebase to remove the item
        axios.delete(`https://insighttechbd-d4ca9-default-rtdb.firebaseio.com/ClientRequest/${id}.json`)
          .then(() => {
            console.log('Request removed successfully');
            // Update clientRequests state after successful deletion
            setClientRequests(prevState => prevState.filter(request => request.id !== id));
          })
          .catch(error => {
            console.error('Error removing request:', error);
          });
      };
    return (
        <div>
            <h1>Client Requests Dashboard</h1>
            <div>
                {clientRequests.map(request => (
                    <div key={request.id}>
                        <h3>{request.company}</h3>
                        <p><strong>Name:</strong> {request.name}</p>
                        <p><strong>Email:</strong> {request.email}</p>
                        <p><strong>Phone:</strong> {request.phone}</p>
                        <p><strong>Position:</strong> {request.position}</p>
                        <p><strong>Budget:</strong> {request.budget}</p>
                        <p><strong>Service:</strong> {request.service}</p>
                        <p><strong>Project Brief:</strong> {request.projectBrief}</p>
                        <button onClick={() => handleRemoveRequest(request.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
