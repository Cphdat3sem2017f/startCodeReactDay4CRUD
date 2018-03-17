import React, { Component } from 'react';
import '../styles/App.css';
import AddEditPerson from "./AddEditPerson"
import AllPersons from "./AllPersons"

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {persons: []}
  }

  componentDidMount() {
    //This would be the perfect place to fetch persons from the API
  }

  render() {
    return (
      <div style={{ margin: 20, width: "70%" }}>
        <h3>CRUD Demo </h3>
        <div className="row">
          <div className="col-md-6">
            <h3>All Persons</h3>
            <AllPersons persons={this.state.persons} />
          </div>
          <div className="col-md-6" >
            <h3 style={{textAlign:"center"}}>Add Persons</h3>
            <AddEditPerson />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
