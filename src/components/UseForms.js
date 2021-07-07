import React, { Component } from 'react'
//this is a class component
class UseForms extends Component {


//initialize the state
constructor(props){
   super(props)
   this.state = {
        name : "",
        address : "",
   }
    //bind with state object
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
  
//this is to handle change
handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    });
    console.log(this.state);
}

//this is to handle submit
handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted name is ${this.state.name}, submitted address is ${this.state.address}`)
    this.setState({
        name : "",
        address : "",
    });

}

  //use form here
  render() {
      return(
        <div>
         <h1>Form Demo</h1>
         <form onSubmit = {this.handleSubmit}>
         <input type = "text" placeholder = "Enter name" name = "name"  value = {this.state.name} onChange = {this.handleChange} />
         <br/> <br/>
         <input type = "text" placeholder = "Enter Address" name = "address" value = {this.state.address} onChange = {this.handleChange}   />
         <br/>
         <br/>
         <button type = "submit">Create alert</button>
         </form>
        </div> 
      )
  }
 
}



export default UseForms;