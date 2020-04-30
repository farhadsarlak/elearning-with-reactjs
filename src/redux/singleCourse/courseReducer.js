import {courseTypes} from "./courseTypes";

const courseReducer = (state={},action)=>{
    switch (action.type) {
	case courseTypes.GET_COURSE_START:
	    return {
	        ...state,
		isLoading:true
	    };

	case courseTypes.GET_COURSE:
	    return {
	        ...action.payload
	    };

	case courseTypes.GET_COURSE_END:
	    return {
	        ...state,
		isLoading: false
	    };

	default: return state;
    }
};
export default courseReducer;
