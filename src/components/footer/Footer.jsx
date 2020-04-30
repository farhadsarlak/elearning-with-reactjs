import React from "react";
import './Footer.css';
import {Grid,Button,Icon} from "semantic-ui-react";

import {Link} from "react-router-dom";

const Footer =( ) =>{

    return(
	<div className={"bgColor"} >

	    <hr className={"footer-hide hr-width"}/>

	    <Grid textAlign='right' className={"padding-footer"} columns={3}>
		<Grid.Row>
		    <Grid.Column className={"padding-footer"} width={3}>
			<h3> راهنمای خرید از سایت </h3>
			<Grid.Column columns={3}>
			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}> نحوه ثبت سفارش</Link>
			    </Grid.Row>

			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}>رویه ارسال</Link>
			    </Grid.Row>

			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}> شیوه&zwnj;های پرداخت</Link>
			    </Grid.Row>
			</Grid.Column>
		    </Grid.Column>
		    <Grid.Column className={"padding-footer"} width={3}>
			<h3> خدمات مشتریان </h3>
			<Grid.Column columns={5}>
			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}> پاسخ به پرسش&zwnj;های متداول</Link>
			    </Grid.Row>

			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}> رویه&zwnj;های بازگرداندن کالا</Link>
			    </Grid.Row>

			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}>شرایط استفاده</Link>
			    </Grid.Row>

			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}> حریم خصوصی</Link>
			    </Grid.Row>
			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}> گزارش بانک</Link>
			    </Grid.Row>

			</Grid.Column>
		    </Grid.Column>
		    <Grid.Column className={"padding-footer"} width={3}>
			<h3> با ما </h3>
			<Grid.Column columns={5}>
			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}>اتاق خبر</Link>
			    </Grid.Row>

			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}>فروش در دیجی کالا</Link>
			    </Grid.Row>

			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}>فرصت های شغلی</Link>
			    </Grid.Row>

			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}>تماس با ما</Link>
			    </Grid.Row>
			    <Grid.Row className={"textFooter"}>
				<Link to={"/"}>درباره ما</Link>
			    </Grid.Row>

			</Grid.Column>
		    </Grid.Column>
		    <Grid.Column verticalAlign={"middle"} width={7}>
			<Grid.Column className={"padding-top-footer text-footer-center"} computer={16} tablet={8} mobile={8}>
			    <h3 >با ما در شبکه های اجتماعی همراه باشید</h3>
			    <div style={{textAlign:"right"}}>
				<Button circular color='facebook' icon='facebook' />
				<Button circular color='twitter' icon='twitter' />
				<Button circular color='linkedin' icon='linkedin alternate' />
				<Button circular color='google plus' icon='google plus g' />
			    </div>
			</Grid.Column>
		    </Grid.Column>
		</Grid.Row>
	    </Grid>

	    <hr className={"footer-hide hr-width"}/>

	    <Grid textAlign='right' className={"padding-footer"} columns={2}>
		<Grid.Row>
		    <Grid.Column className={"padding-footer"} mobile={8} tablet={8} computer={8}>
			<p>هفت روز هفته، 24 ساعت شبانه روز پاسخگوی شما هستیم <span>َشماره های تماس: 09136823564 - 09136823565</span></p>
			<p>  ایمیل : <Link to={'/'}> farhad.sarlak64@gmail.com </Link></p>
		    </Grid.Column>
		    <Grid.Column className={"padding-footer text-footer-center"} mobile={8} tablet={8} computer={8}>
			<Button icon color={"black"}>
			    <Icon name='cc apple pay' />
			</Button>
			<Button icon color={"black"} >
			    <Icon name='google play' />
			</Button>
		    </Grid.Column>
		</Grid.Row>
	    </Grid>
	</div>
    )
};

export default Footer;
