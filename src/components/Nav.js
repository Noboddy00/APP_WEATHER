import React from 'react';
import Search from './Search';

export default function Nav(props) {
    return (
        <div>
            <span>Weather app</span>
            <Search onSearch={props.onSearch} />
        </div>
    );
};