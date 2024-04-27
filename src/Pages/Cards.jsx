import React from 'react';
import './Card.css';



const Cards = (props) => {
    const handleClick = () => {
        // window.location.href = props.link; 
        window.open(props.link, '_blank');
    };

    return (
      <div className="card-container">
        <div className="card" onClick={handleClick}>
            <img src={props.image} alt="img" />
           
        </div>
      </div>
    );
};

export default Cards;
