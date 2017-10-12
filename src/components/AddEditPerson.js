import React, {Component} from "react"

export default class AddEditPerson extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-3">Id:</label>
            <div className="col-sm-9">
              <input className="form-control" readOnly id="id" name="id" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="name">Name:</label>
            <div className="col-sm-9">
              <input className="form-control" id="name" name="name" placeholder="Enter Name" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="age">Age:</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" name="age" id="age" placeholder="Enter age" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="email">Email:</label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="pwd">Gender:</label>
            <div className="col-sm-9">
              <input className="form-control" id="gender" name="gender" placeholder="Enter Gender" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
        <p>Please provide me with the ability to create new persons</p>
        <p>And update the backend when submitted</p>
      </div>
    )
  }
}