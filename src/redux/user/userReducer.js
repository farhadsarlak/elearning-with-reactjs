import {userTypes} from "./userTypes";

const userReducer = (state={},actions)=> {
    switch ((actions.type)) {
	case userTypes.SET_USER:
	    return {...actions.payload};

	case userTypes.CLEAR_USER:
	    return {...actions.payload};

	case userTypes.USER_FETCH_START:
	    return {
	        ...state,
		isLoading:true
	    };
	case userTypes.USER_FETCH_END:
	    return {
	        ...state,
		isLoading: false
	    };
	default:
	    return state;
    }
};

export default userReducer;
