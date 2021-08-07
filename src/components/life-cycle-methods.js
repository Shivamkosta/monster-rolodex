import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(){
        super();
        this.state = {
            string: 'Hello! shivam'
        }
    }
    render() {
        return (
            <div>
                <p>{this.state.string}</p>
                <button onClick={()=> this.setState({string:'Hey! How are you ?'})}>Change Text</button>
            </div>
        )
    }
}
