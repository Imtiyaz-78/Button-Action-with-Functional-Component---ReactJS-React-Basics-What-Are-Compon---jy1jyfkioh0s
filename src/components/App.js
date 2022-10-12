import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
    super(props);
    
    this.state = {flag:false}
	};

  clickHandler(){
    this.setState({flag:true})
    console.log("click");
    
  }
    render() {
    	return(
    		<div id="main">
        { /* Do not remove this main div!! */ }
        {this.state.flag && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
</p>}
        <button id="click" onClick={()=>this.clickHandler()} >click</button>
    		</div>
    	);
    }
}


export default App;
