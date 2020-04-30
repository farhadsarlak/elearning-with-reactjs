import React, {useState} from "react";
import './MainMenu.css';
import {Menu, Dropdown, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {isEmpty} from 'lodash';
import CartIcon from "../shpoppingCart/cartIcon/CartIcon";
import CartDropdown from "../shpoppingCart/cartDropdown/CartDropdown";
import SearchInHeader from "../widgets/searchInHeader/SearchInHeader";

const MainMenu =()=>{

    const [activeItem,setActiveItem]= useState('home');
    const user = useSelector(state=> state.user);
    const hiddenCart = useSelector(state=> state.cart.hidden);

    return(
	<Menu fixed={"top"} size={"small"} inverted pointing secondary color={"teal"} className={"mainMenu"}>
	    <Menu.Item
		as={Link}
		to={"/"}
		name='صفحه اصلی'
		active={activeItem === 'home'}
		onClick={()=>setActiveItem("home")}

	    />
	    <Menu.Item
		as={Link}
		to={"/courses"}
		name='دوره ها'
		active={activeItem === 'courses'}
		onClick={()=>setActiveItem("courses")}
	    />
		<SearchInHeader/>

	    <Menu.Menu position={"right"}>
		<CartIcon/>
		{hiddenCart ? null : <CartDropdown/>}
		{
		    isEmpty(user.fullname)?
			<Menu.Item
			    as={Link}
			    to={"/loginRegister"}
			    content={"ورود | عضویت"}
			    active={activeItem==="loginRegister"}
			    onClick={()=>setActiveItem("loginRegister")}
			/>:
			<div>
			    <Dropdown item text={user.fullname}>
				<Dropdown.Menu>
				    {
				        user.isAdmin &&
					    <Dropdown.Item as={Link} to={"/dashboard"}>
						<Icon name={"dashboard"}/>
						پنل مدیریت
					    </Dropdown.Item>
				    }
				    <Dropdown.Item as={Link} to={"/userSettings"}>
					<Icon name={"settings"}/>
					تنظیمات کاربری
				    </Dropdown.Item>
				    <Dropdown.Item as={Link} to={"/logout"}>
					<Icon name={"sign out"}/>
					خروج
				    </Dropdown.Item>
				</Dropdown.Menu>
			    </Dropdown>
			</div>
		}
	    </Menu.Menu>
	</Menu>
    )
};
export default MainMenu;
