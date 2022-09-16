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
import { Button } from "@mui/material";
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
import DdfGrid2 from "../CustomControls/DdfGrid2";
import Filler from "../CustomControls/Filler";
import TwoColumnLayout from '../CustomControls/TwoColumnLayout';
import SingleColumnLayout from "../CustomControls/SingleColumnLayout"
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
    "demogrid2": DdfGrid2,
    "Button": DDFButton,
    "TwoColumnLayout": TwoColumnLayout,
    "SingleColumnLayout": SingleColumnLayout,
    "Filler": Filler
};

const FormTemplate = (props: any) => <MuiFormTemplate {...props} showFormControls={false} />

export default function Createrecipe2() {
    const columns: GridColDef[] = [
        { field: "col1", headerName: "Parameter", width: 140, editable: true },
        { field: "col2", headerName: "Value", width: 140, editable: true },
        { field: "col3", headerName: "UOM", width: 140, editable: true },
        { field: "col4", headerName: "Max", width: 140, editable: true },
        { field: "col5", headerName: "Min", width: 140, editable: true },
        { field: "col6", headerName: "Map Name 1", width: 140, editable: true },
        { field: "col7", headerName: "Map Name 2", width: 140, editable: true },
        { field: "col8", headerName: "Map Name 3", width: 140, editable: true },
        {
            field: "col9", headerName: "", width: 150,
            renderCell: (params: any) => {
                return (
                    <>
                        <Button onClick={() => {
                            console.log(params.row);
                            params.row.EditClick(params.row, params.row.form, params.row.grid);
                        }}><BorderColorIcon /></Button>

                        <Button onClick={() => {
                            console.log(params.row);
                            params.row.DeleteClick(params.row, params.row.form, params.row.grid);
                        }}><DeleteIcon /></Button>

                    </>);

            }
        },
    ];

    const [gridrows, setGridRows] = useState([
        { id: 1, col1: "Thickness", col2: "0.7", col3: "mm", col4: "0.5", col5: "0.9", col6: "sample text", col7: "sample text", col8: "sample text", col9: "" },
        { id: 2, col1: "Spin Speed", col2: "2", col3: "kk", col4: "3", col5: "5", col6: "sample text", col7: "sample text", col8: "sample text", col9: "" },
        { id: 3, col1: "Recipe Name", col2: "ETCH", col3: "Text", col4: "sample text", col5: "sample text", col6: "sample text", col7: "sample text", col8: "sample text", col9: "" }
    ]);

    const matrixcolumns: GridColDef[] = [
        { field: "matrixcol1", headerName: "Equipment family", width: 180 },
        { field: "matrixcol2", headerName: "Equipment", width: 180 },
        { field: "matrixcol3", headerName: "Spec", width: 180 },
        { field: "matrixcol4", headerName: "Product", width: 180 },
        { field: "matrixcol5", headerName: "Process Spec", width: 180 },
        { field: "matrixcol6", headerName: "Last Modified", width: 180 },
        { field: "matrixcol7", headerName: "Modified By", width: 180 }
    ];

    const matrixgridrows = [
        { id: 1, matrixcol1: "sample text", matrixcol2: "sample text", matrixcol3: "sample text", matrixcol4: "sample text", matrixcol5: "sample text", matrixcol6: "sample text", matrixcol7: "sample text" },
        { id: 2, matrixcol1: "sample text", matrixcol2: "sample text", matrixcol3: "sample text", matrixcol4: "sample text", matrixcol5: "sample text", matrixcol6: "sample text", matrixcol7: "sample text" },
        { id: 3, matrixcol1: "sample", matrixcol2: "sample text", matrixcol3: "sample text", matrixcol4: "sample text", matrixcol5: "sample text", matrixcol6: "sample text", matrixcol7: "sample text" }
    ];

    const schema3 = {
        "fields": [
            {
                "component": "wizard",
                "name": "wizzard",
                "fields": [
                    {
                        "title": "Get started with adding source",
                        "name": "step-1",
                        "nextStep": "nextstep1",
                        "fields": [
                            {
                                "component": "select",
                                "name": "source-name",
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
                                "name": "source-type",
                                "label": "Select Equipment",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 2"
                                    },
                                    {
                                        "value": "new value 1",
                                        "label": "new value 2"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "nextstep1",
                        "name": "nextstep1",
                        "nextStep": "nextstep2",
                        "fields": [
                            {
                                "component": "select",
                                "name": "aws-field1",
                                "label": "Select Spec",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    }
                                ],
                            },
                            {
                                "component": "select",
                                "name": "aws-field2",
                                "label": "Select Process Spec",
                                "options": [
                                    {
                                        "value": "new value 1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "new value 2",
                                        "label": "new value 2"
                                    }
                                ],
                            },
                            {
                                "component": "select",
                                "name": "aws-field3",
                                "label": "Select Product",
                                "options": [
                                    {
                                        "value": "table1",
                                        "label": "new value 1"
                                    },
                                    {
                                        "value": "table2",
                                        "label": "new value 2"
                                    }
                                ],
                            },
                        ]
                    },
                    {
                        "component": "wizard",
                        "name": "nextstep2",
                        "fields": [
                            {
                                "component": "tabs",
                                "name": "tabs",
                                "fields": [
                                    {
                                        "name": "1",
                                        "title": "Detail",
                                        "description": "Here you can find fruits",
                                        "fields": [
                                            {
                                                "component": "TwoColumnLayout",
                                                "name": "TwoColumnLayout",
                                                "fields": [
                                                    {
                                                        component: 'text-field',
                                                        label: "Parameter",
                                                        name: "col1",
                                                    },
                                                    {
                                                        component: 'text-field',
                                                        label: "value",
                                                        name: "col2",
                                                    },
                                                    {
                                                        component: 'text-field',
                                                        label: "UOM",
                                                        name: "col3",
                                                    },
                                                    {
                                                        component: 'text-field',
                                                        label: "Min",
                                                        name: "col4",
                                                    },
                                                    {
                                                        component: 'text-field',
                                                        label: "Max",
                                                        name: "col5",
                                                    },
                                                    {
                                                        component: 'text-field',
                                                        label: "Map Name 1",
                                                        name: "col6",
                                                    },
                                                    {
                                                        component: 'text-field',
                                                        label: "Map Name 2",
                                                        name: "col7",
                                                    },
                                                    {
                                                        component: 'text-field',
                                                        label: "Map Name 3",
                                                        name: "col8",
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
                                                        label: "Checkbox",
                                                        name: "Add New",
                                                        icon: <SendIcon />,
                                                        clickHandler: (formOptions: any) => {
                                                            debugger;
                                                            var col11 = formOptions.getState().values.col1;
                                                            var col12 = formOptions.getState().values.col2;
                                                            var col13 = formOptions.getState().values.col3;
                                                            var col14 = formOptions.getState().values.col4;
                                                            var col15 = formOptions.getState().values.col5;
                                                            var col16 = formOptions.getState().values.col6;
                                                            var col17 = formOptions.getState().values.col7;
                                                            var col18 = formOptions.getState().values.col8;
                                                            setGridRows([...gridrows, {
                                                                id: Math.trunc(Math.random() * 100),
                                                                col1: col11,
                                                                col2: col12,
                                                                col3: col13,
                                                                col4: col14,
                                                                col5: col15,
                                                                col6: col16,
                                                                col7: col17,
                                                                col8: col18,
                                                                col9: ""
                                                            }])

                                                            formOptions.change("col1", "");
                                                            formOptions.change("col2", "");
                                                            formOptions.change("col3", "");
                                                            formOptions.change("col4", "");
                                                            formOptions.change("col5", "");
                                                            formOptions.change("col6", "");
                                                            formOptions.change("col7", "");
                                                            formOptions.change("col8", "");
                                                        },
                                                    },
                                                    {
                                                        component: "Button",
                                                        label: "Checkbox1",
                                                        name: "Search",
                                                        icon: <SendIcon />
                                                    },
                                                ]
                                            },
                                            {
                                                "component": "Filler",
                                                "name": "filler1",
                                                "label": "filler1",
                                                xs: "6",
                                                onBlur: (e: any) => { },
                                            },
                                            {
                                                component: "demogrid",
                                                label: "hello",
                                                name: "adf",
                                                rows: gridrows,
                                                columns: columns,
                                                checkboxSelection: false,
                                                gridApi: [],
                                                formOptions: [],
                                                //Signature is tied to render cell method of GridColumn
                                                EditClick: (data: any, formAPI: any, gridAPI: any) => {
                                                    formAPI.change('col1', data.col1);
                                                    formAPI.change('col2', data.col2);
                                                    formAPI.change('col3', data.col3);
                                                    formAPI.change('col4', data.col4);
                                                    formAPI.change('col5', data.col5);
                                                    formAPI.change('col6', data.col6);
                                                    formAPI.change('col7', data.col7);
                                                    formAPI.change('col8', data.col8);
                                                    formAPI.change('id', data.id);
                                                },
                                                //Signature is tied to render cell method of GridColumn
                                                DeleteClick: (data: any, formAPI: any, gridAPI: any) => {
                                                    debugger
                                                    var cht: any[] = [];
                                                    gridAPI.current.getRowModels().forEach((x: any) => {
                                                        var k: any = {};
                                                        Object.keys(x).forEach((element2) => {
                                                            if (typeof x[element2] != 'function') {
                                                                k[element2] = x[element2];
                                                            }
                                                        });
                                                        cht.push(k)
                                                    });


                                                    setGridRows(cht.filter(x => x.id != data.id && x.col1 != data.col1 && x.col2 != data.col2))
                                                },
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

                                        ],
                                    },
                                    {
                                        "name": "2",
                                        "title": "matrix",
                                        "description": "Here you can find vegetables",
                                        "fields": [
                                            {
                                                "component": "SingleColumnLayout",
                                                "name": "SingleColumnLayout",
                                                "fields": [
                                                    {
                                                        component: "demogrid2",
                                                        label: "hello",
                                                        name: "adffg",
                                                        rows: matrixgridrows,
                                                        columns: matrixcolumns,
                                                        checkboxSelection: false,
                                                        gridApi: [],
                                                        formOptions: [],
                                                    }
                                                ]
                                            }
                                        ]
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
        <Grid container spacing={3}>
            <Grid xs item>
                <FormRenderer
                    schema={schema3}
                    FormTemplate={FormTemplate}
                    componentMapper={componentMapper}
                    onSubmit={console.log}
                />
            </Grid>
        </Grid>
    );
}