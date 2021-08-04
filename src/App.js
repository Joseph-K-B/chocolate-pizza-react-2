import React, { Component } from "react";
import Header from "./Header.js";
import Main from './Main.js'
import Footer from "./Footer.js";
import Recipe from "./Ingredient-List.js";
class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Main />
      <Recipe />
      <Footer />
      </>
    );
  }
}

export default App;
