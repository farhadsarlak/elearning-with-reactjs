import {coursesType} from "./coursesType";

const coursesReducer =(state=[],actions)=>{
    switch (actions.type) {
	case coursesType.GET_ALL_COURSES_START:
	    return{
	        ...state,
		loading:true
	    };
	case coursesType.GET_ALL_COURSES_SUCCESS:
	    return [...actions.payload];

	case coursesType.GET_ALL_COURSES_END:
	    return{
		...state,
		loading:false
	    };

	case coursesType.ADD_COURSE:
	    return [...actions.payload];

	case coursesType.DELETE_COURSE:
	    return [...actions.payload];

	case coursesType.UPDATE_COURSE:
	    return [...actions.payload];

	default: return state;
    }
};
export default coursesReducer;
