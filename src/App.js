import React, { Component } from "react";
import Header from "./Header.js";
import Main from './Main.js'
import Footer from "./Footer.js";
import Ingredients from "./Ingredient-List.js";
import './recipe.css'


class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Main />
      <Ingredients />
      <Footer />
      </>
    );
  }
}

export default App;
