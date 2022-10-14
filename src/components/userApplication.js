import * as React from 'react';
import Box from '@mui/material/Box';
import UserApplicationItem from './userApplicationItem';
import { ObjectID } from "bson";

export default function UserApplicationList(props) {

    const [data, setData] = React.useState([
        {
            _id: localStorage.getItem("token"),
            companyID: ObjectID(),
            title: "",
            description: "",
            location: "",
        },
    ]);

    const { loggedUser, isCompany } = props;

    const applicationList = "api/users/application";


    const fetchData = () => {
        fetch(applicationList, {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                console.error(data);
            })
            .catch((err) => console.log("error"));
    };
    fetchData();

    return (
        <>
            {
                data.map((el, index) => {
                    return (
                        <div key={index} style={{ marginBottom: "1%", padding: "0.5%" }}>
                            <UserApplicationItem style={{ marginBottom: "1%" }}
                                key={index}
                                location={el.location}
                                title={el.title}
                                status={el.status}
                                statusId={el.statusId}
                                description={el.description}
                                loggedUser={loggedUser}
                                isCompany={isCompany} />
                        </div>
                    );
                })
            }
        </>
    );
}