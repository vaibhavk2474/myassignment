import React, { useState, useEffect } from "react";
import MoviesList from "./MoviesList";

export default function Movies(){


    
const [state, setstate] = useState("")

    useEffect(() => {
        let tokenObj = JSON.parse(localStorage.getItem("login"));
        console.log(tokenObj);
        setstate(tokenObj)
    }, [])
 if (state) {
if (state.login) {
    return <MoviesList token={state.Token}></MoviesList>
    
}
        
    } else {
     return <h1>Please First login </h1>
 }
}

