import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Link } from "react-router-dom";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const useStyles = makeStyles((theme) => ({
    tableBodyCell: {
        padding: "0px",
        paddingLeft: "10px",
        fontSize: "14px",
        margin: "0px",
        height: "40px"
    },
    tableHeaderCell: {
        padding: "0px",
        paddingLeft: "10px",
        fontSize: "14px",
        color: "#21CCDC",
        height: "40px"
    },
    table: {
        borderRadius: "0px",
        width: "100%"
    },
    tableContainer: {
        width: "100%",
        borderRadius: "0px",
        border: "1px solid #DDDDDD"
    }
}))

function createData(
    Equipmentfamily: string,
    Equipment: string,
    Spec: string,
    Product: string,
    ProcessSpec: string,
    LastModified: string,
    ModifiedBy: string,
    View: string,
    Delete: string,
    Copy: string,
    Assign: string,
) {
    return { Equipmentfamily, Equipment, Spec, Product, ProcessSpec, LastModified, ModifiedBy, View, Delete, Copy, Assign };
}

const rows = [
    createData("sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text"),
    createData("sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text"),
    createData("sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text")
];

export default function SearchRecipe() {
    const classes = useStyles();
    return (
        <Grid container className="searchrecipemain">
            <Grid item lg={3} xs={12} className="searchrecipegrid">
                <div className="searchrecipe1">
                    <div className="searchrecipeitems">
                        <label className="searchrecipelabel">Equipment Family</label>
                        <select className="searchrecipeselect" name="cars" id="cars">
                            <option value="volvo">new value 1</option>
                            <option value="saab">new value 2</option>
                            <option value="opel">new value 3</option>
                        </select>
                    </div>
                    <div className="searchrecipeitems">
                        <label className="searchrecipelabel">Equipment</label>
                        <select className="searchrecipeselect" name="cars" id="cars">
                            <option value="volvo">new value 1</option>
                            <option value="saab">new value 2</option>
                            <option value="opel">new value 3</option>
                        </select>
                    </div>
                </div>
            </Grid>
            <Grid item lg={9} xs={12} className="searchrecipe2">
                <div className="searchrecipeitems">
                    <label className="searchrecipelabel">Product</label>
                    <select className="searchrecipeselect" name="cars" id="cars">
                        <option value="volvo">new value 1</option>
                        <option value="saab">new value 2</option>
                        <option value="opel">new value 3</option>
                    </select>
                </div>
                <div className="searchrecipeitems">
                    <label className="searchrecipelabel">Process Spec</label>
                    <select className="searchrecipeselect" name="cars" id="cars">
                        <option value="volvo">new value 1</option>
                        <option value="saab">new value 2</option>
                        <option value="opel">new value 3</option>
                    </select>
                </div>
                <div className="searchrecipeitems">
                    <label className="searchrecipelabel">Spec</label>
                    <select className="searchrecipeselect" name="cars" id="cars">
                        <option value="volvo">new value 1</option>
                        <option value="saab">new value 2</option>
                        <option value="opel">new value 3</option>
                    </select>
                </div>
                <div className="searchrecipeitems">
                    <label className="searchrecipelabel">Parameter Name</label>
                    <select className="searchrecipeselect" name="cars" id="cars">
                        <option value="volvo">new value 1</option>
                        <option value="saab">new value 2</option>
                        <option value="opel">new value 3</option>
                    </select>
                </div>
                <div className="searchrecipeitems">
                    <label className="searchrecipelabel">Parameter Value</label>
                    <select className="searchrecipeselect" name="cars" id="cars">
                        <option value="volvo">new value 1</option>
                        <option value="saab">new value 2</option>
                        <option value="opel">new value 3</option>
                    </select>
                </div>
            </Grid>
            <Grid item xs={12} className="searchrecipetable">
                <TableContainer className={classes.tableContainer}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell className={classes.tableHeaderCell} align="left">Equipment Family</StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left">Equipment</StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left">Spec</StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left">Product</StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left">Process Spec</StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left">Last Modified</StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left">Modified By</StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left">View</StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left">Delete</StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left">Copy</StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left">Assign</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.Equipmentfamily}>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.Equipmentfamily}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.Equipment}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.Spec}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.Product}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.ProcessSpec}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.LastModified}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.ModifiedBy}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.ModifiedBy}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.ModifiedBy}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.ModifiedBy}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.ModifiedBy}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}