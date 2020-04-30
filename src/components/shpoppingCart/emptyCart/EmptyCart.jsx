import React from "react";
import './EmptyCart.css';
import {Container, Grid, Segment, Image, Divider} from "semantic-ui-react";

import {Link} from "react-router-dom";
import CourseSlideShowTemplate from "../../widgets/slideShow/coursesSlideShow/CourseSlideShowTemplate";
import {useSelector} from "react-redux";
import Background from "../../widgets/backgroundImage/Background";

const EmptyCart = ({courses}) =>{

    const isLoading = useSelector(state =>state.courses.loading);

    return(
        <Container fluid className={"main-container-emptyCart"}>
	    <Grid columns={2}>
		<Grid.Row stretched>
		    <Grid.Column className={"emptyCart-grid"} computer={12} tablet={16} mobile={16}>
			<Segment raised color={"teal"} className={"segment-emptyCart"}>
			    <Grid.Row className={"imageInEmptyCart"}>
				<Image size={"medium"} src={'./assets/images/emptyCart.png'} wrapped />
			    </Grid.Row>
			    <Grid.Row className={"marginTopBottom-1"}>
				<p >سبد خرید شما خالی است!</p>
			    </Grid.Row>
			    <Grid.Row className={"marginTopBottom-1"}>
				<Link to={"/"}>بازگشت به صفحه اصلی</Link>
			    </Grid.Row>
			</Segment>
		    </Grid.Column>
		    <Grid.Column only={"computer"} computer={4} className={"suggested-grid"}>
			<Segment color={"teal"} loading={isLoading} raised style={{margin:"0 7px"}}>
			    <h3>دوره های پیشنهادی</h3>
			    <CourseSlideShowTemplate
				courses={courses}
				type={"lastCourses"}
				slideToShow={10}
				newSettings={{
				    autoplay: true ,
				    autoplaySpeed: 3000 ,
				    slidesToShow: 1 ,
				    arrows: false ,
				    dots:false,
				    responsive: [
					{
					    breakpoint: 1024 ,
					    settings: {
						slidesToShow: 1 ,
						slidesToScroll: 1 ,
						infinite: true ,
						dots: false
					    }
					}
				    ]
				}}
			    />
			</Segment>
		    </Grid.Column>
		</Grid.Row>
	    </Grid>
	    <Container>
		<Grid>
		    <Grid.Column>
			<Divider horizontal style={{margin:"50px 0 30px 0"}}>
			    <h3 >آخرین دوره ها</h3>
			</Divider>
			<Background
			    buttonUrl={"/courses"}
			    to={"rgba(246,94,214,0.7)"}
			    from  ={"rgba(31,223,179,0.8)"}
			>
			    <CourseSlideShowTemplate
				courses={courses}
				type={"lastCourses"}
				slideToShow={10}
				newSettings={{
				    arrows:false,
				    autoplay: true ,
				    dots:false,
				    autoplaySpeed: 4000 ,
				    slidesToShow: 4
				}}
			    />
			</Background>
		    </Grid.Column>
		</Grid>
	    </Container>
	    <Container>
		<Grid>
		    <Grid.Column>
			<Divider horizontal style={{margin:"50px 0 30px 0"}}>
			    <h3 >دوره های رایگان</h3>
			</Divider>
			<Background
			    buttonUrl={"/courses"}
			    to={"rgba(346,41,32,0.7)"}
			    from  ={"rgba(255,122,32,0.8)"}
			>
			    <CourseSlideShowTemplate
				courses={courses}
				type={"freeCourses"}
				newSettings={{
				    arrows:false,
				    autoplay: true ,
				    dots:false,
				    autoplaySpeed: 4000 ,
				    slidesToShow: 4
				}}
			    />
			</Background>
		    </Grid.Column>
		</Grid>
	    </Container>
	</Container>
    )
};

export default EmptyCart;
