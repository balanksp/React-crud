import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Button,
    TextField,
} from '@mui/material';

const MyTable = () => {
    const [data, setData] = useState([]);
    const [newFamily, setNewFamily] = useState({
        id: '',
        FamilyName: '',
        memberName: '',
        Relation: ''
    });

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = () => {

        axios
            .get('http://localhost:8005/family')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewFamily({
            ...newFamily,
            [name]: value,
        });
    };

    const handleAddFamily = () => {

        axios
            .post('http://localhost:8005/family', newFamily)
            .then(() => {

                setNewFamily({
                    id: '',
                    FamilyName: '',
                    memberName: '',
                    Relation: ''
                });
                fetchData();
            })
            .catch((error) => {
                console.error('Error adding family:', error);
            });
    };

    return (
        <div>
            <h1>API Data in Material-UI Table</h1>
            <div>
                <TextField
                    label="ID"
                    name="id"
                    value={newFamily.id}
                    onChange={handleInputChange}
                />
                <TextField
                    label="FamilyName"
                    name="FamilyName"
                    value={newFamily.FamilyName}
                    onChange={handleInputChange}
                />
                <TextField
                    label="memberName"
                    name="memberName"
                    value={newFamily.memberName}
                    onChange={handleInputChange}
                />
                <TextField
                    label="Relation"
                    name="Relation"
                    value={newFamily.Relation}
                    onChange={handleInputChange}
                />
                <Button variant="contained" color="primary" onClick={handleAddFamily}>
                    Add Family
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>FamilyName</TableCell>
                            <TableCell>memberName</TableCell>
                            <TableCell>Relation</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.FamilyName}</TableCell>
                                <TableCell>{item.memberName}</TableCell>
                                <TableCell>{item.Relation}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyTable;
