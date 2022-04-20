//rcc irtunk be es az elso
import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {//itt adunk egy state kulcsot 
            key1: "This is the default state of a class component",
            key2: "asd"
        } 
    }
    render() {
        return (
        <div>{this.state.key1}
        <button onClick={() => this.setState({key1: "Class component clicked"})}>Click to update</button>
        </div>
        )
    }
}

export default ButtonWithClass
