import React, {useEffect, useState} from "react";
import {filterCoursesContext} from './filterCoursesContext';
import {withRouter} from "react-router";
import {paginate} from "../../utils/Paginate";
import {Segment} from "semantic-ui-react";
import {orderBy} from 'lodash';
import {useSelector} from "react-redux";

const FilterContext = ({children,location,courses,isLoading}) =>{

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = useSelector(state => state.paginateReducer.perPage);
    const activePagination = useSelector(state => state.paginateReducer.activePagination);
    const activeScrollData = useSelector(state => state.paginateReducer.activeScrollData);

    const [search,setSearch] = useState("");
    const [courseList,setCourseList]=useState(courses);
    const [checkboxValue,setCheckboxValue] = useState("all");

    const sortFieldItem=[
	{key:"title",text:"عنوان",value:"title",icon: "text height"},
	{key:"price",text:"قیمت",value:"price",icon:"money bill alternate outline"},
    ];

    const sortFieldBy=[
	{key:"asc",text:"صعودی",value:"asc",icon:"sort amount up"},
	{key:"desc",text:"نزولی",value:"desc",icon:"sort amount down"},
    ];

    const sortCourse = (type="title",order="asc") =>{
        setCourseList(orderBy(courseList,[type],[order]))
    };

    const priceRange=(array)=>{
        setCourseList(
            courses?.filter(course=> course.price>=array[0]&& course.price<=array[1])
	)
    };

    const handlePaginationChange = (e, { activePage }) => {
        setCurrentPage(activePage);
        setTimeout(()=>{
	    window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	    });
	},2)
    };


    let filterText = location.search ? (location.search.substr(1)) :"";
    const filteredCourses = courseList?.filter(course=> course.title?.toLowerCase().includes(search.toLowerCase()));


    const courseData =
		activePagination ?
	             paginate(filteredCourses, currentPage, perPage)
		    :filteredCourses;
    useEffect(()=>{
	switch (filterText) {
	    case "":
		setCourseList(courses.filter(course=> course));
		setCheckboxValue("all");
		break;

	    case "free":
		setCourseList(courses.filter(course=> course.price === 0));
		setCheckboxValue("free");
		break;
	    case "buy":
		setCourseList(courses.filter(course=> course.price >0));
		setCheckboxValue("buy");
		break;
	    default: setCourseList(courses);
	}
    },[courses,filterText]);

    const toggleCheckboxes =(e,{value})=>{
	setCheckboxValue(value);
	switch (value) {
	    case "all":
		setCourseList(courses.filter(course=> course));
		break;
	    case "buy":
		setCourseList(courses.filter(course=> course.price >0));
		break;
	    case "free":
		setCourseList(courses.filter(course => course.price ===0));
		break;

	    default: setCourseList(courses);
	}
    };


    return(
        <filterCoursesContext.Provider value={{
            priceRange,
	    activePagination,
	    activeScrollData,
	    sortFieldItem,
	    sortFieldBy,
	    toggleCheckboxes,
	    checkboxValue,
	    sortCourse,
            courses,
	    currentPage,
	    perPage,
	    handlePaginationChange,
	    setCurrentPage,
	    courseData,
	    setSearch,
	    filteredCourses,
	}}>
	    {isLoading? <Segment loading={isLoading}/>:
	        children
	    }
	</filterCoursesContext.Provider>
    )
};

export default withRouter(FilterContext);
