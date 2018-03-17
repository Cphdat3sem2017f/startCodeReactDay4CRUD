import React from "react"

export default function AllPersons(props) {
  const { persons } = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      <p>Please make me show all persons here in the table</p>
      <p>And update me when new are added </p>
    </div>
  )
}
