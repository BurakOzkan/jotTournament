import React from 'react'
import { Button } from 'react-bootstrap';
import {Badge} from 'react-bootstrap'


const TournementThumbnail = ({ id, title, onClick }) => (
    <Button
      variant="outline-dark"
      onClick={onClick}
      data-form-id={id}
      className="mahmut"
    >
        {title.replace('__tournamentForm__', '')}
        <div><Badge href="https://jotform.com/`${id}`" sticky="top" variant="secondary">   </Badge></div>
    </Button>
);

export default TournementThumbnail;