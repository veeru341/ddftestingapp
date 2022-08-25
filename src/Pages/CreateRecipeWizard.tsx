import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link} from "react-router-dom"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ height: "90vh" }}>
            <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", flexWrap:"wrap", justifyContent: "space-between", width: "450px" }}>
                    <label className="createrecipewizardlabel">Select Equipment Family</label>
                    <select className="createrecipewizardselect" name="cars" id="cars">
                        <option value="volvo">new value 1</option>
                        <option value="saab">new value 2</option>
                        <option value="opel">new value 3</option>
                    </select>
                </div>
                <div style={{ display: "flex", flexWrap:"wrap", justifyContent: "space-between", width: "450px", marginTop:"40px" }}>
                    <label className="createrecipewizardlabel">Select Equipment</label>
                    <select className="createrecipewizardselect" name="cars" id="cars">
                        <option value="volvo">new value 1</option>
                        <option value="saab">new value 2</option>
                        <option value="opel">new value 3</option>
                    </select>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", width: "450px", marginTop:"40px" }}>
                    <Link to="/createrecipewizard2"><button style={{width:"75px",height:"45px"}}>Next</button></Link>
                </div>
            </Grid>
        </Grid>
    );
}