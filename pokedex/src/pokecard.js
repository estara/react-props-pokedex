import React from 'react';

const imgAPI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

function Pokecard(props) {
    const imgSrc = `${imgAPI}${props.image}.png`
    return (
        <div style={{backgroundColor:'lightgray',
                     width: '10rem',
                     borderRadius: '10px',
                     margin: '1em',
                     display: 'inline-block'}}>
            <p style={{textAlign:'center', color:'blue'}}><b>{props.name}</b></p>
            <img style={{display:'block', marginLeft: 'auto', marginRight: 'auto'}} src={imgSrc}></img>
            <p style={{textAlign:'center'}}>Type: {props.type}</p>
            <p style={{textAlign:'center'}}>EXP: {props.exp}</p>
        </div>
    )
}

export default Pokecard;