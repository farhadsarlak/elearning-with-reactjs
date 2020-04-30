import React,{Fragment} from "react";
import './404.css';
import {Helmet} from "react-helmet";

const NotFound=()=>{

    return(
        <Fragment>
	    <Helmet>
		<title> صفحه مورد نظر پیدا نشد </title>
	    </Helmet>
	    <div className="error-page">
		<div>
		    <h1 data-h1="404">404</h1>
		    <p data-p="NOT FOUND">صفحه مورد نظر پیدا نشد</p>
		</div>
	    </div>
	</Fragment>
    )
};

export default NotFound;
