import * as React from 'react';
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
    backgroundColor: theme.palette.common.white,
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
    fontSize: "13px",
    margin: "0px",
    height: "45px",
    paddingLeft: "10px"
  },

  tableHeaderCell: {
    padding: "0px",
    paddingTop: "10px",
    paddingBottom: "10px",
    height: "40px",
    fontSize: "13px",
    color: "#21CCDC",
    paddingLeft: "10px"
  },

  table: {
    borderRadius: "0px",
    width: "100%"
  },

  tableContainer: {
    border: "1px solid #DDDDDD",
    width: "95%",
    borderRadius: "0px"
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
  createData("sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text"),
  createData("sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text"),
  createData("sample text", "sample text", "sample text", "sample text", "sample text", "sample text", "sample text")
];

export default function CustomizedTables() {
  const classes = useStyles();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" style={{ height: "90vh" }}>
      <Grid item lg={6} xs={12} style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <div style={{ height: "50px", backgroundColor: "#DDDDDD", color: "black", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "25px", width: "95%", marginBottom: "20px" }}>Product recipes (Last 7 Days)</div>
        <TableContainer className={classes.tableContainer} component={Paper} sx={{ width: "500px" }}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell className={classes.tableHeaderCell}>Equipment family</StyledTableCell>
                <StyledTableCell className={classes.tableHeaderCell}>Equipment</StyledTableCell>
                <StyledTableCell className={classes.tableHeaderCell}>Spec</StyledTableCell>
                <StyledTableCell className={classes.tableHeaderCell}>Product</StyledTableCell>
                <StyledTableCell className={classes.tableHeaderCell}>Process Spec</StyledTableCell>
                <StyledTableCell className={classes.tableHeaderCell}>Last Modified</StyledTableCell>
                <StyledTableCell className={classes.tableHeaderCell}>Modified By</StyledTableCell>
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
      <Grid item lg={6} xs={12} style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <div style={{ height: "50px", backgroundColor: "#DDDDDD", color: "black", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "25px", width: "95%", marginBottom: "20px" }}>Recipes In Draft</div>
        <TableContainer className={classes.tableContainer} component={Paper} sx={{ width: "500px" }}>
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
      <Grid item lg={12} xs={12}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "50px" }}>
          <Link to="searchrecipe"><button style={{ height: "60px", backgroundColor: "white", border: "1px solid black", fontSize: "18px", padding: "20px", cursor: "pointer"}}>Search Recipe</button></Link>
          <Link to="createrecipecustomizations"><button style={{ height: "60px", backgroundColor: "white", border: "1px solid black", fontSize: "18px", padding: "20px", marginLeft: "30px", cursor: "pointer" }}>Create Update Recipe</button></Link>
        </div>
      </Grid>
    </Grid>)
}