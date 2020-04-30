import {sliderTypes} from "./sliderTypes";

const INITIAL_STATE= {
    homeSliderCount:4,
    homeAutoplaySpeed:4000,
    freeCourseSliderCount:2,
    freeCourseSliderSpeed:3000,
    freeCourseColorFrom:"rgba(130,225,64,0.4)",
    freeCourseColorTo:"rgba(53,150,88,.6)",
    lastCoursesSliderCount:4,
    lastCoursesSliderSpeed:3000,
    lastCoursesColorFrom:"rgba(255, 176, 176,.5)",
    lastCoursesColorTo:"rgba(212, 47, 47,0.8)",

};

const sliderReducer = (state= INITIAL_STATE, action)=>{
    switch (action.type) {
        // ---------------------- home ---------------------------
	case sliderTypes.HOME_SLIDER_COUNT:
	    return {
	        ...state,
		homeSliderCount: action.payload
	    };

	case sliderTypes.HOME_AUTOPLAY_SPEED:
	    return {
	        ...state,
		homeAutoplaySpeed: action.payload
	    };

	// ---------------------- free ---------------------------
	case sliderTypes.FREE_COURSE_SLIDER_COUNT:
	    return {
	        ...state,
		freeCourseSliderCount: action.payload
	    };

	case sliderTypes.FREE_COURSE_AUTOPLAY_SPEED:
	    return {
		...state,
		freeCourseSliderSpeed: action.payload
	    };

	case sliderTypes.FREE_COURSE_BG_COLOR_FROM:
	    return {
		...state,
		freeCourseColorFrom: action.payload
	    };
	case sliderTypes.FREE_COURSE_BG_COLOR_TO:
	    return {
		...state,
		freeCourseColorTo: action.payload
	    };

	// ---------------------- last ---------------------------
	case sliderTypes.LAST_COURSES_SLIDER_COUNT:
	    return {
		...state,
		lastCoursesSliderCount: action.payload
	    };

	case sliderTypes.LAST_COURSES_AUTOPLAY_SPEED:
	    return {
		...state,
		lastCoursesSliderSpeed: action.payload
	    };
	case sliderTypes.LAST_COURSES_BG_COLOR_FROM:
	    return {
		...state,
		lastCoursesColorFrom: action.payload
	    };
	case sliderTypes.LAST_COURSES_BG_COLOR_TO:
	    return {
		...state,
		lastCoursesColorTo: action.payload
	    };
	default: return state;
    }
};

export default sliderReducer;
