import React, { Component, createRef } from 'react';
import Otherpage from './Otherpage';
import Trajectorypage from './Trajectorypage';
import Bezierpage from './Bezierpage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Checkbox } from '@material-ui/core';
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class Homepage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Grid container spacing={4}>
                            <Grid item xs={12} align="center">
                                <Typography component="h4" variant="h4">
                                    Welcome, this is the homepage
                                </Typography>
                                <Typography component="h4" variant="h4">
                                    Please select what you want to see
                                </Typography>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    to="/trajectory" component={Link}>
                                    Trajectories
                                </Button>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    to="/bezier" component={Link}>
                                    Compared with Bézier
                                </Button>
                            </Grid>
                        </Grid>
                    </Route>
                    <Route path="/trajectory" component={Trajectorypage} />
                    <Route path="/bezier" component={Bezierpage} />
                </Switch>
            </Router>
        );
    }
}