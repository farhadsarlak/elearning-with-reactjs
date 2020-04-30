import React,{useContext,useState} from "react";

import {Modal, Form, Button, Icon} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {dashboardContext} from "../../../../context/dashboardContext";
import {createNewCourse} from "../../../../../redux/courses/coursesActions";

const AddNewCourseModal =({showModal,closeModal})=>{

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [info, setInfo] = useState();

    const[,forceUpdate]=useState();

    const dispatch = useDispatch();

    const context=useContext(dashboardContext);
    const {validator}= context;

    const handleSubmit = event => {
	event.preventDefault();

	try {
	    if(validator.current.allValid()) {
		let data = new FormData();
		data.append("title", title);
		data.append("price", Number.parseInt(price));
		data.append("imageUrl", event.target.imageUrl.files[0]);
		data.append("info", info);

		//Dispatch
		dispatch(createNewCourse(data));
		closeModal();
	    }else{
		validator.current.showMessages();
		forceUpdate(1);
	    }
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
		<Icon name={"add"}/>
		ایجاد دوره جدید
	    </Modal.Header>
	    <Modal.Content scrolling>
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
				validator.current.showMessageFor("title")
			    }}
			/>
			{validator.current.message("title",title,"required|min:5")}
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
				validator.current.showMessageFor("price")
			    }}
			/>
			{validator.current.message("price",price,"required|integer")}
		    <Form.Input
			required
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
			    validator.current.showMessageFor("info")
			}}
		    />
		    {validator.current.message("info",info,"required")}
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
	    </Modal.Content>

	</Modal>
    )
};
export default AddNewCourseModal;
