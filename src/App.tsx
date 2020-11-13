import * as React from "react";
import { Fragment} from "react";
import { hot } from "react-hot-loader/root";
import Header from "./components/Header";
import NavBar from "./components/NavBar";


function App() {
  return(
  <Fragment>
    <NavBar/>
    <Header/>
  </Fragment>)
}
export default hot(App);
