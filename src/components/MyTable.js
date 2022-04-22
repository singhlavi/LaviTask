import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { setUserSlice } from '../redux/slice/user';
import { deleteUserSlice } from '../redux/slice/users';
import Button from '@mui/material/Button';
import { DELETE_USER_BY_ID, GET_USERS } from '../redux/types';
import { ClassSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function MyTable() {
   
    const rows = useSelector(state => state.users)
    const dispatch = useDispatch()
    React.useEffect(() => dispatch({ type: GET_USERS }), [])

    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell align="right"><b>Email</b></TableCell>
                        <TableCell align="right"><b>Password</b></TableCell>
                       <TableCell align="right"><b>Edit</b></TableCell>
                        <TableCell align="right"><b>Delete</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                           
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.password}</TableCell>
                            <TableCell align="right">
                                <a href={`/EditForm/${row.id}`}> <Button  fullWidth variant="contained" className='btn'>Edit</Button></a>
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => dispatch({ type: DELETE_USER_BY_ID, id: row.id })} fullWidth variant="contained" className='btn'>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}