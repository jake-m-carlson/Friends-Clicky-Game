import React, { Component } from "react";
// import Footer from "./components/Footer";
import FriendCard from "./components/FriendCard";
// import logo from './logo.svg';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json"
// import './App.css';

class App extends Component {
  state = {
    friends
  };
  
  randomizeFriends = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  render() {
    return (
      <div>
        <Navbar/>
      <Wrapper>
      {this.state.friends.map(friend => (
        <FriendCard
          removeFriend={this.removeFriend}
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