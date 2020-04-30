import React,{useState} from "react";

import {Segment,Menu} from "semantic-ui-react";
import UserSettings from "../../components/settings/users/Users";
import SiteSettings from "../../components/settings/site/SiteSettings";

const Settings = () =>{

    const [active,setActive] = useState("site");
    let template = null;

    switch (active) {
	case "users":
	    template=<UserSettings/>;
	    break;
	case "site":
	    template=<SiteSettings/>;
	    break;

	default: return template=<SiteSettings/>;
    }
    return(
        <Segment raised color={"teal"}>
	    <Menu tabular secondary pointing>
		<Menu.Item
		    name={"سایت"}
		    active={active ==="site"}
		    onClick={()=>setActive("site")}
		    color={"teal"}
		    icon={"sitemap"}
		/>
		<Menu.Item
		    name={"کاربران"}
		    active={active ==="users"}
		    onClick={()=>setActive("users")}
		    color={"teal"}
		    icon={"users"}
		/>
	    </Menu>
	    <Segment attached={"bottom"}>
		{template}
	    </Segment>
	</Segment>
    )
};
export default Settings;
