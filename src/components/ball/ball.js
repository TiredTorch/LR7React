import { Component } from "react";
var arr = ["Yes","No", "Perhaps","Maybe","Sometimes"];

export default class Ball extends Component{
    Say(){
        if(document.getElementById('yours').value == ''){   
            document.getElementById('text').innerHTML = "SAY YOUR QUESTION!";
        } else{
            document.getElementById('text').innerHTML = arr[
                Math.floor(Math.random()*arr.length)
            ];
        }
        document.getElementById('yours').value = '';
    }

    render(){
        return(
            <button className="ball" onClick={this.Say}>
            <span className="ball__text">
                <span className="text" id="text">
                    Your prediction
                </span>
            </span>
            </button>
        )
    }
} 