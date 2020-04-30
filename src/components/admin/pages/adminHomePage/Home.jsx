import React from "react";
import './AdminHomePage.css';
import {Container, Card, Icon,Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

const AdminHomePage =({courses})=>{

    return(
        <Container fluid className={"mainAdminHomeContainer"}>
	    <Card.Group itemsPerRow={6} centered >
		<Card color={"teal"}>
		    <Image size={"small"} src='./assets/images/elearning.svg' wrapped ui={false} />
		    <Card.Content>
			<Card.Header>
			    <Icon name={"file alternate"}/>
			    دوره ها
			</Card.Header>
			<Card.Description>
			    {courses.length}دوره
			</Card.Description>
		    </Card.Content>
		    <Card.Content extra>
			<Link to={"/dashboard/courses"}>
			    <Icon name='eye' />
			    مشاهده همه دوره ها
			</Link>
		    </Card.Content>
		</Card>

		<Card color={"red"}>
		    <Image size={"small"} src='./assets/images/learning.svg' wrapped ui={false} />
		    <Card.Content>
			<Card.Header>
			    <Icon name={"users"}/>
			    کاربران
			</Card.Header>
			<Card.Description>
			    {courses.length}کاربر
			</Card.Description>
		    </Card.Content>
		    <Card.Content extra>
			<Link to={"/dashboard/users"}>
			    <Icon name='eye' />
			    مشاهده همه کاربران
			</Link>
		    </Card.Content>
		</Card>

		<Card color={"yellow"}>
		    <Image size={"small"} src='./assets/images/settings.svg' wrapped ui={false} />
		    <Card.Content>
			<Card.Header>
			    <Icon name={"setting"}/>
			    تنظیمات
			</Card.Header>
			<Card.Description>
			    تنظیمات سایت (صفحه بندی و ...)
			</Card.Description>
		    </Card.Content>
		    <Card.Content extra>
			<Link to={"/dashboard/settings"}>
			    <Icon name='eye' />
			    صفحه تنظیمات
			</Link>
		    </Card.Content>
		</Card>
	    </Card.Group>
	</Container>
    )
};

export default AdminHomePage;
