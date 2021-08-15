import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";

let initialState = {};
export default function Login() {
  const [state, setstate] = useState(initialState);
  const [error, setError] = useState(true)
  // console.log("8");
  let handleInput = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    setstate({
      ...state,
      [id]: value,
    });
    console.log(state); //it will run first then state will change
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    // document.getElementById("btn").disabled = true;
    // console.log(state);
    if(state){
        let response = await fetchApi(state);
        console.log("response",response);
        setError(response)
        setstate({});

    }
    // document.getElementById("btn").disabled = false;

  };

  let login = JSON.parse(localStorage.getItem("login"));

  if (login) {
      return <Redirect to="/"></Redirect>
  } else {
      
let showError=()=>{
 setTimeout(() => {
     document.getElementById("error").innerHTML="error"
 }, 1000);

 setTimeout(() => {
    document.getElementById("error").innerHTML=""
    setError(true)
}, 5000);

}
console.log(state);
  return (
      
    <div className="container">
      <div className="row">
        <div className="col m5">
          {/* {console.log(state)} */}
          <form >
            <div className="form-group">
              <label for="username">username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={handleInput}
                value={state.username ? state.username : ""}
                required
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={handleInput}
                value={state.password ? state.password : ""}
                required
              />
            </div>
            <div id="error"></div>
            
{
    !error?showError():console.log("not")
}

            <button type="submit" id="btn" className="btn btn-primary" disabled ={Object.keys(state).length === 0?true:false} onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

}

async function fetchApi(state) {

try{
    let p1 = await fetch("https://demo.credy.in/api/v1/usermodule/login/", {
        method: "Post",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
        },
      });
     
      console.log(p1);
     
      let p2 = await p1.json();
     
      console.log(p2.is_success);

    if (p2.is_success) {
        localStorage.setItem(
            "login",
            JSON.stringify({
              login: true,
              Token: p2.data.token,
            })
          );

          return true
    }else{
        return false
    }
     
     
}catch(err){
    console.log(err.message);
    return err

}


}





