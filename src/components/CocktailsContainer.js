import React, { Component } from "react";
import CocktailsList from "./CocktailsList";
import CocktailDisplay from "./CocktailDisplay";
import Form from "./Form";

class CocktailsContainer extends Component {
  state = {
    cocktails: [],
    clickedDrink: null,
    viewTitles: true
  };

  componentDidMount() {
    fetch("https://react-boozer-backend.herokuapp.com/api/v1/cocktails")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          cocktails: data
        })
      );
  }

  getDrinkid = event => {
    fetch(
      `https://react-boozer-backend.herokuapp.com/api/v1/cocktails/${
        event.target.id
      }`
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState(
          {
            clickedDrink: data
          },
          () => {
            this.viewDrink();
          }
        )
      );
  };

  viewDrink = () => {
    this.setState({
      viewTitles: !this.state.viewTitles
    });
  };

  addNewCocktail = event => {
    event.preventDefault();
    let data = {
      name: "1",
      description: "2",
      instructions: "3",
      source: "4",
      proportions: [{ amount: "thing" }, { name: "thing2" }]
    };
    console.log(data);
    fetch("https://react-boozer-backend.herokuapp.com/api/v1/cocktails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  render() {
    console.log(this.state.clickedDrink);
    return (
      <div>
        {/* <div className="container">
          {this.state.viewTitles ? (
            this.state.cocktails.map(drink => {
              return (
                <CocktailsList
                  key={drink.id}
                  drink={drink}
                  getDrinkid={this.getDrinkid}
                />
              );
            })
          ) : (
            <CocktailDisplay
              viewDrink={this.viewDrink}
              drink={this.state.clickedDrink}
            />
          )}
        </div> */}
        <div className="form">
          <Form addNewCocktail={this.addNewCocktail} />
        </div>
      </div>
    );
  }
}

export default CocktailsContainer;
