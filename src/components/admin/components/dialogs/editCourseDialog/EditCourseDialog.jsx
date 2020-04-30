import React,{useState,useEffect} from "react";
import './EditCourseDialog.css';
import {Button, Form, Icon, Modal,Image} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {handleCourseUpdate} from "../../../../../redux/courses/coursesActions";
import config from '../../../../../services/config';
import {withRouter} from "react-router";

const EditCourseDialog =({showModal,closeModal,course,history}) =>{

    const [courseId,setCourseId] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const[imageUrl,setImageUrl]=useState();
    const [info, setInfo] = useState();

    const dispatch = useDispatch();

    useEffect(()=>{
	setCourseId(course._id);
	setTitle(course.title);
	setPrice(course.price);
	setImageUrl(course.imageUrl);
	setInfo(course.info);
	return()=>{
	    setCourseId();
	    setTitle();
	    setPrice();
	    setImageUrl();
	    setInfo();
	}
    },[course]);

    const handleSubmit = event => {
	event.preventDefault();

	try {
	    let data = new FormData();
	    data.append("title", title);
	    data.append("price", Number.parseInt(price));

	    if(event.target.imageUrl.files[0])
		data.append("imageUrl", event.target.imageUrl.files[0]);
	    else
		data.append("imageUrl",imageUrl);

	    data.append("info", info);

	    //Dispatch
	    dispatch(handleCourseUpdate(courseId,data));
	    closeModal();
	    history.push("/dashboard/courses")
	} catch (ex) {
	    console.log(ex);
	}
    };

    return(
	<Modal
	    dimmer={"blurring"}
	    open={showModal}
	    onClose={closeModal}
	    size={"fullscreen"}
	>
	    <Modal.Header>
		<Icon name={"edit outline"}/>&nbsp;
		ویرایش&nbsp;&nbsp;{title}
	    </Modal.Header>
	    <Modal.Content scrolling image>
		<Image
		    size='medium'
		    className={"imageContent"}
		    src={`${config.api}/${course.imageUrl}`}
		    wrapped
		    verticalAlign={"middle"}
		/>
		<Modal.Description className={"modalDescription"}>
		    <Form onSubmit={handleSubmit}>
			<Form.Input
			    required
			    type="text"
			    name="title"
			    label='عنوان دوره:'
			    placeholder='عنوان دوره' width={8}
			    value={title}
			    onChange={e=>{
				setTitle(e.target.value);
			    }}
			/>
			<Form.Input
			    required
			    type="text"
			    name="price"
			    label='قیمت دوره:'
			    placeholder='قیمت دوره'
			    width={8}
			    value={price}
			    onChange={e=>{
				setPrice(e.target.value);
			    }}
			/>
			<Form.Input
			    name={"imageUrl"}
			    type={"file"}
			    label='تصویر دوره:'
			    width={8}
			    aria-describedby="imageUrl"
			/>
			<Form.TextArea
			    className={"ModalTextArea"}
			    rows={10}
			    required
			    label={"توضیحات دوره:"}
			    placeholder={"توضیحات در مورد دوره"}
			    value={info}
			    onChange={e => {
				setInfo(e.target.value);
			    }}
			/>
			<Button
			    icon
			    basic
			    color={"teal"}
			    labelPosition={"left"}
			    size={"small"}
			    style={{margin:"20px"}}
			>
			    <Icon name={"send"}/>
			    ارسال
			</Button>

			<Button
			    icon
			    basic
			    negative
			    labelPosition={"left"}
			    size={"small"}
			    style={{margin:"20px"}}
			    onClick={()=>closeModal()}
			>
			    <Icon name={"cancel"}/>
			    انصراف
			</Button>
		    </Form>
		</Modal.Description>
	    </Modal.Content>
	</Modal>
    )
};

export default withRouter(EditCourseDialog);
