import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { connect } from 'react-redux';
import { getData } from './actions/';
import  QueryData  from './components/QueryData';
//import { bindActionCreators } from 'redux';

const CardDisplay = (props) => {
  return(
    props.data.map((data, index) => (
      <Card key={index} data={data} />
    )
  ))
}

class Home extends Component {


  constructor(props){
    super(props);

    //this.props.getData();
  }

  componentDidMount(){
    this.props.getData();
  }

  render(){
  return (
    <div style={{ padding: 20 }}> 
    <QueryData description={this.props.match.params.description}/>
    <br />
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', background: '#d3d3d3'}}>
        <CardDisplay data={this.props.data}/>
      </div>
    </div>
    
  );
}
}

  const mapDispatchToProps = dispatch => {
    return{
      getData: () => dispatch(getData())
    }
  }

  const mapStateToProps = state => {
    console.log("State: ", state)
  return{
    data: state.data
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);