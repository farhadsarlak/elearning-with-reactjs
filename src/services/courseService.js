import config from './config.json';
import httpService from "./httpService";

export const getCourses = ()=>{
    return httpService.get(`${config.api}/api/courses`);
};
export const getCourse = (courseId) => {
    return httpService.get(`${config.api}/api/course/${courseId}`);
};

export const newCourse = (course) => {
    return httpService.post(`${config.api}/api/course`, course);
};

export const deleteCourse = (courseId) => {
    return httpService.delete(`${config.api}/api/course/${courseId}`);
};

export const updateCourse = (courseId, course) => {
    return httpService.put(`${config.api}/api/course/${courseId}`, course);
};
