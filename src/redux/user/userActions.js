import {userTypes} from "./userTypes";

export const addUser= user => {
   return async dispatch => {
	await dispatch({
	    type: userTypes.SET_USER,
	    payload: user
	})
    }
};

export const clearUser= ()=> {
    return async dispatch=>{
        await dispatch({
	    type: userTypes.CLEAR_USER,
	    payload: {}
	})
    }}
;

export const fetchStart=()=>({
    type:userTypes.USER_FETCH_START
});

export const fetchEnd=()=>({
    type:userTypes.USER_FETCH_END
});

