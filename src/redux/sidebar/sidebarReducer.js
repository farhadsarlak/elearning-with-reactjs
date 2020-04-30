import {sidebarType} from "./sidebarTypes";

const INITIAL_STATE = {
    sidebarOpen:false
};

const sidebarReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
	case sidebarType.TOGGLE_SIDEBAR:
	    return{
	        ...state,
		sidebarOpen: !state.sidebarOpen
	    };
	case sidebarType.HIDE_SIDEBAR:
	    return {
		sidebarOpen: false
	    };
	default: return state;
    }
};

export default sidebarReducer;
