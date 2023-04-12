import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "@fontsource/playfair-display";

//Screens
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";

export class App extends React.Component {
  componentDidMount() {
    window.scrollTo(1, 1);
  }
  render() {
    return (
      <>
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
