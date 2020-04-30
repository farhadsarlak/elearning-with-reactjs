import React from "react";

import {Grid, Container, Divider} from "semantic-ui-react";
import CourseSlideShowTemplate from "../../components/widgets/slideShow/coursesSlideShow/CourseSlideShowTemplate";
import Background from "../../components/widgets/backgroundImage/Background";
import {useSelector} from "react-redux";


const Home = ({courses}) =>{

    const homeSlideCounter = useSelector(state => state.sliderReducer.homeSliderCount);
    const homeSlideSpeed   = useSelector(state => state.sliderReducer.homeAutoplaySpeed);
    const freeCourseCount  = useSelector(state => state.sliderReducer.freeCourseSliderCount);
    const freeCourseSpeed  = useSelector(state => state.sliderReducer.freeCourseSliderSpeed);
    const freeCourseColorFrom = useSelector(state => state.sliderReducer.freeCourseColorFrom);
    const freeCourseColorTo   = useSelector(state => state.sliderReducer.freeCourseColorTo);
    const lastCourseCount  = useSelector(state => state.sliderReducer.lastCoursesSliderCount);
    const lastCourseSpeed  = useSelector(state => state.sliderReducer.lastCoursesSliderSpeed);
    const lastCoursesColorFrom = useSelector(state => state.sliderReducer.lastCoursesColorFrom);
    const lastCoursesColorTo   = useSelector(state => state.sliderReducer.lastCoursesColorTo);
    return(
	<Container fluid>
	    <Container>
		<Grid>
		    <Grid.Row stretched centered>
			<Grid.Column computer={10} tablet={16} mobile={16}>
			    <CourseSlideShowTemplate
				courses={courses}
				type={"homeSlide"}
				slideToShow={homeSlideCounter}
				newSettings={{
				    arrows:false,
				    dot:true,
				    slidesToShow:1,
				    autoPlay:true,
				    autoplaySpeed: homeSlideSpeed ,
				    responsive: [
					{
					    breakpoint: 1024,
					    settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					    }
					},
					{
					    breakpoint: 800,
					    settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 1
					    }
					},
					{
					    breakpoint: 600,
					    settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					    }
					}
				    ],
				}}
			    />
			</Grid.Column>
		    </Grid.Row>
		</Grid>
	    </Container>

	    <Container fluid>
		<Grid padded>
		    <Grid.Row stretched centered>
			<Grid.Column>
			    <Divider horizontal style={{margin:"50px 0 30px 0"}}>
				<h3 >آخرین دوره ها</h3>
			    </Divider>
			    <Background
				buttonUrl={'/courses'}
				from={lastCoursesColorFrom}
				to={lastCoursesColorTo}
			    >
				<CourseSlideShowTemplate
				    courses={courses}
				    type={"lastCourses"}
				    slideToShow={10}
				    newSettings={{
					arrows:false,
					autoplay: true ,
					dots:false,
					autoplaySpeed: lastCourseSpeed ,
					slidesToShow: lastCourseCount
				    }}
				/>
			    </Background>
			</Grid.Column>
		    </Grid.Row>
		</Grid>
	    </Container>

	    <Container fluid>
		<Grid padded>
		    <Grid.Row stretched centered>
			<Grid.Column>
			    <Divider horizontal style={{margin:"50px 0 30px 0"}}>
				<h3 >دوره های رایگان</h3>
			    </Divider>
			    <Background
				buttonUrl={'/courses?free'}
				from={freeCourseColorFrom}
				to={freeCourseColorTo}
				buttonText={"دوره های رایگان"}
			    >
				<CourseSlideShowTemplate
				    courses={courses}
				    type={"freeCourses"}
				    newSettings={{
					arrows:false,
					autoplay: true ,
					dots:false,
					autoplaySpeed: freeCourseSpeed ,
					slidesToShow: freeCourseCount
				    }}
				/>
			    </Background>
			</Grid.Column>
		    </Grid.Row>
		</Grid>
	    </Container>
	    <Container>
		<Grid>
		    <Grid.Row>
			<Grid.Column>
			    <Divider horizontal style={{margin:"50px 0 30px 0"}}>
				<h3 >محبوب ترین دوره ها</h3>
			    </Divider>
			    <Background
				buttonUrl={'/courses?buy'}
				from={"rgba(31,223,179,0.6)"}
				to={"rgba(238,79,158,0.7)"}
				buttonText={"محبوب ترین دوره ها"}
			    >
				<CourseSlideShowTemplate
				    courses={courses}
				    type={"lastCourses"}
				    slideToShow={10}
				    newSettings={{
					arrows:false,
					autoplay: true ,
					dots:false,
					autoplaySpeed: 3000 ,
					slidesToShow: 4
				    }}
				/>
			    </Background>
			</Grid.Column>
		    </Grid.Row>
		</Grid>
	    </Container>
	</Container>
    )
};

export default Home;
