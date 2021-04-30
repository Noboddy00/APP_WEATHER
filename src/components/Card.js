import React from 'react';
import style from './Card.module.css';

export default function Card(props) {
    console.log(props)
    let descript;
    if (props.description==='clear sky'){
        descript=style.clearSky;
    }else if(props.description=== 'broken clouds'){
        descript=style.brokenClouds;
    }else if(props.description=== 'scattered clouds'){
        descript=style.scatteredClouds;
    }else if(props.description==='smoke'){
        descript=style.smoke;
    }else if(props.description==='few clouds'){
        descript=style.fewClouds;
    }else if(props.description==='overcast clouds'){
        descript=style.overcastClouds;
    }
    return (
        <div className={descript}>
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
