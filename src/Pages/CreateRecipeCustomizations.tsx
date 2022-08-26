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
import SearchIcon from '@mui/icons-material/Search';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
    ParameterName: string,
    Value: string,
    UOM: string,
    Min: string,
    Max: string,
    MapName1: string,
    MapName2: string,
    MapName3: string,
) {
    return { ParameterName, Value, UOM, Min, Max, MapName1, MapName2, MapName3 };
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
};

export default function CreateRecipe() {

    const [rows, setRows] = useState([
        createData("Thickness", "0.7", "mm", "0.5", "0.9", "sample text", "sample text", "sample text"),
        createData("Spin Speed", "2", "kk", "3", "5", "sample text", "sample text", "sample text"),
        createData("Recipe Name", "ETCH", "Text", "sample text", "sample text", "sample text", "sample text", "sample text")
    ]);

    const [inputdata, setInputData] = useState({
        ParameterName: "",
        Value: "",
        UOM: "",
        Min: "",
        Max: "",
        MapName1: "",
        MapName2: "",
        MapName3: ""
    })

    const { ParameterName, Value, UOM, Min, Max, MapName1, MapName2, MapName3} = inputdata;

    const handleInputChange = (evt : any) => {
        setInputData({...inputdata, [evt.target.name] : [evt.target.value]})
    }

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handledelete = (index: any) => {
        setRows(rows.filter((i, j) => j !== index))
    }

    return (
        <Grid container style={{ padding: "20px" }} height="90vh">
            <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                                <StyledTableCell className={classes.tableHeaderCell} align="left"></StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left"></StyledTableCell>
                                <StyledTableCell className={classes.tableHeaderCell} align="left"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.ParameterName}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.Value}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.UOM}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.Min}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.Max}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.MapName1}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.MapName2}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} align="left">{row.MapName3}</StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} onClick={handleOpen} align="left" style={{ cursor: "pointer" }}><SearchIcon /></StyledTableCell>
                                    <StyledTableCell className={classes.tableBodyCell} onClick={handleOpen} align="left" style={{ cursor: "pointer" }}><BorderColorIcon /></StyledTableCell>
                                    <StyledTableCell onClick={() => handledelete(index)} className={classes.tableBodyCell} align="left" style={{ cursor: "pointer" }}><DeleteIcon /></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form className="popupmain">
                        <div className="popupbox" style={{ display: "flex" }}>
                            <div className="popupboxinnerdiv">Parameter Name</div>
                            <div className="popupboxinnerdiv1">
                                <input type="text" value={inputdata.ParameterName} onChange={handleInputChange} name="ParameterName" className="popupboxinput" />
                            </div>
                        </div>
                        <div className="popupbox" style={{ display: "flex" }}>
                            <div className="popupboxinnerdiv">Value</div>
                            <div className="popupboxinnerdiv1">
                                <input type="text" value={inputdata.Value} onChange={handleInputChange} name="Value" className="popupboxinput" />
                            </div>
                        </div>
                        <div className="popupbox" style={{ display: "flex" }}>
                            <div className="popupboxinnerdiv">UOM</div>
                            <div className="popupboxinnerdiv1">
                                <input type="text" value={inputdata.UOM} onChange={handleInputChange} name="UOM" className="popupboxinput" />
                            </div>
                        </div>
                        <div className="popupbox" style={{ display: "flex" }}>
                            <div className="popupboxinnerdiv">Min</div>
                            <div className="popupboxinnerdiv1">
                                <input type="text" value={inputdata.Min} onChange={handleInputChange} name="Min" className="popupboxinput" />
                            </div>
                        </div>
                        <div className="popupbox" style={{ display: "flex" }}>
                            <div className="popupboxinnerdiv">Max</div>
                            <div className="popupboxinnerdiv1">
                                <input type="text" value={inputdata.Max} onChange={handleInputChange} name="Max" className="popupboxinput" />
                            </div>
                        </div>
                        <div className="popupbox" style={{ display: "flex" }}>
                            <div className="popupboxinnerdiv">Map Name 1</div>
                            <div className="popupboxinnerdiv1">
                                <input type="text" value={inputdata.MapName1} onChange={handleInputChange} name="MapName1" className="popupboxinput" />
                            </div>
                        </div>
                        <div className="popupbox" style={{ display: "flex" }}>
                            <div className="popupboxinnerdiv">Map Name 2</div>
                            <div className="popupboxinnerdiv1">
                                <input type="text" value={inputdata.MapName2} onChange={handleInputChange} name="MapName2" className="popupboxinput" />
                            </div>
                        </div>
                        <div className="popupbox" style={{ display: "flex" }}>
                            <div className="popupboxinnerdiv">Map Name 3</div>
                            <div className="popupboxinnerdiv1">
                                <input type="text" value={inputdata.MapName3} onChange={handleInputChange} name="MapName3" className="popupboxinput" />
                            </div>
                        </div>
                        <div className="popupboxbuttondiv" style={{ display: "flex" }}>
                            <button className="popupboxbutton">Add New</button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </Grid>
    );
}
