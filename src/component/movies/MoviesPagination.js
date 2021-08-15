import React, { useState } from "react";
import { useEffect } from "react";
import MovieSummary from "./MovieSummary";

let totalPages;
let arr = [];
export default function MoviesPagination(props) {
  const [movies, setMovies] = useState(props.movies.results);
  const [value, setValue] = useState("");
  let handleInput = (e) => {
    // console.log(e.target.value);

    setValue(e.target.value);
  };
  //   console.log(movies);

  let pagination = (e) => {
    let pageNo = e.target.id;
    // console.log(pageNo);

    console.log(totalPages);

    let fp = (pageNo - 1) * 4;
    let lp = fp + (4 - 1);
    let moviesList = props.movies.results.slice(fp, lp + 1);
    remove(loop());
    document.getElementById(
      pageNo
    ).parentElement.className = `page-item active`;

    setMovies(moviesList);
  };

  let remove = (arr) => {
    arr.filter((item) => {
      document.getElementById(
        `${item + 1}`
      ).parentElement.className = `page-item`;
    });
    return arr;
  };
  let loop = () => {
    let arr = [];

    for (let index = 0; index < totalPages; index++) {
      arr.push(index);
    }
    return arr;
  };
  let moviesList;
  useEffect(() => {
    if (value == "") {
      if (movies) {
        let pageNo = 1;
        //   console.log(pageNo);

        console.log(movies);
        totalPages = Math.ceil(props.movies.results.length / 4);

        let fp = (pageNo - 1) * 4;
        let lp = fp + (4 - 1);
        console.log(totalPages, fp, lp);
        moviesList = props.movies.results.slice(fp, lp + 1);
        arr = loop();
        // document.getElementById(`${1}`).parentElement.className=`page-item active`;

        setMovies(moviesList);
      }
    }
  }, []);

  let handleSearch = () => {
    if (value.length >= 3) {
      let lowercaseValue = value.toLowerCase();
      let findArr = props.movies.results.filter((item) => {
        return item.title.toLowerCase().includes(lowercaseValue, 0);
      });

      console.log(findArr);
      setMovies(findArr);
    } else {
      console.log(value.length);
      let pageNo = document.querySelector(".page-item.active").textContent;
      console.log(pageNo);
      pageNo = Number(pageNo);
      console.log(pageNo);
      totalPages = Math.ceil(props.movies.results.length / 4);

      let fp = (pageNo - 1) * 4;
      let lp = fp + (4 - 1);
      console.log(totalPages, fp, lp);
      moviesList = props.movies.results.slice(fp, lp + 1);
      setMovies(moviesList);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="myNav" aria-label="...">
            <ul className="pagination pagination-sm">
              {arr.map((pageNo) => {
                return (
                  <li
                    className={pageNo == 0 ? "page-item active" : "page-item"}
                  >
                    <a
                      id={`${pageNo + 1}`}
                      className="page-link "
                      onClick={pagination}
                    >
                      {pageNo + 1}
                    </a>
                  </li>
                );
              })}
              {/* <li className="page-item active">
                <a id="1" className="page-link" onClick={pagination}>
                  1
                </a>
              </li>
              <li className="page-item">
                <a id="2" className="page-link" onClick={pagination}>
                  2
                </a>
              </li> */}
            </ul>
            <div>
              <input
                type={"search"}
                value={value}
                onChange={handleInput}
              ></input>
            </div>
            <button className="btn btn-outline-primary" onClick={handleSearch} style={{display:"inline-block"}}>click</button>
          </nav>

          {/* {    console.log(movies)} */}
          {/* <div className="container"> */}
            {/* <div className="row"> */}
              {/* <div className="col"> */}
                  <div className="bigBox">

                {movies &&
                  movies.map((item) => {
                      return (
                          <>
                        <MovieSummary
                          singleMovie={item}
                          key={item.uuid}
                          ></MovieSummary>
                      </>
                    );
                })}
                </div>
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
