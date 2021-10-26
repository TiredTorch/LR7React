import { Component } from "react";
var arr = ["Yes","No", "Perhaps","Maybe","Sometimes"];

export default class Ball extends Component{
    Say(){
        document.getElementById('text').innerHTML = arr[
            Math.floor(Math.random()*arr.length)
        ];
        document.getElementById('yours').value = '';
    }

    render(){
        return(
            <button className="ball" onClick={this.Say.bind(this)}>
            <div className="ball__text">
                <div className="text" id="text">
                    Your prediction
                </div>
            </div>
            </button>
        )
    }
} 
