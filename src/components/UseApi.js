import React, { Component } from 'react'
//this is a class component
class UseApi extends Component {

//initialize the state
  state = {
        contacts: []
   }

//fetch on component mount
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  //map over response objects
  render() {
      return(
        <div>
        <center><h1>Contact List</h1></center>
        {this.state.contacts.map((contact) => (
          <div >
            <div>
              <h5>{contact.name}</h5>
              <h6>{contact.email}</h6>
              <p>{contact.company.catchPhrase}</p>
            </div>
            <hr/>
          </div>
        ))}
      </div>
      )
  }
 
}



export default UseApi;