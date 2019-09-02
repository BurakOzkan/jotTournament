import React from 'react'
import { Button } from 'react-bootstrap';



const TournementThumbnail = ({ id, title, onClick }) => (
    
    

    <Button  variant="outline-primary" onClick={onClick} data-form-id={id}>
        {title.replace('__tournamentForm__', '')}

    </Button>


);

export default TournementThumbnail;