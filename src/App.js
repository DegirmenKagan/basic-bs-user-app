import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
class App extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.state = {
      users: [
        {
          id: 1,
          name: "Ali",
          email: "ali@someemail.com",
        },
        {
          id: 2,
          name: "Ahmet",
          email: "ahmet@someemail.com",
        },
        {
          id: 3,
          name: "Peri",
          email: "peri@someemail.com",
        },
      ],
    };
  }
  addUser(newUser) {
    let updatedUsers = this.state.users;

    updatedUsers.push(newUser);
    this.setState({
      users: updatedUsers,
    });
  }
  deleteUser(id) {
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter((user) => user.id !== id);
    // States are Direct Immutable
    this.setState({ users: updatedUsers });
  }

  render() {
    return (
      <div className="container">
        <h4>User App</h4>
        <hr />
        <AddUser addUser={this.addUser} />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}

export default App;
