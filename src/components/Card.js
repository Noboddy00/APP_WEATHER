import React from 'react';
import style from './Card.module.css';
// este componente se encarga de renderizar cada carta 
export default function Card(props) {
    console.log(props)
    return (
        <div className={style.card}>
            <button className={style.btn} onClick={() => props.onClose(props.id)}>X</button>
            <div className={style.info}>
                <img className={style.img} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Img not found" />
                <h3>{props.name}</h3>
                <h4>{props.description}</h4>
                <h4>Max: {props.max}°</h4>
                <h5>Min: {props.min}°</h5>
                <h6>Humidity: {props.humidity}</h6>
            </div>
        </div>
    );
};
