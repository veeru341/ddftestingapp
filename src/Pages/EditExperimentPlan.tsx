import React, { Fragment, useState } from "react";
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import Tabs from "@data-driven-forms/mui-component-mapper/tabs";
import Wizard from "@data-driven-forms/mui-component-mapper/wizard";
import Checkbox from "@data-driven-forms/mui-component-mapper/checkbox";
import fieldArray from "@data-driven-forms/mui-component-mapper/field-array";
import { Select, Radio, Textarea, DatePicker } from "@data-driven-forms/mui-component-mapper";
import Grid from "@mui/material/Grid";
import TwoColumnLayout from '../CustomControls/TwoColumnLayout';
import SingleColumnLayout from "../CustomControls/SingleColumnLayout";
import MuiFormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import SendIcon from "@mui/icons-material/Send";
import FourColumnLayout from "../CustomControls/FourColumnLayout";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid-pro";
import DDFButton from "../CustomControls/DDFButton";
import DdfGrid from "../CustomControls/DdfGrid";
import Filler from "../CustomControls/Filler";

const componentMapper = {
    [componentTypes.TEXT_FIELD]: TextField,
    [componentTypes.WIZARD]: Wizard,
    [componentTypes.RADIO]: Radio,
    [componentTypes.SELECT]: Select,
    [componentTypes.CHECKBOX]: Checkbox,
    [componentTypes.TEXTAREA]: Textarea,
    [componentTypes.FIELD_ARRAY]: fieldArray,
    [componentTypes.TABS]: Tabs,
    [componentTypes.DATE_PICKER]: DatePicker,
    "demogrid": DdfGrid,
    "Button": DDFButton,
    "TwoColumnLayout": TwoColumnLayout,
    "SingleColumnLayout": SingleColumnLayout,
    "FourColumnLayout" : FourColumnLayout,
    "Filler": Filler
};

const FormTemplate = (props: any) => <MuiFormTemplate {...props} showFormControls={false} />

