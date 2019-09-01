import React from 'react'




const TournementThumbnail = ({ id, title, onClick }) => (
    
    

    <button onClick={onClick} data-form-id={id}>
        {title.replace('__tournamentForm__', '')}

    </button>


);

export default TournementThumbnail;