import React from "react";
import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import MoviesPagination from "./MoviesPagination";

export default function MoviesList(props) {
  const [state, setstate] = useState(null);
  useEffect(async () => {
    let moviesObj = await fetchMovies(props.token);
    // console.log(moviesObj);
    // console.log(moviesObj.results);

    if (moviesObj) {
      if (moviesObj.is_success || moviesObj.results) {
        setstate(moviesObj);
      } else {
        setstate(moviesObj.is_success);
      }
    }
  }, []);

  let refresh = async () => {
    let moviesObj = await fetchMovies(props.token);
    console.log(moviesObj);
    console.log(moviesObj.results);
    if (moviesObj.is_success || moviesObj.results) {
      setstate(moviesObj);
    } else {
      setstate(moviesObj.is_success);
    }
  };
  console.log(state);
  if (state) {
    return <MoviesPagination movies={state}></MoviesPagination>;

    //    return (
    //      <>
    //        <h1>logged</h1>
    //        {state.results && state.results.map((item)=>{
    //         //    console.log(item);
    //         return <MoviesPagination ></MoviesPagination>
    //         //  (
    //         //     <>
    //         //     <h5>titel {item.title}</h5>
    //         //     </>
    //         // )
    //        })}
    //    </>
    //    )
  } else {
    return <Link onClick={refresh}>refresh</Link>;
  }
}

let fetchMovies = async (token) => {
  try {
    let Token = token;
    let p1 = await fetch("https://demo.credy.in/api/v1/maya/movies", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${Token}`, //Add this line
      },
    });
    let movies = await p1.json();
    console.log(movies);
    return movies;
  } catch (err) {
    console.log(err);
    // return err
  }
};
