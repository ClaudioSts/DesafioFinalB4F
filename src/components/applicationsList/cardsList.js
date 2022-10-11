import * as React from 'react';
import Box from '@mui/material/Box';
import CardItemWithModal from './cardItemWithModal';

export default function CardsList(props) {
    const {loggedUser, filter} = props
    const applications = [
        { company: "Company 1", position: "Position 1", description: "Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1"},
        { company: "Company 2", position: "Position 2", description: "Description 2"},
        { company: "Company 3", position: "Position 3", description: "Description 3"},
    ]
    const filterPredicate = (el) => {
        if (filter != "") {
            let filterUppercase = filter.toUpperCase();
            return el.company.toUpperCase().includes(filterUppercase) || 
                el.position.toUpperCase().includes(filterUppercase) || 
                el.description.toUpperCase().includes(filterUppercase);
        } else {
            return true;
        }
    }

    return (
        <>
            {
                applications.filter(filterPredicate).map((el, index) => {
                    return (
                        <div key={index} style={{marginBottom: "1%"}}>
                            <CardItemWithModal style={{marginBottom: "1%"}}
                                key={index} company={el.company}
                                position={el.position}
                                description={el.description}
                                loggedUser={loggedUser} />
                        </div>
                    );
                })
            }
        </>
    );
}
