import React from "react";
import {Tab} from "semantic-ui-react";
import Videos from "./Videos";
import Comments from "./Comments";

const CourseVideosComments =()=>{

    const panes = [
	{
	    menuItem: { key: 'videos', icon: "video", content: ' فهرست ویدئوها ' },
	    render: () => <Tab.Pane attached={false}><Videos/></Tab.Pane>,
	},
	{
	    menuItem: { key: 'comments', icon: "comments", content: ' نظرات ' },
	    render: () => <Tab.Pane attached={false}><Comments/></Tab.Pane>,
	},
    ];

    return(
        <Tab
	   menu={{secondary:true, pointing:true, color:"teal"}}
	   panes={panes}
	/>
    )
};

export default CourseVideosComments;
