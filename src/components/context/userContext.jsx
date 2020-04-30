import React, {useEffect, useRef, useState} from "react";

import {context} from "./loginRegisterContext";
import {useDispatch} from "react-redux";

import SimpleReactValidator from "simple-react-validator";
import {addUser, fetchEnd, fetchStart} from "../../redux/user/userActions";
import {loginUser, registerUser} from "../../services/userService";
import {errorMessage, successMessage} from "../../utils/showMessage";
import {decodedToken} from "../../utils/decodedToken";
import {withRouter} from "react-router";

const UserContext =({children,history})=>{

    const [fullname,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [,forceUpdate] =useState();

    useEffect(()=>{
	return ()=>{
	    setPassword();
	    setFullName();
	    setEmail();
	    forceUpdate();
	}
    },[]);

    const dispatch= useDispatch();

    const validator = useRef(new SimpleReactValidator({
	messages:{
	    required:"پر کردن این فیلد الزامی است",
	    min:"حداقل کاراکتر ورودی 5 می باشد",
	    email:"ایمیل وارد شده صحیح نیست"
	},
	element: message => <div style={{color:"red" , paddingBottom:"10px",fontSize:"13px",fontWeight:"bold"}}> {message} </div>
    }));


    const handleLogin =async e =>{
	e.preventDefault();

	const user={
	    password,
	    email
	};

	try {
	    if (validator.current.allValid()) {
		dispatch(fetchStart());
		const {status, data} = await loginUser(user);
		if (status === 200) {
		    successMessage("ورود با موفقیت انجام شد ");
		    localStorage.setItem("token", data.token);
		    dispatch(addUser(decodedToken(data.token).payload.user));
		    dispatch(fetchEnd());
		    history.replace("/");
		}
	    }else {
		validator.current.showMessages();
		forceUpdate(1);
	    }
	}catch (e) {
	    errorMessage("مشکلی پیش آمده.");
	    dispatch(fetchEnd());
	}
    };

    const handleRegister = async event =>{
        event.preventDefault();
        const user ={
            fullname,
	    email,
	    password
	};

	try {
	  if(validator.current.allValid()){
	      dispatch(fetchStart());
	      const {status} = await registerUser(user);
	      if(status ===201){
	          successMessage("اکانت شما با موفقیت ساخته شد، لطفا وارد شوید");
	          dispatch(fetchEnd());
	      }
	  }else{
	      validator.current.showMessages();
	      forceUpdate(1);
	  }
	}catch (e) {
	    errorMessage("خطا در ارسال اطلاعات، لطفا دوباره تلاش کنید")
	}
    };


    return(
        <context.Provider
	    value={{
	        fullname,
		setFullName,
		email,
		setEmail,
		password,
		setPassword,
		validator,
		handleRegister,
		handleLogin
	    }}
	>
	    {children}
	</context.Provider>
    )
};

export default withRouter(UserContext);
