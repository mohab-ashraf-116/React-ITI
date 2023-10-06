import { Component, Fragment } from "react";
import Home from "./components/Home/home";
import Parent from "./components/Parent/Parent";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Home>Omar Gamal</Home>
        <Parent></Parent>
      </Fragment>
    );
  }
}
export default App;
