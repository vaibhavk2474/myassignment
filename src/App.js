import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./component/Login";
import Movies from "./component/movies/Movies";
import Navbar from "./component/Navbar";
import "../src/Switcher.scss";
// try to do fully comments
function App() {
  let handleTheme = (e) => {
    console.log(e.target.id);
    document.querySelector(".App").className = `App ${e.target.id}`;
  };
  return (
    <div className="App theme-light ">
      <Navbar handleTheme={handleTheme}></Navbar>
      <div className="myContainer" >
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Movies}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
