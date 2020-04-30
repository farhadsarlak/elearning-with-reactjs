import {createContext} from 'react';

export const dashboardContext = createContext({
    currentPage:1,
    handlePaginationChange:()=>{},
    setCurrentPage:()=>{},
    perPage:5,
    currentCourse:{},
    setSearch:()=>{},
    openNewCourseDialog:()=>{},
    openEditCourseDialog:()=>{},
    openDeleteCourseDialog:()=>{},
    courseData:[],
    filteredCourseAsc:()=>{},
    sortCourseDes:()=>{},
    validator:null
});
