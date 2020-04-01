import React from 'react';
import "./index.css"
import {NavBar} from '../navbar'

class Greetings extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            userInputText : "",
            displayName : ""
        }
        
    }
    handleUserInput = (event) =>
    {
        this.setState({userInputText:event.target.value})
    }
    handleSubmit = (event) =>
    {
        this.setState({
            displayName : this.state.userInputText,
            userInputText : ""
        })
        event.preventDefault();
    }
    displayMessage = ()=>
    {
        if(this.state.displayName.trim() !=="" )
            return <p className="display-name">Hello {this.state.displayName}, have a nice day!</p>
        return null
    }
    
    render()
    {
        return(<div>
            <NavBar title="Greetings"/>
            <div className="greetings-container">
                <form className="greetings-form">
                    
                        <input className="name-field" type="text" onChange ={this.handleUserInput} value={this.state.userInputText} placeholder="Enter the name"/>
                        <button className="submit-btn" type="submit" onClick={this.handleSubmit}>Greet</button>
                </form>
                {this.displayMessage()}
            </div>
        </div>
        );
    }
}
export {Greetings}