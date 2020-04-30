import React from "react";
import {Button, Icon, Modal} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {handleCourseDelete} from "../../../../../redux/courses/coursesActions";

const DeleteCourseDialog = ({showModal,closeModal,course}) =>{

    const dispatch =useDispatch();

    return(
        <Modal
	    open={showModal}
	    onClose={closeModal}
	    size={"small"}
	    dimmer={"blurring"}
	>
	    <Modal.Header>
		<Icon name={"trash alternate outline"} />
		حذف
		{" "} {course.title}
	    </Modal.Header>
	    <Modal.Content>
		آیا از حذف  {course.title} مطمئن هستید؟
	    </Modal.Content>
	    <Modal.Actions>
		<Button
		    positive
		    content={"بله کاملا"}
		    secondary
		    labelPosition={"left"}
		    icon={"check"}
		    onClick={()=>{
		        dispatch(handleCourseDelete(course._id));
		        closeModal();
		    }}
		/>
		<Button
		    negative
		    content={"خیر"}
		    secondary
		    labelPosition={"left"}
		    icon={"cancel"}
		    onClick={()=>closeModal()}
		/>
	    </Modal.Actions>
	</Modal>
    )
};
export default DeleteCourseDialog;
