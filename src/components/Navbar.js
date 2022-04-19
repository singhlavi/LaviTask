import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { Container } from '@mui/material';

const Navbar = () => {


    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar >
                       <div className='Home'> <NavLink to="/">Home</NavLink></div>
                       <div className='add'> <NavLink to="/MyForm">User Add</NavLink></div>
                        <div className='list'><NavLink to="/MyTable">All User</NavLink></div>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
};
export default Navbar;