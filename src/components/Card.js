import React from 'react'

export default function Card(props){
    return (
        <div>
            <button>X</button>
            <h4>{props.name}</h4>
            <h5>{props.min}</h5>
            <h5>{props.max}</h5>
            <h5>{props.humidity}</h5>
            <h5>{props.img}</h5>
        </div>
    );
}