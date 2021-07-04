import React, { Component } from 'react';
import Humanpage from './Humanpage';
import Bezierpage from './Bezierpage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
                                Would you like to review Human mouse dynamics, or compare them with Bézier based mouse dynamics?
                                </Typography>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    to="/trajectory" component={Link}>
                                    Human
                                </Button>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    to="/bezier" component={Link}>
                                    Bézier
                                </Button>
                            </Grid>
                        </Grid>
                    </Route>
                    <Route path="/trajectory" component={Humanpage} />
                    <Route path="/bezier" component={Bezierpage} />
                </Switch>
            </Router>
        );
    }
}