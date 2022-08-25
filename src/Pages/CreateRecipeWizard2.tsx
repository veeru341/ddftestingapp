import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom"


export default function CreateRecipeWizard2() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ height: "90vh" }}>
            <Grid item xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "450px" }}>
                    <label className="createrecipewizardlabel">Select Spec</label>
                    <select className="createrecipewizardselect" name="cars" id="cars">
                        <option value="volvo">new value 1</option>
                        <option value="saab">new value 2</option>
                        <option value="opel">new value 3</option>
                    </select>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "450px", marginTop: "40px" }}>
                    <label className="createrecipewizardlabel">Select Process Spec</label>
                    <select className="createrecipewizardselect" name="cars" id="cars">
                        <option value="volvo">new value 1</option>
                        <option value="saab">new value 2</option>
                        <option value="opel">new value 3</option>
                    </select>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", width: "450px", marginTop: "40px" }}>
                    <label className="createrecipewizardlabel">Select Product</label>
                    <select className="createrecipewizardselect" name="cars" id="cars">
                        <option value="volvo">new value 1</option>
                        <option value="saab">new value 2</option>
                        <option value="opel">new value 3</option>
                    </select>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", width: "450px", marginTop: "40px" }}>
                    <Link to="/createrecipe"><button style={{ width: "75px", height: "45px" }}>Next</button></Link>
                </div>
            </Grid>
        </Grid>
    );
}