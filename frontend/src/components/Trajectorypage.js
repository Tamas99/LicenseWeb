import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class Trajectorypage extends Component {
  length = 121;
  

  constructor(props) {
    super(props);
    this.state = {
      image_index: 0,
      selected_user: "User1",
      selected_session: "1min",
    };
    this.handleFirstButtonClick = this.handleFirstButtonClick.bind(this);
    this.handlePrevButtonClick = this.handlePrevButtonClick.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handleLastButtonClick = this.handleLastButtonClick.bind(this);
    this.handleUserSelected = this.handleUserSelected.bind(this);
    this.handleSessionSelected = this.handleSessionSelected.bind(this);
  }

  handleFirstButtonClick() {
    this.setState({
      image_index: 0,
    });
  }

  handlePrevButtonClick() {
    this.setState({
      image_index: (this.state.image_index - 1 + 15) % 15,
    });
  }

  handleNextButtonClick() {
    this.setState({
      image_index: (this.state.image_index + 1) % 15,
    });
  }

  handleLastButtonClick() {
    this.setState({
      image_index: 14,
    });
  }

  handleUserSelected(e) {
    this.setState({
      selected_user: e.target.value,
    });
  }

  handleSessionSelected(e) {
    this.setState({
      selected_session: e.target.value,
    });
  }

  render() {
    const users = [];
    let image_source = "../../static/images/JustTrajDxDy/";

    for (let index = 2; index < this.length; index++) {
      let userIndex = "User" + index;
      users.push(userIndex);
    }

    return (
      <div class="container">
        <div class="user-select">
          <label>
            Pick a user:
            <select onChange={this.handleUserSelected}>
              <option selected value="1">
                User1
              </option>
              {users.map((value, index) => {
                return <option value={value}>{value}</option>;
              })}
            </select>
          </label>
        </div>

        <div class="session-select">
          <label>
            Pick a session:
            <select onChange={this.handleSessionSelected}>
              <option selected value="1min">
                1 minute
              </option>
              <option value="3min">3 minute</option>
            </select>
          </label>
        </div>

        {/* Images */}
        <div class="trajectory">
          <img
            src={
              image_source +
              this.state.selected_user +
              "/" +
              this.state.selected_session +
              "/tr/" +
              this.state.image_index +
              ".png"
            }
            title="Trajectory"
          ></img>
        </div>
        <div class="dx">
          <img
            src={
              image_source +
              this.state.selected_user +
              "/" +
              this.state.selected_session +
              "/dx/" +
              this.state.image_index +
              ".png"
            }
            title="dx"
          ></img>
        </div>
        <div class="dy">
          <img
            src={
              image_source +
              this.state.selected_user +
              "/" +
              this.state.selected_session +
              "/dy/" +
              this.state.image_index +
              ".png"
            }
            title="dy"
          ></img>
        </div>
        {/* Buttons */}
        <div class="buttons">
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={this.handleFirstButtonClick}
          >
            {"<<"}
          </Button>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={this.handlePrevButtonClick}
          >
            {"<"}
          </Button>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={this.handleNextButtonClick}
          >
            {">"}
          </Button>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={this.handleLastButtonClick}
          >
            {">>"}
          </Button>
        </div>
        <Button variant="contained" color="primary" to="/bezier" component={Link}>Bézier</Button>
      </div>
    );
  }
}
