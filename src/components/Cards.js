import React from 'react';
import Card from './Card';
import style from './Cards.module.css';

export default function Cards(props) {
    if (props.cities) {
        return (
            <div className={style.info}>
                {props.cities.map(c => <Card
                    key={c.id}
                    max={c.temp_max}
                    min={c.temp_min}
                    name={c.name}
                    img={c.img}
                    onClose={props.onClose}
                    humidity={c.humidity}
                    id={c.id}
                    description={c.description}
                />)}
            </div>
        );
    } else {
        return (
            <div>No cities found</div>
        );
    };
};