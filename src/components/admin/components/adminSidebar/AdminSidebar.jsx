import React,{Fragment} from "react";
import {Link} from "react-router-dom";

const AdminSidebar = ()=>{

    return(
	<Fragment>
	    <Link
		className="item"
		to={"/dashboard"}
	    >
		<i aria-hidden="true" className="dashboard icon"/>
		داشبورد
	    </Link>

	    <Link
		className="item"
		to={"/dashboard/courses"}
	    >
		<i aria-hidden="true" className="graduation cap icon"/>
		دوره ها
	    </Link>

	    <Link
		className="item"
		to={"/dashboard/users"}
	    >
		<i aria-hidden="true" className="users icon"/>
		کاربران
	    </Link>

	    <Link
		className="item"
		to={"/dashboard/settings"}
	    >
		<i aria-hidden="true" className="settings icon"/>
		تنظیمات
	    </Link>
	</Fragment>
    )
};

export default AdminSidebar;
