import React, {useState} from 'react';
import { Menu, Segment} from "semantic-ui-react";
import PaginationSettings from "./pagination/PaginationSettings";
import SliderSetting from "./slider/SliderSetting";


const SiteSettings =() =>{

    const [active,setActive]=useState("paginate");
    let template= null;

    switch (active) {
	case "paginate":
	    template=<PaginationSettings/>;
	    break;

	case "slider":
	    template=<SliderSetting/>;
	    break;

	default: template=<PaginationSettings/>
    }

    return(
	<Segment raised color={"teal"}>
	    <Menu tabular secondary pointing>
		<Menu.Item
		    name={"صفحه بندی"}
		    active={active ==="paginate"}
		    onClick={()=>setActive("paginate")}
		    color={"teal"}
		    icon={"sticky note"}
		/>
		<Menu.Item
		    name={"اسلایدرها"}
		    active={active ==="slider"}
		    onClick={()=>setActive("slider")}
		    color={"teal"}
		    icon={"sliders"}
		/>
	    </Menu>
	    <Segment attached={"bottom"}>
		{template}
	    </Segment>
	</Segment>
    )

};

export default SiteSettings;
