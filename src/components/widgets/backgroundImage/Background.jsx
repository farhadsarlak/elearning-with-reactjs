import React from "react";
import './Background.css';
import {Button, Grid, Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Background =({from,to,children,buttonUrl})=>{

    return(
        <Grid
	    className={"mainGrid"}
	    style={{padding:"10px",borderRadius:"5px",background: `linear-gradient(45deg, ${from} 0%,${from} 25%,${to} 71%,${to} 100%)`}}
	>
	    <Grid.Row columns={2}>
		<Grid.Column verticalAlign={"middle"} computer={2} tablet={3} mobile={5}>
			<Button
			    as={Link}
			    to={buttonUrl}
			    className={"textButton"}
			    inverted
			    basic
			    icon
			    labelPosition={"left"}
			>
			    <Icon name={"arrow alternate circle left"}/>
			    مشاهده همه
			</Button>
		</Grid.Column>
		<Grid.Column computer={14} tablet={13} mobile={10}>
		    {children}
		</Grid.Column>
	    </Grid.Row>
	</Grid>
    )
};

export default Background;
