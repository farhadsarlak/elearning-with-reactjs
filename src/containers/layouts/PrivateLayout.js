import React from "react";
import {Container} from "semantic-ui-react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import AdminMainMenu from "../../components/admin/components/adminMainMenu/AdminMainMenu";
import AdminSidebar from "../../components/admin/components/adminSidebar/AdminSidebar";
import {hideSidebar} from "../../redux/sidebar/sidebarActions";

const PrivateLayout = ({children})=>{

    const user = useSelector((state) => state.user);
    const sidebar = useSelector(state => state.sidebar);
    const dispatch = useDispatch();

    return(
        <Container fluid>
	    <Helmet>
		<title>پنل ادمین | داشبورد</title>
	    </Helmet>

	    <AdminMainMenu user={user} />

	    <div className={"ui pushable"}>
		<div
		    className={`${sidebar.sidebarOpen&& "visible"} ui vertical labeled icon ui push left thin sidebar menu`}
		>
		    <AdminSidebar />
		</div>

		<div
		    onClick={()=> sidebar.sidebarOpen && dispatch(hideSidebar())}
		    className={`pusher ${sidebar.sidebarOpen&& "dimmed"} `}
		>
		    <Container fluid style={{height:"150vh"}}>
			{children}
		    </Container>
		</div>
	    </div>
	</Container>
    )
};
export default PrivateLayout;
