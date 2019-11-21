import React, { Component } from "react";
// import Footer from "./components/Footer";
import FriendCard from "./components/FriendCard";
// import logo from './logo.svg';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json"

class App extends Component {
  state = {
    friends
  };

  // componentDidMount lifecycle set
  componentDidMount() {
    this.setState({
      friends: this.shuffle(this.state.friends)
    }, () => {
      console.log("Game starts and images are shuffled!")
    });
  };

  clickedOn = id => {
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // this.setState({ friends });
    console.log(id);
  };
  
  // shuffle function needed, then page did load life stage, call shuffle function
  shuffle = (array) => {
    var indexCurrent = array.length, temporaryValue, randomIndex;
    while (0 !== indexCurrent) {
      randomIndex = Math.floor(Math.random() * indexCurrent);
      indexCurrent -= 1;
      temporaryValue = array[indexCurrent];
      array[indexCurrent] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    return (
      <div>
        <Navbar/>
      <Wrapper>
      {this.state.friends.map(friend => (
        <FriendCard
          clickedOn={this.clickedOn}
          id={friend.id}
          key={friend.id}
          image={friend.image}
          blurb={friend.blurb}
        />
      ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;