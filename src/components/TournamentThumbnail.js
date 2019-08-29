import React, { Component } from 'react'

const TournementThumbnail = ({ id, name, onClick }) => (
    <button onClick={onClick} data-form-id={id}>
        {name}
    </button>
);

export default TournementThumbnail;