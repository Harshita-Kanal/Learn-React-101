import './App.css';
import Todo from './components/Todo'
import UseApi from './components/UseApi';
import UseForms from './components/UseForms';
import UseFirebase from './components/UseFirebase';
import {BrowserRouter} from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import About from './components/pages/About'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'


function App() {
  return (
    <div className="App">
     <h1>Hello, welcome to react</h1>
     <Todo name = "Harshita"/>
     <Todo name = "xyz"/>

     {/* <UseApi/> */}
     {/* <UseForms/> */}
     {/* <UseFirebase /> */}

     {/* <BrowserRouter>
        <Switch>
        <Route
          path="/contact"
            component={Contact}
          exact
        />
        <Route
          path="/about"
            component={About}
        />
  
        <Route
            path=""
            component={Home}
        />

        </Switch>
    </BrowserRouter> */}
     
    </div>
  );
}

export default App;
