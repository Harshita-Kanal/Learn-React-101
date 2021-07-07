import React, {useState} from 'react'
import './Todo.css'
function Todo(props) {
    //Initialize the state
   const [todos, setTodos] = useState([
        "Learn React"
    ])

  return (
    <div>
     <h1 className="xyz">Hello from todo component</h1>
     <h1>Hello {props.name} from todo component</h1>

      {/* Change the state here* */}
     <h1>Lets {todos}</h1>
     <button onClick = {() => setTodos("Try")}>Lets change the state</button>

    </div>
  );
}

export default Todo;
