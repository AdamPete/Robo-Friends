import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robot } from './robot';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: robot,
      searchfield: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterRobots = this.state.robot.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robot={filterRobots} />;
      </div>
    );
  }
}

export default App;
