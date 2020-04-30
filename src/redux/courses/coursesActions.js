import {coursesType} from "./coursesType";
import {deleteCourse, getCourses, newCourse, updateCourse} from "../../services/courseService";
import {successMessage} from "../../utils/showMessage";
import _ from 'lodash';

export const getAllCourses=()=>{
    return async dispatch=>{
        await dispatch({
            type:coursesType.GET_ALL_COURSES_START
        });
        const {data} = await getCourses();
        await dispatch({
            type:coursesType.GET_ALL_COURSES_SUCCESS,
            payload:data.courses
        });
        await dispatch({
            type:coursesType.GET_ALL_COURSES_END
        })
    }
};

export const createNewCourse = course =>{
    return async (dispatch,getState)=>{
        const {data,status} =await newCourse(course);
        if(status === 201) successMessage("دوره جدید با موفقیت ساخته شد");
        await dispatch({
            type: coursesType.ADD_COURSE,
            payload: [_.values(getAllCourses()), data.course],
        });
    }
};

export const handleCourseUpdate = (courseId, updatedCourse) => {
    return async (dispatch) => {
        const courses = getAllCourses();

        const filteredCourses = _.values(courses).filter(course =>course._id !== courseId);

        try {

            const { data, status } = await updateCourse(
                courseId,
                updatedCourse
            );
            if (status === 200) {
                successMessage("دوره با موفقیت ویرایش شد.");
                await dispatch({
                    type: coursesType.UPDATE_COURSE,
                    payload: [data.course,...filteredCourses],
                });
            }
        } catch (ex) {
            await dispatch({
                type: coursesType.UPDATE_COURSE,
                payload: [...courses] });
        }
    };
};

export const handleCourseDelete= courseId =>{
    return async (dispatch)=>{
        const courses = getAllCourses();
        const filteredCourses = _.values(courses).filter(course =>course._id !== courseId);

        try{
            await dispatch({
                type:coursesType.DELETE_COURSE,
                payload:[...filteredCourses]
            });
            const {status} = await deleteCourse(courseId);

            if (status===200 ) successMessage("دوره مورد نظر حذف شد")
        }catch (e) {
            await dispatch({
                type:coursesType.DELETE_COURSE,
                payload:[...courses]
            });
        }
    }
};

