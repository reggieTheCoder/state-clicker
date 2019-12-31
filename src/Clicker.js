import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props) {
        super (props);
        // intialize the state of num to equal 1
        this.state= {num: 1};
        // bind the this keyword
        this.genRandom = this.genRandom.bind(this);
    }

    
    genRandom() {
        // pick random nunmber 1-10
        let rand = Math.floor(Math.random() * 10) + 1;
        // update state with new random number
        this.setState({num: rand});
    }
  
     render () {
        return (
            <div>
                {/*Display Number is:  and the current state of num */}
                <h1> Number is : {this.state.num}</h1>
                {/* If num is equal to 7 display "You Win!!!" inside of a h2 */}
                <button onClick={this.genRandom}>Click Me</button>
                {this.state.num === 7 && 
                <div> 
                    <h2>You Win!!!</h2>
                    <img src="https://media.giphy.com/media/LFiOdYoOlEKac/giphy.gif"/>
                </div> }
               
                {/* Click me button that displays that runs the function genRandom on click  */}
             
            </div>
      
        )
    }
}





export default Clicker;