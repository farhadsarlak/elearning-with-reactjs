import React from "react";
import './AdminMainMenu.css';
import {useDispatch} from "react-redux";
import {toggleSidebar} from "../../../../redux/sidebar/sidebarActions";
import {Icon, Menu, Dropdown, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

const AdminMainMenu=({user})=>{

    const dispatch=useDispatch();

    return(
        <Menu pointing secondary inverted color={"teal"} className={"mainAdminHeader"}>
	    <Menu.Item
		style={{cursor:"pointer"}}
		onClick={()=>dispatch(toggleSidebar())}
	    >
		<Icon name={"bars"}/>
	    </Menu.Item>

	    <Menu.Item position={"right"}>
		<Button.Group color={"teal"}>
		    <Button
			as={Link}
			to={"/userSettings"}
		    >
			{user.fullname}
		    </Button>
		    <Dropdown
			className={"button icon"}
			floating
			trigger={<React.Fragment />}
		    >
			<Dropdown.Menu>
			    <Dropdown.Item
				as={Link}
			       	to={"/userSettings"}
			    >
				<Icon name={"settings"}/>
				تنظیمات کاربری
			    </Dropdown.Item>

			    <Dropdown.Item
				as={Link}
				to={"/logout"}
			    >
				<Icon name={"sign out"}/>
				خروج
			    </Dropdown.Item>

			</Dropdown.Menu>

		    </Dropdown>
		</Button.Group>
	    </Menu.Item>
	</Menu>
    )
}

export default AdminMainMenu;
