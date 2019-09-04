import React from 'react'
import { Button } from 'react-bootstrap';


const TeamThumbnail = ({team,index}) => (
    
    <Button variant="secondary" size="lg" 
      // variant="outline-dark"
      // onClick={onClick}
      key={index}
      // className="mahmut"
    >
        {team} 
    </Button>

);

export default TeamThumbnail;