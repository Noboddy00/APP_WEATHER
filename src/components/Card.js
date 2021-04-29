import React from 'react';
import style from './Card.module.css';

export default function Card(props) {
    return (
        <div className={style.card}>
            <button className={style.btnRed} onClick={() => props.onClose(props.id)}>X</button>
            <div className={style.info}>
                <h4>{props.name}</h4>
                <h5>{props.min}</h5>
                <h5>{props.max}</h5>
                <h5>{props.humidity}</h5>
                <h5>{props.img}</h5>
            </div>
        </div>
    );
};
