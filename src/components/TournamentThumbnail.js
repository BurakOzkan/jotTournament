import React from 'react'
import { Button ,Popover,OverlayTrigger , ButtonGroup } from 'react-bootstrap';



const popover = (id, title, onClick) => (

  <Popover id="popover-basic">
        <ButtonGroup>
        <Button
          variant="primary"
          onClick={onClick}
          data-form-id={id}
          className="mahmut"
        >
        VIEW TOURNAMENT
        </Button>
        <Button
          variant="success"
          href={`https://jotform.com/${id}`}
          target="_blank"
          data-form-id={id}
          className="mahmut"
        >
        JOIN TOURNAMENT
        </Button>
        </ButtonGroup>
  </Popover>
);



const TournementThumbnail = ({ id, title, onClick }) => (

    

    <React.Fragment>
    <OverlayTrigger trigger="click" placement="right" overlay={popover(id, title, onClick)}>
      
      <Button variant="info"  size="lg">{title.replace('__tournamentForm__', '')}</Button>        
    </OverlayTrigger>
    &nbsp;
    </React.Fragment>
);


export default TournementThumbnail;