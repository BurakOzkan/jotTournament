import React from 'react'
import { Button } from 'react-bootstrap';


const TeamThumbnail = ({team,index}) => (
    
    <Button 
            variant="secondary" 
            size="lg" 
            key={index}
    >
    {team} 
    </Button>

);

export default TeamThumbnail;