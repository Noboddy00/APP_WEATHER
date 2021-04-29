import React, { useState } from "react";
import style from './Search.module.css';

export default function Search(props) {
    const [name, setName] = useState("");
    function handleChange(e) {
        setName(e.target.value);
    };
    function handleSubmit(e) {
        e.preventDefault();
        props.onSearch(name);
        setName("");
    };
    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="City..."
                    value={name}
                    onChange={handleChange}
                />
                <input type="submit" valvue="Add" />
            </form>
        </div>
    );
};
