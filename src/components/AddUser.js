import React, { Component } from "react";

class AddUser extends Component {
  state = {
    name: "",
    email: "",
  };
  showErrorText = false;
  onNameChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onEmailChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onAddSubmit(e) {
    const { addUser } = this.props;
    const { name, email } = this.state;

    if (name === "" || email === "") {
      this.showErrorText = true;
    } else {
      const newUser = {
        id: Number(Math.random() * 9999).toFixed(0) + 1,
        name: name,
        email: email,
      };
      addUser(newUser);
      this.showErrorText = false;
    }
    e.preventDefault();
  }
  render() {
    const { name, email } = this.state;
    return (
      <div className="card">
        <h4 className="card-header">Add New User</h4>
        <div className="card-body">
          <form onSubmit={this.onAddSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                placeholder="Input name"
                value={name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="text"
                id="email"
                name="email"
                placeholder="Input email"
                value={email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <div className="d-grid form-group">
              <button type="submit" className="btn btn-outline-danger">
                Add New User
              </button>
              {this.showErrorText && (
                <div className="p-1 text-center  text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">
                  You must fill all fields
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddUser;
