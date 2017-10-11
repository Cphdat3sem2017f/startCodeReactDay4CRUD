import React, { Component } from 'react';
import './App.css';

class AllPersons extends Component {
  constructor(props) {
    super(props);
    this.state = { persons: [] }
  }

  personUpdater = (data) => {
    this.setState({ persons: data });
  }

  componentDidMount() {
    //Make sure you understand this part
    const facade = this.props.facade;
    facade.setPersonsObserver(this.personUpdater);
  }
  render() {
    return (
      <div>
        <table className="table">
        </table>
        <p>Please make me show all persons here in a table</p>
        <p>And update me when new are added </p>
      </div>
    )
  }
}

class AddEditPerson extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Please provide me with input fields to create new persons</p>
        <p>And update the backend when submitted</p>
      </div>
    )
  }
}

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
            < AllPersons facade={this.props.facade} />
          </div>
          <div className="col-md-6" />
          <AddEditPerson facade={this.props.facade} />
        </div>

      </div>
    );
  }
}

export default App;
