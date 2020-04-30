import React, {Fragment, useContext} from "react";

import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";
import {Button, Form, Icon} from "semantic-ui-react";
import {context} from "../context/loginRegisterContext";

const Login =()=>{

    const isUserLoading= useSelector(state=> state.user.isLoading);

    const loginUserContext= useContext(context);

    const {
        email,
	setEmail,
	password,
	setPassword,
	handleLogin,
	validator
    }= loginUserContext;

    return(
       <Fragment>
	   <Helmet>
	       <title>آموزش مجازی | ورود به سایت </title>
	   </Helmet>
	   <Form
	       loading={isUserLoading===true ? isUserLoading : false}
	       onSubmit={e => handleLogin(e)}
	   >
	       <Form.Input
		   icon={"mail"}
		   type={"email"}
		   name={"email"}
		   required
		   label={"ایمیل:"}
		   placeholder={"لطفا ایمیل خود را وارد نمایید"}
		   width={12}
		   value={email}
		   style={{margin:"10px 0"}}
		   onChange={e=> {
		       setEmail(e.target.value);
		       validator.current.showMessageFor("email")
		   }}
	       />
	       {
	           validator.current.message("email",email,"required|email")
	       }
	       <Form.Input
		   icon={"lock"}
		   type={"password"}
		   name={"password"}
		   required
		   label={"کلمه عبور"}
		   placeholder={"لطفا کلمه عبور خود را وارد نمایید"}
		   width={12}
		   value={password}
		   style={{margin:"10px 0"}}
		   onChange={e=> {
		       setPassword(e.target.value);
		       validator.current.showMessageFor("password")
		   }}
	       />
	       {
	           validator.current.message("password",password,"required|min:5")
	       }

	       <Button
		   icon
		   basic
		   color={"teal"}
		   labelPosition={"left"}
		   size={"small"}
		   style={{margin:"20px 0"}}
		   >
		   <Icon name={"sign-in"}/>
		   ورود
	       </Button>
	   </Form>
       </Fragment>
    )
};

export default Login;
