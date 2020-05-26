import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";
import EventLists from './pages/events/List';
import EventBooking from './pages/events/Book';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/events">
                    <EventLists />
                </Route>
                <Route path="/event/:id">
                    <EventBooking />
                </Route>
                <Route path="/">
                    <Redirect to="/events" />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;