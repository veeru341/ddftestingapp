import React, { Fragment, useState } from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import TextField from '@data-driven-forms/mui-component-mapper/text-field';
import fieldArray from '@data-driven-forms/mui-component-mapper/field-array';
import { Select, Radio, Checkbox, Textarea, FormFieldGrid } from '@data-driven-forms/mui-component-mapper';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl } from '@mui/material';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import Editor from '@data-driven-forms/editor-pro/editor'

import {
  DataGridPro,
  GridApi,
  GridCellValue,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
  useGridApiRef
} from '@mui/x-data-grid-pro';
import { propsToClassKey } from '@mui/styles';


const columns: GridColDef[] = [
  { 
    field: "id",
    headerName: "ID",
    width: 90
  },
  {
    field: "parameter",
    headerName: "Parameter",
    width: 150,
    editable: true
  },
  {
    field: "lastName",
    headerName: "Value",
    width: 150,
    editable: true
  },
  {
    field: "education",
    headerName: "UOM",
    width: 150,
    editable: true
  },
  {
    field: "min",
    headerName: "Min",
    width: 150,
    editable: true
  },
  {
    field: "max",
    headerName: "Max",
    width: 150,
    editable: true
  },
  {
    field: "mapName1",
    headerName: "Map Name 1",
    width: 150,
    editable: true
  }
];


