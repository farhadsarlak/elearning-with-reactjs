import {paginateTypes} from "./paginateTypes";
const INITIAL_STATE ={
    perPage: 6,
    currentPage: 1,
    activePagination:true,
    activeScrollData:false,
    scrollLength:5
};
const paginateReducer= (state= INITIAL_STATE, action) =>{

    switch (action.type) {

	case paginateTypes.SET_PER_PAGE:
	    return{
		...state,
		perPage: action.payload
	    };

	case paginateTypes.SET_CURRENT_PAGE:
	    return {
		...state,
		currentPage: action.payload
	    };

	case paginateTypes.TOGGLE_ACTIVE_PAGINATE:
	    return {
		...state,
		activePagination: !state.activePagination,
		activeScrollData: !state.activeScrollData
	    };

	case paginateTypes.TOGGLE_ACTIVE_SCROLL_DATA:
	    return {
	        ...state,
		activeScrollData: !state.activeScrollData,
		activePagination: !state.activePagination
	    };

	case paginateTypes.SET_SCROLL_LENGTH:
	    return {
	        ...state,
		scrollLength: action.payload
	    };

	default:
	    return state
    }
};

export default paginateReducer;


