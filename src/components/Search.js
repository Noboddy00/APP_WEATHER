import React, {useState} from "react";

export default function Search({onSearch}){

    const [city,setCity]= useState ("");

    return(
        <form onSubmit={(e)=>{
            e.preventDefault() // para evitar que la pagina recargue al ejecutarse el submit
        }}
    );

}