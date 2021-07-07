import React, { Component } from 'react'
//import firebase
import firebase, {auth, provider} from '../firebase.js';
//this is a class component
class UseFirebase extends Component {


//initialize the state
constructor(props){
   super(props)
   this.state = {
        name : "",
        address : "",
        items: []
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

    //create a reference to the realtime database
    const itemsRef = firebase.database().ref('users');
        const item = {
            name: this.state.name,
            address: this.state.address,    
        }
        itemsRef.push(item);
    
    //restore the state
    this.setState({
        name : "",
        address : "",
    });

}
componentDidMount() {
 //extract items from our firebase database
    const itemsRef = firebase.database().ref('users');
    itemsRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState = [];
        for (let item in items) {
            newState.push({
                id: item,
                name: items[item].name,
                address: items[item].address
            });
        }
        this.setState({
            items: newState
        });
    });
}

  //use form here
  render() {
      return(
        <div>
         <h1>Firebase Demo</h1>
         <form onSubmit = {this.handleSubmit}>
         <input type = "text" placeholder = "Enter name" name = "name"  value = {this.state.name} onChange = {this.handleChange} />
         <br/> <br/>
         <input type = "text" placeholder = "Enter Address" name = "address" value = {this.state.address} onChange = {this.handleChange}   />
         <br/>
         <br/>
         <button type = "submit">Create contact</button>
         </form>
        
          <div>
              {
                  //map over our items returned from firebase
                  this.state.items.map((item) => {
                      return(
                        <div key = {item.id}>
                            <hr/>
                            <p>Name: {item.name}</p>
                            <p>Address: {item.address}</p>
                            <hr/>
                        </div>
                      );
                  })
              }
          </div>
        </div> 
      )
  }
 
}



export default UseFirebase;