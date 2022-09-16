import React, { Fragment, useState } from "react";
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer";
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import TextField from "@data-driven-forms/mui-component-mapper/text-field";
import Tabs from "@data-driven-forms/mui-component-mapper/tabs";
import Wizard from "@data-driven-forms/mui-component-mapper/wizard";
import Checkbox from "@data-driven-forms/mui-component-mapper/checkbox";
import fieldArray from "@data-driven-forms/mui-component-mapper/field-array";
import { Select, Radio, Textarea, FormFieldGrid, DatePicker } from "@data-driven-forms/mui-component-mapper";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import SendIcon from "@mui/icons-material/Send";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from "@mui/material/Grid";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
} from "@mui/material";
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import {
    DataGridPro,
    GridApi,
    GridCellValue,
    GridColDef,
    GridRenderCellParams,
    GridValueGetterParams,
    useGridApiRef,
} from "@mui/x-data-grid-pro";
import DDFButton from "../CustomControls/DDFButton";
import DdfGrid from "../CustomControls/DdfGrid";
import SearchRecipeDdfGrid from "../CustomControls/SearchRecipeDdfGrid";
import Filler from "../CustomControls/Filler";
import TwoColumnLayout from '../CustomControls/TwoColumnLayout';
import FourColumnLayout from '../CustomControls/FourColumnLayout';
import SingleColumnLayout from "../CustomControls/SingleColumnLayout";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MuiFormTemplate from '@data-driven-forms/mui-component-mapper/form-template';

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
    "searchrecipeddfgrid" : SearchRecipeDdfGrid,
    "Button": DDFButton,
    "TwoColumnLayout": TwoColumnLayout,
    "FourColumnLayout": FourColumnLayout,
    "SingleColumnLayout": SingleColumnLayout,
    "Filler": Filler
};

const FormTemplate = (props: any) => <MuiFormTemplate {...props} showFormControls={false} />


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Createrecipe2() {
    const columns: GridColDef[] = [
        { field: "col1", headerName: "Equipment Family", width: 120 },
        { field: "col2", headerName: "Equipment", width: 120 },
        { field: "col3", headerName: "Spec", width: 120 },
        { field: "col4", headerName: "Product", width: 120 },
        { field: "col5", headerName: "Process Spec", width: 120 },
        { field: "col6", headerName: "Last Modified", width: 120 },
        { field: "col7", headerName: "Modified By", width: 120 },
        { field: "col8", headerName: "View", width: 120 },
        { field: "col9", headerName: "Delete", width: 120 },
        { field: "col10", headerName: "Copy", width: 120 },
        { field: "col11", headerName: "Assign", width: 120 }
    ];

    const [gridrows, setGridRows] = useState([
        { id: 1, col1: "sample text", col2: "sample text", col3: "sample text", col4: "sample text", col5: "sample text", col6: "sample text", col7: "sample text", col8: "sample text", col9: "sample text", col10 : "sample text", col11:"sample text" },
        { id: 2, col1: "sample text", col2: "sample text", col3: "sample text", col4: "sample text", col5: "sample text", col6: "sample text", col7: "sample text", col8: "sample text", col9: "sample text", col10 : "sample text", col11:"sample text" },
        { id: 3, col1: "sample text", col2: "sample text", col3: "sample text", col4: "sample text", col5: "sample text", col6: "sample text", col7: "sample text", col8: "sample text", col9: "sample text", col10 : "sample text", col11:"sample text" },
    ]);


    var schema3 = {
        "fields": [
            {
                "component": "SingleColumnLayout",
                "name": "SingleColumnLayout",
                "fields": [
                    {
                        "component": "FourColumnLayout",
                        "name": "FourColumnLayout",
                        "fields": [
                            {
                                "component": "select",
                                "name": "select1",
                                "label": "Select Equipment Family",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select2",
                                "label": "Product",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select3",
                                "label": "Process Spec",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select4",
                                "label": "Spec",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select5",
                                "label": "Equipment",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select6",
                                "label": "Parameter Name",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                "component": "select",
                                "name": "select7",
                                "label": "Parameter Value",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    },
                                ],
                            },
                            {
                                component: "Button",
                                label: "Checkbox1",
                                name: "Search",
                                icon: <SendIcon />
                            }
                        ]
                    },
                    {
                        component: "searchrecipeddfgrid",
                        label: "hello",
                        name: "adf",
                        rows: gridrows,
                        columns: columns,
                        checkboxSelection: false,
                        gridApi: [],
                        formOptions: [],

                    }

                ]
            }
        ]
    }
    return (
        <div style={{padding:"20px"}}>
        <FormRenderer
            schema={schema3}
            FormTemplate={FormTemplate}
            componentMapper={componentMapper}
            onSubmit={console.log}
        />
        </div>
    );
}