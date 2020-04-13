import React from "react";

import {NavBar} from "../navbar";

class YourState extends React.Component{
    state = {
        selectedState : "",
        submittedState:""
    }
    handleSubmit = (e)=>
    {
        this.setState({submittedState:this.state.selectedState});
        e.preventDefault();
    }
    handleChangeState = (e)=>
    {
        this.setState({selectedState:e.target.value});
    }
    displayMessage = ()=>
    {
        if(this.state.submittedState !== "")
            return (<p>I am from "{this.state.submittedState}" state.</p>)
        return null;
    }
    
    
    render()
    {
        return(
            <div>
            <NavBar title="Your State"/>
            <select id="states" onChange={this.handleChangeState}>
            <option value="" disabled selected>Select your state</option>
            {this.props.stateList.map((state)=>
                <option value={state}>{state}</option>
            )}
            </select>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            {this.displayMessage()}
            </div>
        );
    }
}
export {YourState};