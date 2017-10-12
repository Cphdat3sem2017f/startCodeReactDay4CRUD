import React, { Component } from 'react';
import '../styles/App.css';
import AddEditPerson from "./AddEditPerson"
import AllPersons from "./AllPersons"

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ margin: 20, width: "70%" }}>
        <h3>CRUD Demo </h3>
        <div className="row">
          <div className="col-md-6">
            <h3>All Persons</h3>
            <AllPersons facade={this.props.facade} />
          </div>
          <div className="col-md-6" >
            <h3 style={{textAlign:"center"}}>Add Persons</h3>
            <AddEditPerson facade={this.props.facade} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
