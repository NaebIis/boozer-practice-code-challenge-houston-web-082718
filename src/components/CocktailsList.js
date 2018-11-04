import React, { Component } from "react";
// import Cocktail from "./Cocktail";

class CocktailsList extends Component {
  render() {
    return (
      <div id="cocktail-list">
        <p id={this.props.drink.id} onClick={this.props.getDrinkid}>
          {this.props.drink.name}
        </p>
      </div>
    );
  }
}

export default CocktailsList;
