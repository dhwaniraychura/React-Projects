 import React from "react";
 class ClassComponentExample extends React.Component {
    constructor(){
        super();
        this.state = {value : 0}
    }
    render(){
        return(
            <>
                <h2>Class Compenent Example :</h2>
                <p>Count : {this.state.value}</p>
                <button onClick={() => this.setState({ value: this.state.value + 1})}>Increment</button>
                <button onClick={() => this.setState({ value: this.state.value - 1})}>Decrement</button>
            </>
        )
    }

}
export default ClassComponentExample;