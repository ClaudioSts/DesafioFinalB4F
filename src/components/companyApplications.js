import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";

export default function CompanyApplications(props) {
    const applications = [
        { user: "User 1", title: "Title 1", description: "Description 1"},
        { user: "User 2", title: "Title 2", description: "Description 2"},
        { user: "User 3", title: "Title 3", description: "Description 3"},
    ]

    const [data, setData] = React.useState([]);

    const { loggedUser, isCompany, filter } = props;

    const applicationList = "api/company/jobs/aplications";

    React.useEffect(() => {
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
    }, []);

    return (
        <>
            {
                applications.map((el, index) => {
                    return (
                        <div key={index} style={{marginBottom: "1%", marginLeft: "1%"}}>
                            <Card sx={{ minWidth: 275 }} >
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                    {el.user}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {el.title}
                                    </Typography>
                                    <Typography variant="body2">
                                    {el.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    );
                })
            }
        </>
    );
}
