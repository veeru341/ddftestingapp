import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Link } from "react-router-dom";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
        fontSize: "15px",
        margin: "0px",
        height: "50px",
        paddingLeft: "20px"
    },
    tableHeaderCell: {
        padding: "0px",
        paddingTop: "10px",
        paddingBottom: "10px",
        height: "40px",
        fontSize: "15px",
        paddingLeft: "20px",
        color: "#21CCDC"
    },

    table: {
        borderRadius: "0px"
    },

    tableContainer: {
        borderRadius: "0px",
        border: "1px solid #DDDDDD",
        marginTop: "20px",
    }
}))

function createData(
    Equipmentfamily: string,
    Equipment: string,
    Spec: string,
    Product: string,
    ProcessSpec: string,
    LastModified: string,
    ModifiedBy: string

) {
    return { Equipmentfamily, Equipment, Spec, Product, ProcessSpec, LastModified, ModifiedBy };
}

const rows = [
    createData("Thickness", "0.7", "mm", "0.5", "0.9", "sample text", "sample text"),
    createData("Spin Speed", "2", "kk", "3", "5", "sample text", "sample text"),
    createData("Recipe Name", "ETCH", "Text", "sample text", "sample text", "sample text", "sample text")
];

const rows2 = [
    createData("sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text"),
    createData("sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text"),
    createData("sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text")
];

export default function CreateRecipe() {
    const classes = useStyles();
    const [isshowing, setIsshowing] = useState(false)

    const handleDetails = () => {
        setIsshowing(false)
    }

    const handleMatrix = () => {
        setIsshowing(true)
    }

    return (
        <Grid container>
            <Grid container>
                <Grid item xs={12} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                    <label className="createrecipelabeltop">Select Equipment Family</label>
                    <label className="createrecipelabeltop">Select Equipment</label>
                    <label className="createrecipelabeltop">Select Spec</label>
                    <label className="createrecipelabeltop">Product</label>
                    <label className="createrecipelabeltop">Process Spec</label>
                </Grid>
            </Grid>
            <Grid container style={{ height: "120px", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                <Grid item md={4} xs={12} style={{ display: "flex", justifyContent: 'space-around', alignItems: "center" }}>
                    <p style={{ fontSize: "18px", marginLeft: "-50px", color: "#B091F1" }}>Recipe Name</p>
                    <p style={{ fontSize: "18px", color: "#B091F1" }}>Revision</p>
                </Grid>
                <Grid item md={4} xs={12} style={{ display: "flex", alignItems: "center", color: "##B091F1" }}>
                    <p style={{ fontSize: "18px", color: "#F23950" }}>Last Updated By:</p>
                </Grid>
                <Grid item md={4} xs={12} style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ fontSize: "18px", color: "#F23950" }}>Last Updated On:</p>
                </Grid>
            </Grid>
            <Grid container style={{ padding: "0px 35px 0px 35px" }}>
                <Grid item xs={12} md={2}>
                    {isshowing ?
                        (<select className="createrecipeselect">
                            <option value="Actions">Actions</option>
                            <option value="Assign Recipe">Assign Recipe</option>
                            <option value="Copy Recipe">Copy Recipe</option>
                            <option value="Audit Trail">Audit Trail</option>
                            <option value="New Revision">New Revision</option>
                        </select>) :
                        (<select className="createrecipeselect">
                            <option value="Copy Recipe">Copy Recipe</option>
                            <option value="Assign Recipe">Assign Recipe</option>
                            <option value="Audit Trail">Audit Trail</option>
                        </select>)
                    }
                </Grid>
                <Grid item xs={12} md={10} style={{ display: "flex" }}>
                    <button style={{
                        backgroundColor: isshowing ? 'black' : '#D9D9D9',
                        color: isshowing ? 'white' : 'black'
                    }} className="createrecipelabel2" onClick={handleMatrix}>Details</button>
                    <button style={{
                        backgroundColor: isshowing ? '#D9D9D9' : 'black',
                        color: isshowing ? 'black' : 'white'
                    }} className="createrecipelabel1" onClick={handleDetails}>Matrix</button>

                </Grid>
                <Grid container>
                    <Grid item xs={12} md={2}></Grid>
                    {isshowing ?
                        (<Grid item xs={12} md={10}>
                            <TableContainer className={classes.tableContainer} component={Paper}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Parameter Name</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Value</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">UOM</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Min</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Max</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Map Name 1</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Map Name 2</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Map Name 3</StyledTableCell>
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
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>):
                        (
                            <Grid item xs={12} md={10}>
                            <TableContainer className={classes.tableContainer} component={Paper}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Equipment family</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Equipment</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Spec</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Product</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Process Spec</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Last Modified</StyledTableCell>
                                            <StyledTableCell className={classes.tableHeaderCell} align="left">Modified By</StyledTableCell>
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
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        )}
                </Grid>
            </Grid>
        </Grid>
    );
}
