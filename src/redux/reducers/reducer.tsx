import { AnyNaptrRecord } from "dns";
import { ActionType } from "../action-types/index";
import { Action } from "../actions";

const initialData: any = {
    cart: [
        {
            "id": "Schema1",
            "fields": [
                {
                    "component": "select",
                    "name": "select-1660724664146",
                    "simpleValue": true,
                    "options": [],
                    "loadOptions": () =>
                        new Promise((res) =>
                            setTimeout(
                                () =>
                                    res([
                                        { value: 'first-option', label: 'First async option' },
                                        { value: 'second-option', label: 'Second async option' }
                                    ]),
                                2500
                            )
                        )
                }
            ]
        },
        {
            "id": "Schema2",
            "fields": [
                {
                    "component": "text-field",
                    "name": "text-field-1659549441058"
                },
                {
                    "component": "textarea",
                    "name": "textarea-1659549442980"
                },
                {
                    "component": "checkbox",
                    "name": "checkbox-1659549445521"
                }
            ]
        }
    ],
    schemaview: [],
    jsonstructure: [],
    jsonstructureview: [],
    isloggedin: false
}

const schemaReducer = (state: any = initialData, action: Action): any => {
    console.log("action type checking", action.type);
    console.log("action payload checking", action.payload);
    switch (action.type) {
        case ActionType.DEPOSIT:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case ActionType.WITHDRAW:
            return {
                ...state,
                schemaview: [action.payload]
            }
        case ActionType.EDITSCHEMA:
            return {
                ...state,
                cart: state.cart.map((person: any) => {
                    if (person.id === action.payload.id) {
                        return action.payload;
                    }
                    return person;
                }),
            }
        case ActionType.ISLOGGEDIN:
            return {
                ...state,
                isloggedin: action.payload
            };
        case ActionType.DELETESCHEMA:
            return {
                ...state,
                cart: state.cart.filter((item: any) => item.id !== action.payload.id)
            }
        case ActionType.JSONSTRUCTURE:
            return {
                ...state,
                jsonstructure: [...state.jsonstructure, action.payload]
            }
        case ActionType.JSONSTRUCTUREEDIT:
            return {
                ...state,
                jsonstructureview: [action.payload]
            }
        case ActionType.JSONSTRUCTUREEDITSAVE:
            return {
                ...state,
                jsonstructure: state.jsonstructure.map((person: any) => {
                    if (person.id === action.payload.id) {
                        return action.payload;
                    }
                    return person;
                }),
            }
        default:
            return state
    }
}


export default schemaReducer