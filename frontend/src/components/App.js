import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./Homepage";

// const express = require("express");
// const app = express();
// app.use(express.static('public'));

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Homepage></Homepage>
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);