export default function EditExperimentPlan() {

    const detailcolumns: GridColDef[] = [
        { field: "detailscol1", headerName: "Parameter", width: 160, editable: true },
        { field: "detailscol2", headerName: "Value", width: 160, editable: true },
        { field: "detailscol3", headerName: "UOM", width: 160, editable: true },
        { field: "detailscol4", headerName: "Max", width: 160, editable: true },
        { field: "detailscol5", headerName: "Min", width: 160, editable: true },
        { field: "detailscol6", headerName: "Map Name 1", width: 160, editable: true },
        { field: "detailscol7", headerName: "Map Name 2", width: 160, editable: true },
        { field: "detailscol8", headerName: "Map Name 3", width: 160, editable: true }
    ]

    const [detailsgridrows, setDetailsGridRows] = useState([
        { id: 1, detailscol1: "sample text", detailscol2: "sample text", detailscol3: "sample text", detailscol4: "sample text", detailscol5: "sample text", detailscol6: "sample text", detailscol7: "sample text", detailscol8: "sample text" },
        { id: 2, detailscol1: "sample text", detailscol2: "sample text", detailscol3: "sample text", detailscol4: "sample text", detailscol5: "sample text", detailscol6: "sample text", detailscol7: "sample text", detailscol8: "sample text" },
        { id: 3, detailscol1: "sample text", detailscol2: "sample text", detailscol3: "sample text", detailscol4: "sample text", detailscol5: "sample text", detailscol6: "sample text", detailscol7: "sample text", detailscol8: "sample text" },
        { id: 4, detailscol1: "sample text", detailscol2: "sample text", detailscol3: "sample text", detailscol4: "sample text", detailscol5: "sample text", detailscol6: "sample text", detailscol7: "sample text", detailscol8: "sample text" },
    ]);

    const workflowcolumns: GridColDef[] = [
        {
            field: "workflowcol1", headerName: "Actions", width: 150,
            renderCell: (params: any) => {
                return (
                    <>
                        <Button onClick={() => {
                            console.log(params.row);
                            params.row.EditClick(params.row, params.row.form, params.row.grid);
                        }}><BorderColorIcon /></Button>
                    </>);

            }
        },
        { field: "workflowcol2", headerName: "Workflow", width: 220, editable: true },
        { field: "workflowcol3", headerName: "Sequence", width: 220, editable: true },
        { field: "workflowcol4", headerName: "Step", width: 220, editable: true },
        { field: "workflowcol5", headerName: "Description", width: 220, editable: true },
        { field: "workflowcol6", headerName: "settings", width: 205, editable: true }
    ];

    const [workflowgridrows, setWorkflowGridRows] = useState([
        { id: 1, workflowcol1: "Edit", workflowcol2: "WAFER_001", workflowcol3: "1", workflowcol4: "WFS_S01", workflowcol5: "", workflowcol6: "" },
        { id: 2, workflowcol1: "Edit", workflowcol2: "WAFER_002", workflowcol3: "2", workflowcol4: "FAB_IQC", workflowcol5: "", workflowcol6: "" },
        { id: 3, workflowcol1: "Edit", workflowcol2: "WAFER_003", workflowcol3: "3", workflowcol4: "DEPOSITION_1", workflowcol5: "", workflowcol6: "" },
        { id: 4, workflowcol1: "Edit", workflowcol2: "WAFER_004", workflowcol3: "4", workflowcol4: "LITHO_1", workflowcol5: "", workflowcol6: "" },
        { id: 5, workflowcol1: "Edit", workflowcol2: "WAFER_005", workflowcol3: "5", workflowcol4: "ETCH_1", workflowcol5: "", workflowcol6: "" },
        { id: 6, workflowcol1: "Edit", workflowcol2: "WAFER_006", workflowcol3: "6", workflowcol4: "DEPOSITION_2", workflowcol5: "", workflowcol6: "" },
        { id: 7, workflowcol1: "Edit", workflowcol2: "WAFER_007", workflowcol3: "7", workflowcol4: "BAKE_RESIST", workflowcol5: "", workflowcol6: "" },
        { id: 8, workflowcol1: "Edit", workflowcol2: "WAFER_008", workflowcol3: "8", workflowcol4: "LITHO_2", workflowcol5: "", workflowcol6: "" },
        { id: 9, workflowcol1: "Edit", workflowcol2: "WAFER_009", workflowcol3: "9", workflowcol4: "ETCH_2", workflowcol5: "", workflowcol6: "" },
        { id: 10, workflowcol1: "Edit", workflowcol2: "WAFER_010", workflowcol3: "10", workflowcol4: "STRIP", workflowcol5: "", workflowcol6: "" },
    ]);

    const epdcolumns: GridColDef[] = [
        { field: "epdcol1", headerName: "Actions", width: 185, editable: true },
        { field: "epdcol2", headerName: "Workflow", width: 185, editable: true },
        { field: "epdcol3", headerName: "Step", width: 185, editable: true },
        { field: "epdcol4", headerName: "Step Name", width: 185, editable: true },
        { field: "epdcol5", headerName: "Spec", width: 185, editable: true },
        { field: "epdcol6", headerName: "Skip-To-Step", width: 185, editable: true },
        { field: "epdcol7", headerName: "settings", width: 185, editable: true }
    ];

    const [epdgridrows, setEpdGridRows] = useState([
        { id: 1, epdcol1: "sample text", epdcol2: "sample text", epdcol3: "sample text", epdcol4: "sample text", epdcol5: "sample text", epdcol6: "sample text", epdcol7: "sample text" },
        { id: 2, epdcol1: "sample text", epdcol2: "sample text", epdcol3: "sample text", epdcol4: "sample text", epdcol5: "sample text", epdcol6: "sample text", epdcol7: "sample text" },
        { id: 3, epdcol1: "sample text", epdcol2: "sample text", epdcol3: "sample text", epdcol4: "sample text", epdcol5: "sample text", epdcol6: "sample text", epdcol7: "sample text" },
        { id: 4, epdcol1: "sample text", epdcol2: "sample text", epdcol3: "sample text", epdcol4: "sample text", epdcol5: "sample text", epdcol6: "sample text", epdcol7: "sample text" },
    ]);

    var eepschema3 = {
        "fields": [
            {
                "component": "tabs",
                "name": "tabs",
                "fields": [
                    {
                        "name": "1",
                        "title": "Details",
                        "description": "details",
                        "fields": [
                            {
                                component: "demogrid",
                                label: "detailstab",
                                name: "detailstab",
                                rows: detailsgridrows,
                                columns: detailcolumns,
                                checkboxSelection: false,
                                gridApi: [],
                                formOptions: []
                            }
                        ]
                    },
                    {
                        "name": "2",
                        "title": "Workflow",
                        "description": "workflow",
                        "fields": [
                            {
                                component: "demogrid",
                                label: "workflowtab",
                                name: "workflowtab",
                                rows: workflowgridrows,
                                columns: workflowcolumns,
                                checkboxSelection: false,
                                gridApi: [],
                                formOptions: [],
                            },
                            {
                                "component": "Filler",
                                "name": "filler1",
                                "label": "filler1",
                                xs: "6",
                                onBlur: (e: any) => { },
                            },
                            {
                                "component": "FourColumnLayout",
                                "name": "FourColumnLayout",
                                "fields": [
                                    {
                                        "component": "Filler",
                                        "name": "filler1",
                                        "label": "filler1",
                                        xs: "6",
                                        onBlur: (e: any) => { },
                                    },
                                    {
                                        "component": "Filler",
                                        "name": "filler1",
                                        "label": "filler1",
                                        xs: "6",
                                        onBlur: (e: any) => { },
                                    },
                                    {
                                        component: "Button",
                                        label: "Save",
                                        name: "Save",
                                        icon: <SendIcon />,
                                        clickHandler: (formOptions: any) => {
                                            alert("saved grid data to db");
                                        },
                                    },
                                    {
                                        component: "Button",
                                        label: "Reset",
                                        name: "Reset",
                                        icon: <SendIcon />,
                                        clickHandler: (formOptions: any) => {
                                            alert("saved grid data to db");
                                        },
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "3",
                        "title": "Experiment Plan Details",
                        "description": "experiment plan details",
                        "fields": [
                            {
                                component: "demogrid",
                                label: "experimentplandetails",
                                name: "experimentplandetails",
                                rows: epdgridrows,
                                columns: epdcolumns,
                                checkboxSelection: false,
                                gridApi: [],
                                formOptions: [],
                            },
                            {
                                "component": "Filler",
                                "name": "filler1",
                                "label": "filler1",
                                xs: "6",
                                onBlur: (e: any) => { },
                            },
                            {
                                "component": "FourColumnLayout",
                                "name": "FourColumnLayout",
                                "fields": [
                                    {
                                        "component": "Filler",
                                        "name": "filler1",
                                        "label": "filler1",
                                        xs: "6",
                                        onBlur: (e: any) => { },
                                    },
                                    {
                                        "component": "Filler",
                                        "name": "filler1",
                                        "label": "filler1",
                                        xs: "6",
                                        onBlur: (e: any) => { },
                                    },
                                    {
                                        component: "Button",
                                        label: "Save",
                                        name: "Save",
                                        icon: <SendIcon />,
                                        clickHandler: (formOptions: any) => {
                                            alert("saved grid data to db");
                                        },
                                    },
                                    {
                                        component: "Button",
                                        label: "Reset",
                                        name: "Reset",
                                        icon: <SendIcon />,
                                        clickHandler: (formOptions: any) => {
                                            alert("saved grid data to db");
                                        },
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

    return (
        <Grid container style={{ padding: "20px" }} >
            <Grid item xs={12}>
                <FormRenderer
                    schema={eepschema3}
                    FormTemplate={FormTemplate}
                    componentMapper={componentMapper}
                    onSubmit={console.log}
                />
            </Grid>
        </Grid >
    )
}