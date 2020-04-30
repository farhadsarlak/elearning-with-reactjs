import React,{useEffect,useState,useRef} from "react";
import SimpleReactValidator from "simple-react-validator";
import { dashboardContext } from "./dashboardContext";
import {paginate} from "../../utils/Paginate";
import AddNewCourseModal from "../admin/components/dialogs/addNewCourse/AddNewCourse";
import EditCourseDialog from "../admin/components/dialogs/editCourseDialog/EditCourseDialog";
import DeleteCourseDialog from "../admin/components/dialogs/deleteCourseDialog/DeleteCourseDialog";

const AdminDashboardContext = ({courses,children}) =>{

    const [currentPage,setCurrentPage] = useState(1);
    const [perPage] = useState(10);

    const [currentCourse,setCurrentCourse] = useState({});
    const [courseList,setCourseList]=useState([]);

    const [newCourseDialog, setNewCourseDialog] = useState(false);
    const [editCourseDialog, setEditCourseDialog] = useState(false);
    const [deleteCourseDialog, setDeleteCourseDialog] = useState(false);

    const openEditCourseDialog = course =>{
	setEditCourseDialog(true);
	setCurrentCourse(course);
    };

    const closeEditCourseDialog=()=>setEditCourseDialog(false);


    const openDeleteCourseDialog = course =>{
	setDeleteCourseDialog(true);
	setCurrentCourse(course);
    };

    const closeDeleteCourseDialog=()=>setDeleteCourseDialog(false);


    const openNewCourseDialog = () => setNewCourseDialog(true);

    const closeNewCourseDialog = () => setNewCourseDialog(false);

    const handlePaginationChange = (e, { activePage }) => {
	setCurrentPage(activePage);
    };

    const totalPage =Math.ceil((courses.length)/perPage);

    useEffect(()=>{
	setCourseList(courses)
    },[courses]);

    const courseData = paginate(courseList,currentPage,perPage);

    const validator = useRef(new SimpleReactValidator({
	messages:{
	    required:"پرکردن این فیلد الزامی است",
	    min: `حداقل کاراکتر ورودی 5 می باشد`,
	    email: "ایمیل وارد شده صحیح نیست",
	    integer:"قیمت باید بصورت عددی وارد شود"
	},
	element: message =>
	    <div
		style={{color:"red",padding:"0 5px 10px 5px",fontSize:"12px",fontWeight:"bold"}}>
		{message}
	    </div>
    }));
    return(
        <dashboardContext.Provider
	    value={{
		currentPage,
		perPage,
		handlePaginationChange,
		courseData,
		openNewCourseDialog,
		openEditCourseDialog,
		openDeleteCourseDialog,
		validator,
		totalPage
	    }}
	>
	    <AddNewCourseModal
		showModal={newCourseDialog}
		closeModal={closeNewCourseDialog}
	    />

	    <EditCourseDialog
		showModal={editCourseDialog}
		closeModal={closeEditCourseDialog}
		course={currentCourse}
	    />

	    <DeleteCourseDialog
		showModal={deleteCourseDialog}
		closeModal={closeDeleteCourseDialog}
		course={currentCourse}
		/>

	    {children}

	    </dashboardContext.Provider>
    )
};

export default AdminDashboardContext;
