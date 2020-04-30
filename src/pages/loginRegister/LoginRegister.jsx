import React from "react";
import './LoginRegister.css';

import {Tab,Segment} from "semantic-ui-react";
import Login from "../../components/login/Login";
import UserContext from "../../components/context/userContext";
import Register from "../../components/register/Register";

const LoginRegister =()=>{
    const panes =[
	{
	    menuItem: 'ورود',
	    render: () => <Tab.Pane attached={false}><UserContext><Login/></UserContext></Tab.Pane>,
	},
	{
	    menuItem: 'عضویت',
	    render: () => <Tab.Pane attached={false}><UserContext><Register/></UserContext></Tab.Pane>,
	}
    ];

    return(
        <Segment color={"teal"} className={"mainLoginRegisterSegment"}>
	    <Tab
		menu={{secondary:true,pointing:true,color:"teal"}}
		panes={panes}
	    />
	</Segment>
    )
};

export default LoginRegister;
