import React,{useEffect} from "react";
import {withRouter} from "react-router";
import {useDispatch} from "react-redux";
import {clearUser} from "../../redux/user/userActions";
import {Redirect} from "react-router";

const Logout =({history})=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        localStorage.removeItem("token");
        dispatch(clearUser());
        history.push("/");
    },[dispatch,history]);

    return (
        <Redirect to={"/"}/>
    )
};

export default withRouter(Logout)
