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
        <div >
            <form className={style.container} onSubmit={handleSubmit} >
                <input
                    className={style.input}
                    type="text"
                    placeholder="Search City"
                    value={name}
                    onChange={handleChange}
                />
                <button className={style.btnSearch}type="submit" valvue="Add">Search</button>
            </form>
        </div>
    );
};
