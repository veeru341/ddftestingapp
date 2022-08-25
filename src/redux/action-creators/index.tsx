import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const depositMoney = (amount: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const editschema = (amount: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.EDITSCHEMA,
            payload: amount
        })
    }
}

export const deleteschema = (amount: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETESCHEMA,
            payload: amount
        })
    }
}

export const isloggedin = (amount: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ISLOGGEDIN,
            payload: amount
        })
    }
}

export const jsonstructure = (amount: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.JSONSTRUCTURE,
            payload: amount
        })
    }
}

export const jsonstructureedit = (amount: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.JSONSTRUCTUREEDIT,
            payload: amount
        })
    }
}

export const jsonstructureeditsave = (amount: any) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.JSONSTRUCTUREEDITSAVE,
            payload: amount
        })
    }
}