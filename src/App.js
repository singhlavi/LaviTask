import * as React from 'react';

import Grid from "@mui/material/Grid"
import { Provider } from "react-redux"
import AddForm from "./components/AddForm"
import EditForm from "./components/EditForm"
import MyTable from "./components/MyTable"
import store from './store'
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";



const App = () => {


    return (

        <Provider store={store}>
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/MyTable">
                        <MyTable />
                    </Route>
                    <Route exact path="/AddForm">
                        <AddForm />
                    </Route>
                    <Route exact path="/EditForm/:id">
                        <EditForm />
                    </Route>
                </Switch>
            </Router>

        </Provider>

    );
};
export default App;