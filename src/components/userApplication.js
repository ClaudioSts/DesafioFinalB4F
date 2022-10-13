import * as React from 'react';
import Box from '@mui/material/Box';
import UserApplicationItem from './userApplicationItem';

export default function UserApplicationList(props) {
    
    const applications = [
        { location: "Location 1", title: "Full-Stack Developer", "description": "description 2121212", status: "In Review", statusId: 1 },
        { location: "Location 2", title: "Title 2", "description": "description 2121212", status: "In Review", statusId: 1 },
        { location: "Location 3", title: "Title 3", "description": "description 2121212", status: "Paused", statusId: 3 },
        { location: "Location 3", title: "Title 3", "description": "description 2121212", status: "Cancelled", statusId: 5 },
        { location: "Location 3", title: "Title 3", "description": "description 2121212", status: "In Review", statusId: 1 },
        { location: "Location 3", title: "Title 3", "description": "description 2121212", status: "Paused", statusId: 3 },
        { location: "Location 3", title: "Title 3", "description": "description 2121212", status: "Interview Scheduled", statusId: 2 },
        { location: "Location 3", title: "Title 3", "description": "description 2121212", status: "Completed", statusId: 4 },
        { location: "Location 3", title: "Title 3", "description": "description 2121212", status: "Cancelled", statusId: 5 }
    ]

    return (
        <>
            {
                applications.map((el, index) => {
                    return (
                        <div key={index} style={{marginBottom: "1%", padding: "0.5%"}}>
                            <UserApplicationItem style={{marginBottom: "1%"}}
                                key={index} 
                                location={el.location}
                                title={el.title}
                                status={el.status}
                                statusId={el.statusId}
                                description={el.description} />
                        </div>
                    );
                })
            }
        </>
    );
}