import React from "react";

class CocktailDisplay extends React.Component {
  render() {
    return (
      <div id="cocktail-display">
        <h1>{this.props.drink.name}</h1>
        <h3>{this.props.drink.description}</h3>
        <p>{this.props.drink.instructions}</p>
        <br />
        <p>{this.props.drink.proportions[0].ingredient_name}</p>
        <p>{this.props.drink.proportions[0].amount}</p>
        <p>{this.props.drink.proportions[1].ingredient_name}</p>
        <p>{this.props.drink.proportions[1].amount}</p>
        <p>{this.props.drink.proportions[2].ingredient_name}</p>
        <p>{this.props.drink.proportions[2].amount}</p>
        {/* <p>{this.props.drink.proportions[3].ingredient_name}</p>
        <p>{this.props.drink.proportions[3].amount}</p> */}
        <button onClick={this.props.viewDrink}>Back</button>
      </div>
    );
  }
}

export default CocktailDisplay;

// ...this.props

// react-router-dom
