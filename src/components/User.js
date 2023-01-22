import React, { Component } from "react";

class User extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.onDeleteClick = this.onDeleteClick.bind(this);
  //   }
  onDeleteClick(id, e) {
    const { deleteUser } = this.props;
    deleteUser(id);
  }
  render() {
    const { id, name, email } = this.props;
    return (
      <tr>
        <td> {id}</td>
        <td> {name}</td>
        <td> {email}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={this.onDeleteClick.bind(this, id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default User;
