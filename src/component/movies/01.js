import React, { useState, useEffect } from "react";

export default function Movies() {
  const [state, setstate] = useState({
    token: null,
  });

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("login"));
    if (login) {
      setstate({
        token: login.Token,
      });
    }
  }, []);

  let getMovies = async () => {
    console.log("get movies");
    fetchMovies(state.token);
  };
  return (
      <>
      {state.token?getMovies():null}
      </>
  )
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
    let p2 = await p1.json();

    console.log(p2);
  } catch (err) {
    console.log(err.message);
  }
};