//START- Schema
const schema2 = {
  fields: [
    {
      name: 'layout',
      component: 'two-columns',
      "fields": [
        {
          component: 'select',
          name: 'parameter',
          label: 'Select Equipment Family',
          options: [
            { value: 'Thickness', label: 'Thickness' },
            { value: 'Spin Speed', label: 'Spin Speed' },
            { value: 'Recipe Name', label: 'Recipe Name' }
          ]
        },
        {
          component: 'select',
          name: 'lastName',
          label: 'Select Equipment',
          options: [
            { value: '0.7', label: '0.7' },
            { value: '2', label: '2' },
            { value: 'ETCH', label: 'ETCH' }
          ]
        },
        {
          component: 'select',
          name: 'education',
          label: 'Select Spec',
          options: [
            { value: 'mm', label: 'mm' },
            { value: 'kk', label: 'kk' },
            { value: 'Text', label: 'Text' }
          ]
        },
        {
          component: 'select',
          name: 'min',
          label: 'Product',
          options: [
            { value: '0.5', label: '3' },
            { value: '3', label: '3' },
            { value: 'sample text', label: 'sample text' }
          ]
        },
        {
          component: 'select',
          name: 'max',
          label: 'Process Spec',
          options: [
            { value: '0.9', label: '0.9' },
            { value: '5', label: '5' },
            { value: 'sample text', label: 'sample text' }
          ]
        },
        {
          "component": "text-field",
          "name": "Comments",
          "label": "Comments",
          resolveProps: (props: any, { meta, input }: any, formOptions: any) => {
            console.log("Commnets: " + input.value);
          },
        },
        {
          "component": "button",
          "name": "btn3",
          "label": "Get Details ",
          icon: <SendIcon />,
          clickhandler: (formOptions: any) => {
            {
              fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then(
                  (result) => {
                    formOptions.change('Comments', JSON.stringify(result));

                  },
                  (error) => {
                    alert('Error');
                  }
                )
            }
          },
          resolveProps: (props: any, { meta, input }: any, formOptions: any) => {
            console.log("btn: " + props);
          }
        },
        {
          "component": "button",
          "name": "btn",
          "label": "Copy Text",
          icon: <SendIcon />,
          clickhandler: (formOptions: any) => {
            formOptions.change('Comments', formOptions.getState().values.Name);
          },
          resolveProps: (props: any, { meta, input }: any, formOptions: any) => {
            console.log("btn: " + props);
          }
        },
        {
          "component": "button",
          "name": "btn2",
          "label": "Add Recipe",
          icon: <SendIcon />,
          clickhandler: (formOptions: any) => {
            let newid= Math.trunc(Math.random()*100);
            let newrows = [{
              id:newid,
              parameter: formOptions.getState('Parameter').values.parameter,
              lastName: formOptions.getState('LastName').values.lastName,
              education: formOptions.getState('Education').values.education,
              min: formOptions.getState('Min').values.min,
              max: formOptions.getState('Max').values.max,
              mapName1: formOptions.getState('Max').values.max,
              handlRows : formOptions.schema.fields[0].fields[12].handleClick,
              form :formOptions.schema.fields[0].fields[12].formAPI[0],
              grid :formOptions.schema.fields[0].fields[12].gridAPI[0]
            }];
            formOptions.schema.fields[0].fields[12].gridAPI[0].current.updateRows(newrows);
            formOptions.change('mygrid',JSON.stringify(formOptions.schema.fields[0].fields[12].value));
            formOptions.schema.fields[0].fields[8].options.push({ value: Math.random() * 100, label: formOptions.getState().values.Name });
          },
          resolveProps: (props: any, { meta, input }: any, formOptions: any) => {
            console.log("btn: " + props);
          }
        },
        {
          "component": "filler",
          "name": "filler1",
          "label": "filler1",
          xs: "4",
          onBlur: (e: any) => { },
        },
        {
          "component": "filler",
          "name": "filler1",
          "label": "filler1",
          xs: "12",
          onBlur: (e: any) => { },
        },
        {
          component: 'field-array',
          name: 'empList',
          id: 'fieldArray',
          label: 'Add Employee',
          noItemsMessage: 'None',
          buttonLabels: {
            add: 'Add',
            remove: 'Remove'
          },
          AddButtonProps: {
            size: 'small'
          },
          RemoveButtonProps: {
            size: 'small'
          },
          fields: [
            {
              component: 'text-field',
              name: 'Add Employee',
              label: 'Text'
            },
            {
              component: 'select',
              name: 'select',
              label: 'Emp Type',
              options: [
                { value: 'Admin', label: 'Admin' },
                { value: 'Dev', label: 'Dev' }
              ]
            }
          ]
        },
        {
          component: "dgrid",
          name: "mygrid",
          columns: columns,
          gridAPI:[],
          formAPI:[],
          rows: [
            { id: 1, parameter: "sample", lastName: "sample text", education: "sample text", min : "sample text", max: "sample text"},
            { id: 2, parameter: "sample", lastName: "sample text", education: "sample text", min : "sample text", max: "sample text"},
          ],
          handleClick: (a: any, b: any,gridAPi:any) => {
            // debugger;
            let x = JSON.parse(a).fullName;
            b.change("Name", x);
          },
          resolveProps: (props: any, { meta, input }: any, formOptions: any) => {
            debugger;
            console.log("grid: " + input.value);
          },
        }
      ]
    }
  ]
};



//END- Schema

const TwoColumns = ({ fields }: any) => {
  const formOptionss = useFormApi();

  return (
    <Fragment>
      <Grid container spacing={2} style={{ display: 'flex', margin: 20 }}>
        {fields.map((field: any) => (

          ((field.component != "dgrid"&& field.component != "filler") && (<Grid key={field.name} item xs={4} >
            {(field.component == "select") &&
              (<div style={{ marginTop: "-16px" }}>
                {formOptionss.renderForm([field])}
              </div>)}

            {(field.component != "select") &&
              (<div >
                {formOptionss.renderForm([field])}
              </div>)
            }
          </Grid>))
          ||

          ((field.component == "dgrid") && (<Grid key={field.name} item xs={12} >
            {(field.component == "select") &&
              (<div style={{ marginTop: "-16px" }}>
                {formOptionss.renderForm([field])}
              </div>)}

            {(field.component != "select") &&
              (<div >
                {formOptionss.renderForm([field])}
              </div>)
            }
          </Grid>))


          ||

          ((field.component == "filler") && (<Grid key={field.name} item xs={field.xs} >
            {(field.component == "select") &&
              (<div style={{ marginTop: "-16px" }}>
                {formOptionss.renderForm([field])}
              </div>)}

            {(field.component != "select") &&
              (<div >
                {formOptionss.renderForm([field])}
              </div>)
            }
          </Grid>))


        ))}
      </Grid>
    </Fragment>
  );
};

