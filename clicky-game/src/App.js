import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Counter from "./components/Counter";
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends, 
    score: 0,
    highScore: 0,
   newFriend: []
  };


  newGame = id => {

    const friends = this.state.friends.sort(friend => friend.id !== id);

    this.setState({ friends });

    this.setState({ score: this.state.score + 1 });
    


    if (this.state.score >= this.state.highScore) {
      this.setState({ highScore: this.state.highScore + 1 });

    }


    this.setState({
      newFriend: this.state.newFriend.concat(id)
    }, () => console.log(this.state.newFriend));

    if (this.state.newFriend.find((e) => e === id)) {

      this.setState(state => ({ score: state.score = 0 }));
      this.setState(state => ({ newFriend: state.newFriend = [] }));
    }

  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Counter
          score={this.state.score}
          highScore={this.state.highScore} />

        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
          
            id={friend.id}
            key={friend.id}
            newGame={this.newGame}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
