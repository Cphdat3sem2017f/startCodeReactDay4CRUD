import React, {Component}  from "react"

export default class AllPersons extends Component {
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