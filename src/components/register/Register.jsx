import React,{useContext} from "react";
import {context} from "../context/loginRegisterContext";
import {Helmet} from "react-helmet";
import {Button, Form, Icon} from "semantic-ui-react";
import {useSelector} from "react-redux";

const Register = ()=>{

    const registerContext = useContext(context);
    const isUserLoading= useSelector(state=> state.user.isLoading);

    const {
	fullname,
	setFullName,
	email,
	setEmail,
	setPassword,
	password,
	handleRegister,
	validator
    } = registerContext;

    return(
        <div>
	    <Helmet>
		<title>آموزش مجازی| عضویت در سایت</title>
	    </Helmet>
	    <Form loading={isUserLoading? isUserLoading : false } onSubmit={e=>handleRegister(e)}>
		<Form.Input
		    icon={"user"}
		    required
		    name={"fullname"}
		    type={"text"}
		    label={"نام و نام خانوادگی:"}
		    placeholder={"نام و نام خانوادگی"}
		    value={fullname}
		    width={12}
		    onChange={e=>{
		        setFullName(e.target.value);
		        validator.current.showMessageFor("fullname")
		    }}
		/>
		{validator.current.message("fullname",fullname,"required|min:5")}

		<Form.Input
		    icon={"mail"}
		    required
		    name={"email"}
		    type={"email"}
		    label={"ایمیل:"}
		    placeholder={"ایمیل"}
		    value={email}
		    width={12}
		    onChange={e=>{
			setEmail(e.target.value);
			validator.current.showMessageFor("email")
		    }}
		/>
		{validator.current.message("email",email,"required|email")}

		<Form.Input
		    icon={"lock"}
		    required
		    name={"password"}
		    type={"password"}
		    label={"ایمیل:"}
		    placeholder={"ایمیل"}
		    value={password}
		    width={12}
		    onChange={e=>{
			setPassword(e.target.value);
			validator.current.showMessageFor("password")
		    }}
		/>
		{validator.current.message("password",password,"required|min:5")}

		<Button
		    icon
		    basic
		    color={"teal"}
		    labelPosition={"left"}
		    size={"small"}
		    style={{margin:"20px 0"}}
		>
		    <Icon name={"edit"}/>
		    ثبت نام
		</Button>

	    </Form>
	</div>
    )
};

export default Register;
