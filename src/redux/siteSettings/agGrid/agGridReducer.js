import {agGridTypes} from "./agGridTypes";

const INITIAL_STATE= {
    minWidth: 100,
    sortable: true,
    filter: true,
    resizable: true,
    autoHeight: true,
    autoSize:true,
    floatingFilter: true
};

const agGridReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {

	case agGridTypes.SET_SETTINGS:
	    return{
		...action.payload
	    };

	default: return state;
    }
};

export default agGridReducer;