const Filler = (props: any) => {
  const {
    input,
    isReadOnly,
    isDisabled,
    placeholder,
    isRequired,
    label,
    helperText,
    description,
    validateOnMount,
    meta,
    inputProps,
    FormFieldGridProps,
    ...rest
  } = useFieldApi(props);
  const formApi = useFormApi();
  // const invalid = validationError(meta, validateOnMount);
  return (
    <FormFieldGrid {...FormFieldGridProps}>

      <div>
        {/* <input type="text" name={input.name} style={{display:"none"}}/> */}
      </div>
      {/* <Button variant="contained" endIcon={props.icon} name={input.name} onClick={(e) => {
        props.clickhandler(formApi);
      }}>
        {label}
      </Button> */}
      {/* <input type="button" value="HEllo"/> */}
    </FormFieldGrid>

  )
}

const Button2 = (props: any) => {
  const {
    input,
    isReadOnly,
    isDisabled,
    placeholder,
    isRequired,
    label,
    helperText,
    description,
    validateOnMount,
    meta,
    inputProps,
    FormFieldGridProps,
    ...rest
  } = useFieldApi(props);
  const formApi = useFormApi();
  // const invalid = validationError(meta, validateOnMount);
  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <Button variant="contained" endIcon={props.icon} name={input.name} onClick={(e) => {
        props.clickhandler(formApi);
      }}>
        {label}
      </Button>
      {/* <input type="button" value="HEllo"/> */}
    </FormFieldGrid>

  )
}

const Grd = (props: any) => {
  const {
    input,
    isReadOnly,
    isDisabled,
    placeholder,
    isRequired,
    label,
    helperText,
    description,
    validateOnMount,
    meta,
    inputProps,
    FormFieldGridProps,
    ...rest
  } = useFieldApi(props);
  const formApi = useFormApi();
  const apiRef = useGridApiRef();
  // const invalid = validationError(meta, validateOnMount);
  props.gridAPI[0] = apiRef;
  props.formAPI[0] = formApi;
  props.rows.forEach((element: any) => {
    element.handlRows = props.handleClick;
    element.form = formApi;
    element.grid = apiRef;
  });
  debugger;
  input.value = JSON.stringify(props.rows, (key, value) => {
    if (key == "form" || key == "grid" || key == "handleRows") {
      // alert();
      return "";
    }
    return value;
  });
  debugger;
  return (

    <FormFieldGrid {...FormFieldGridProps}>
      <div  style={{ height: 250, width: "100%" }} >
        <DataGridPro   apiRef={apiRef}
          rows={props.rows}
          columns={props.columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          // disableSelectionOnClick
        />
      </div>
    </FormFieldGrid>
  )
}

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.RADIO]: Radio,
  [componentTypes.SELECT]: Select,
  [componentTypes.CHECKBOX]: Checkbox,
  [componentTypes.TEXTAREA]: Textarea,
  [componentTypes.BUTTON]: Button2,
  [componentTypes.FIELD_ARRAY]: fieldArray,
  'two-columns': TwoColumns,
  'dgrid': Grd,
  'filler': Filler
};


const App = () => (


  <>
    <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema2} onSubmit={(d) => alert(JSON.stringify(d))} />
    {/* <br />
    <hr />
    <h1>Form Editor</h1>
    <div style={{ marginTop: "30px" }}>
      <Editor />
    </div> */}


  </>
);

export default App;