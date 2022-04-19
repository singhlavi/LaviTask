import * as React from 'react';

import Grid from "@mui/material/Grid"
import { Provider } from "react-redux"
import MyForm from "./components/MyForm"
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
                    <Route exact path="/MyForm">
                        <MyForm />
                    </Route>
                    <Route exact path="/MyForm/:id">
                        <MyForm />
                    </Route>
                </Switch>
            </Router>

        </Provider>

    );
};
export default App;