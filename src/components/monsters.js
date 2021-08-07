import React, { Component } from 'react'

export default class Monsters extends Component {
  constructor(){
    super();

    // this.state = {
    //   monsters: [
    //     {
    //       name: 'Frankenstein',
    //       id: 'asc1'
    //     },
    //     {
    //       name: 'Dracula',
    //       id: 'asc2'
    //     },
    //     {
    //       name: 'Zombie',
    //       id: 'asc3'
    //     },
    //   ]
    // }

    this.state = {
        monsters: []
    }

  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState( {monsters:users}));
  }
  
  render() {
    return (
          <div className="">
            {this.state.monsters.map(monster => 
            <h1 key={monster.id}>{ monster.name }</h1>
            )}
          </div>
        );
  }
}

