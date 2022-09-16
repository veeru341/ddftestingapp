import { ActionType } from "../action-types/index"

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: any
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: any
}

interface EditScehmaAction {
    type: ActionType.EDITSCHEMA,
    payload: any
}

interface DeleteSchemaAction {
    type: ActionType.DELETESCHEMA,
    payload: any
}

interface IsLoggedinAction {
    type: ActionType.ISLOGGEDIN,
    payload: any
}

interface JsonStructure {
    type: ActionType.JSONSTRUCTURE,
    payload: any
}

interface JsonStructureEdit {
    type: ActionType.JSONSTRUCTUREEDIT,
    payload: any
}

interface JsonStructureEditSave {
    type: ActionType.JSONSTRUCTUREEDITSAVE,
    payload: any
}

interface TableData {
    type: ActionType.TABLEDATA,
    payload: any
}

export type Action = DepositAction | WithdrawAction | EditScehmaAction | IsLoggedinAction | DeleteSchemaAction | JsonStructure | JsonStructureEdit | JsonStructureEditSave | TableData