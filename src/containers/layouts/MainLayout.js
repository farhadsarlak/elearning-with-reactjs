import React,{Fragment} from "react";
import '../MainContainer.css';
import {Helmet} from 'react-helmet/es/Helmet';
import {Container} from "semantic-ui-react";
import MainMenu from "../../components/header/MainMenu";
import {withRouter} from "react-router";
import Footer from "../../components/footer/Footer";

const MainLayout = props =>{

    //const {pathname} = props.location;

    return(
        <Fragment>
	    <Helmet>
		<title>به آموزش مجازی خوش آمدید</title>
	    </Helmet>
	    <MainMenu/>
	    {/*{*/}
	    {/*    pathname === "/" && "slide Show "*/}
		{/*//data.filter((item,index)=>index<5).map((item,i)=>*/}
	    {/*}*/}
	    <Container fluid className={"mainLayoutContainer"}>
		{props.children}
	    </Container>

	    <Footer/>
	</Fragment>
    )
};

export default withRouter(MainLayout);
