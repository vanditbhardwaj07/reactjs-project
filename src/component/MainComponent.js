import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetails from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish : null
    };
  }

  onDishSelect(dishId) {

        this.setState({ selectDish: dishId });
    }


  render() {
    return (
      <div>
        <Header></Header>
        <Menu dishes={this.state.dishes} 
            onClick={(dishId) => this.onDishSelect(dishId)}
        />  
        <Dishdetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectDish)[0]} />
        <Footer/>
      </div>                           
    );
  }

}

export default Main;
