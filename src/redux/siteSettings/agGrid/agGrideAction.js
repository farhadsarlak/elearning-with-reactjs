import {agGridTypes} from "./agGridTypes";

export const setAgGridSettings = data =>({
    type:agGridTypes.SET_SETTINGS,
    payload:data
});
