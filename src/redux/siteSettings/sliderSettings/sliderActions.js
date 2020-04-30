import {sliderTypes} from "./sliderTypes";

// ------------------------- homeSlider -------------------------
export const setSliderHomeCount= itemPerSlider =>{
    return async dispatch =>{
        await dispatch({
            type:sliderTypes.HOME_SLIDER_COUNT,
            payload:itemPerSlider
        })
    }
};

export const setSliderHomeSpeed= speedSlider =>{
    return async dispatch =>{
        await dispatch({
            type:sliderTypes.HOME_AUTOPLAY_SPEED,
            payload:speedSlider
        })
    }
};

//----------------------------- freeCourse Slider -----------------------------
export const setSliderFreeCourse= itemPerSlide =>{
    return async dispatch =>{
        await dispatch({
            type:sliderTypes.FREE_COURSE_SLIDER_COUNT,
            payload:itemPerSlide
        })
    }
};
export const setSliderFreeCourseSpeed= speed =>{
    return async dispatch =>{
        await dispatch({
            type:sliderTypes.FREE_COURSE_AUTOPLAY_SPEED,
            payload:speed
        })
    }
};

export const setSliderFreeCourseColorFrom= color =>{
    return async dispatch =>{
        await dispatch({
            type:sliderTypes.FREE_COURSE_BG_COLOR_FROM,
            payload:color
        })
    }
};
export const setSliderFreeCourseColorTo= color =>{
    return async dispatch =>{
        await dispatch({
            type:sliderTypes.FREE_COURSE_BG_COLOR_TO,
            payload:color
        })
    }
};
// -------------------------------- LastCourses Slider -----------------
export const setSliderLastCourse= itemPerSlide =>{
    return async dispatch =>{
        await dispatch({
            type:sliderTypes.LAST_COURSES_SLIDER_COUNT,
            payload:itemPerSlide
        })
    }
};

export const setSliderLastCourseSpeed= speed =>{
    return async dispatch =>{
        await dispatch({
            type:sliderTypes.LAST_COURSES_AUTOPLAY_SPEED,
            payload:speed
        })
    }
};

export const setSliderLastCoursesColorFrom= color =>{
    return async dispatch =>{
        await dispatch({
            type:sliderTypes.LAST_COURSES_BG_COLOR_FROM,
            payload:color
        })
    }
};
export const setSliderLastCoursesColorTo= color =>{
    return async dispatch =>{
        await dispatch({
            type:sliderTypes.LAST_COURSES_BG_COLOR_TO,
            payload:color
        })
    }
};
