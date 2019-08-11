import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
//import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';


class App extends Component {


  constructor(props){
    super(props);

    //this.props.getData();
  }
  render(){

    //console.log("Data: " + this.props.data)
    //console.log("Match: ", this.props.match)
    
  return (
    <div style={{ padding: 20 }}> 
     <Router> 
      <div>
         <NavBar />
         <Switch>
          <Route path="/"  exact component={Home}/> 
          <Route path="/:description"  component={Home}/> 
        </Switch>
      </div>
     </Router>
      <br />
    
    </div>
    
  );
}
}



export default App;
