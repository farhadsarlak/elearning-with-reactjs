import {courseTypes} from "./courseTypes";
import {getCourse} from "../../services/courseService";

export const getSingleCourse = courseId => {
    return async dispatch=>{
        await dispatch({
	    type:courseTypes.GET_COURSE_START
	});

	const {data} = await getCourse(courseId);
	await dispatch({
	    type:courseTypes.GET_COURSE,
	    payload:data.course
	});

        await dispatch({
	    type:courseTypes.GET_COURSE_END
	})
    }
};
