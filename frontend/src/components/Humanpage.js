import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const rasync = require("react-async");

export default class Humanpage extends Component {
  length = 121;

  constructor(props) {
    super(props);
    this.state = {
      image_index: 0,
      selected_user: "User1",
      selected_session: "1min",
      lengths: {
        "1min": {
          'User1': 36, 'User2': 39, 'User3': 47, 'User4': 42, 'User5': 33, 'User6': 43, 'User7': 36, 'User8': 52, 'User9': 56, 'User10': 36, 'User11': 35, 'User12': 37, 'User13': 42, 'User14': 50, 'User15': 42, 'User16': 46, 'User17': 39, 'User18': 32, 'User19': 69, 'User20': 53, 'User21': 59, 'User22': 27, 'User23': 31, 'User24': 59, 'User25': 66, 'User26': 62, 'User27': 35, 'User28': 29, 'User29': 48, 'User30': 28, 'User31': 40, 'User32': 51, 'User33': 52, 'User34': 62, 'User35': 50, 'User36': 33, 'User37': 33, 'User38': 61, 'User39': 43, 'User40': 53, 'User41': 43, 'User42': 30, 'User43': 47, 'User44': 39, 'User45': 47, 'User46': 46, 'User47': 24, 'User48': 24, 'User49': 31, 'User50': 57, 'User51': 25, 'User52': 46, 'User53': 37, 'User54': 24, 'User55': 16, 'User56': 39, 'User57': 59, 'User58': 17, 'User59': 47, 'User60': 41, 'User61': 46, 'User62': 40, 'User63': 50, 'User64': 44, 'User65': 35, 'User66': 42, 'User67': 46, 'User68': 50, 'User69': 55, 'User70': 51, 'User71': 51, 'User72': 41, 'User73': 60, 'User74': 56, 'User75': 29, 'User76': 44, 'User77': 40, 'User78': 54, 'User79': 34, 'User80': 20, 'User81': 50, 'User82': 25, 'User83': 44, 'User84': 61, 'User85': 48, 'User86': 33, 'User87': 32, 'User88': 45, 'User89': 52, 'User90': 54, 'User91': 49, 'User92': 44, 'User93': 53, 'User94': 37, 'User95': 40, 'User96': 47, 'User97': 26, 'User98': 42, 'User99': 34, 'User100': 59, 'User101': 21, 'User102': 50, 'User103': 52, 'User104': 43, 'User105': 53, 'User106': 24, 'User107': 39, 'User108': 44, 'User109': 44, 'User110': 29, 'User111': 41, 'User112': 43, 'User113': 36, 'User114': 31, 'User115': 37, 'User116': 38, 'User117': 34, 'User118': 37, 'User119': 37, 'User120': 30
        },
        "3min": {
          'User1': 106, 'User2': 92, 'User3': 149, 'User4': 114, 'User5': 115, 'User6': 144, 'User7': 105, 'User8': 146, 'User9': 110, 'User10': 170, 'User11': 119, 'User12': 126, 'User13': 114, 'User14': 144, 'User15': 177, 'User16': 165, 'User17': 141, 'User18': 90, 'User19': 216, 'User20': 145, 'User21': 178, 'User22': 113, 'User23': 128, 'User24': 160, 'User25': 180, 'User26': 189, 'User27': 100, 'User28': 147, 'User29': 147, 'User30': 103, 'User31': 111, 'User32': 168, 'User33': 146, 'User34': 194, 'User35': 143, 'User36': 148, 'User37': 132, 'User38': 187, 'User39': 97, 'User40': 193, 'User41': 133, 'User42': 143, 'User43': 156, 'User44': 134, 'User45': 129, 'User46': 95, 'User47': 105, 'User48': 131, 'User49': 67, 'User50': 154, 'User51': 94,'User52': 107, 'User53': 143, 'User54': 101, 'User55': 72, 'User56': 155, 'User57': 144, 'User58': 72, 'User59': 164, 'User60': 84, 'User61': 140, 'User62': 136, 'User63': 134, 'User64': 179, 'User65': 114, 'User66': 123, 'User67': 144, 'User68': 133, 'User69': 148, 'User70': 141, 'User71': 133, 'User72': 108, 'User73': 196, 'User74': 190, 'User75': 93, 'User76': 148, 'User77': 137, 'User78': 160, 'User79': 79, 'User80': 122, 'User81': 152, 'User82': 138, 'User83': 124, 'User84': 153, 'User85': 168, 'User86': 149, 'User87': 157, 'User88': 118, 'User89': 112, 'User90': 170, 'User91': 146, 'User92': 123, 'User93': 113, 'User94': 94, 'User95': 152, 'User96': 178, 'User97': 98, 'User98': 102, 'User99': 92, 'User100': 184, 'User101': 23, 'User102': 146, 'User103': 191, 'User104': 124, 'User105': 130, 'User106': 109, 'User107': 98, 'User108': 127, 'User109': 115, 'User110': 124, 'User111': 148, 'User112': 128, 'User113': 76, 'User114': 108, 'User115': 119, 'User116': 100, 'User117': 126, 'User118': 119, 'User119': 141, 'User120': 83
        }
      }
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
      image_index: (this.state.image_index - 1 + this.state.lengths[this.state.selected_session][this.state.selected_user]) % this.state.lengths[this.state.selected_session][this.state.selected_user],
    });
  }

  handleNextButtonClick() {
    this.setState({
      image_index: (this.state.image_index + 1) % this.state.lengths[this.state.selected_session][this.state.selected_user],
    });
  }

  handleLastButtonClick() {
    this.setState({
      image_index: this.state.lengths[this.state.selected_session][this.state.selected_user] - 1,
    });
  }

  handleUserSelected(e) {
    this.setState({
      selected_user: e.target.value,
      image_index: 0,
    });
  }

  handleSessionSelected(e) {
    this.setState({
      selected_session: e.target.value,
      image_index: 0,
    });
  }

  render() {
    const users = [];
    let image_source = "../../static/images/JustTrajDxDy/";

    for (let index = 1; index < this.length; index++) {
      let userIndex = "User" + index;
      users.push(userIndex);
    }

    return (
      <div class="container">
        <div class="user-select">
          <label>
            Pick a user:
            <select onChange={this.handleUserSelected}>
              {/* <option selected value="User1">
                User1
              </option> */}
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
        <div class="change-div">
          <label>Switch to:</label>
          <Button variant="contained" color="primary" to="/bezier" component={Link}>Bézier</Button>
        </div>
      </div>
    );
  }
}
