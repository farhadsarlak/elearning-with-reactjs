import {createContext} from 'react';

export const filterCoursesContext = createContext({
    priceRange:()=>{},
    courses:[],
    currentPage:1,
    setCurrentPage:()=>{},
    perPage:5,
    handlePaginationChange:()=>{},
    setSearch:()=>{},
    courseData:[],
    sortCourse:()=>{},
    toggleCheckboxes:()=>{},
    checkboxValue:true,
    sortFieldItem:[],
    sortFieldBy:[],
});
