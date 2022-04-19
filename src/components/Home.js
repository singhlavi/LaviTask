import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
    return(
      <header className="main_header">
          <h1>
              Welcome to the form
          </h1>
          <p>crud using redux-saga</p>
      </header>
    )
}
export default Home;