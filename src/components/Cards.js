import React from 'react'
import Card from './Card'

export default function Cards({ cities, onClose }) {
    if (cities) {
        return (
            <div>
                {cities.map(c => <Card
                    key={c.id}
                    max={c.temp_max}
                    min={c.temp_min}
                    name={c.name}
                    img={c.img}
                    onClose={onClose}
                    humidity={c.humidity}
                />)}
            </div>
        );
    } else {
        return (
            <div>No cities found</div>
        )
    }
}