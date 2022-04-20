//rcc irtunk be es az elso
// https://reactjs.org/docs/hooks-state.html  ez alapjan
//setState metodus aert kell h a DOM tudja h ujra kell renderelnie
import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {//itt adunk egy state kulcsot 
            key1: "This is the default state of a class component",
            key2: 0
        } 
    }
    render() {
        return (
        <div>{this.state.key1}
        <button onClick={() => this.setState({key1: "Class component clicked"})}>Click to update</button>
        <button onClick={() => this.setState({key2: 1})}>{this.state.key2}</button>
        </div>
        )
    }
}

export default ButtonWithClass
