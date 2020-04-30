import React, {useContext} from "react";
import {withRouter} from "react-router";
import {Container, Grid, Pagination,Card,Segment} from "semantic-ui-react";
import CourseSidebar from "../../../components/courses/courseSidebar/CourseSidebar";
import {filterCoursesContext} from "../../../components/context/filterCoursesContext";
import CourseData from "../../../components/courses/courseData/CourseData";
import SortCourses from "../../../components/courses/sortCourses/SortCourses";
import {Helmet} from "react-helmet";


const Courses= ()=>{

    const filterContext = useContext(filterCoursesContext);

    const {
	currentPage,
	setCurrentPage,
	perPage,
	handlePaginationChange,
	courseData,
	filteredCourses,
	activePagination
    }= filterContext;

    const totalPage =Math.ceil((filteredCourses.length)/perPage);

    if (totalPage===1) setCurrentPage(1);


    return (
        <Container fluid>
	    <Helmet>
		<title> آموزش مجازی| دوره ها </title>
	    </Helmet>
	    <Grid padded>
		<Grid.Row>
		    <Grid.Column computer={4} tablet={5} mobile={16}>
			<CourseSidebar/>
		    </Grid.Column>
		    <Grid.Column computer={12} tablet={11} mobile={16}>
			{filteredCourses.length<=0?
			    <h3 style={{textAlign:"center",margin:"0 auto",color:"red"}}>
				دوره ای برای نمایش وجود ندارد
			    </h3>
			    :<Segment raised color={"teal"}>
				<SortCourses/>
				<Card.Group itemsPerRow={3} >
				    {
					courseData.map((course,index) =>
					    <CourseData key={index} course={course}/>)
				    }
				</Card.Group>
			</Segment>}
		    </Grid.Column>
		</Grid.Row>
	    </Grid>
	    <div style={{textAlign:"center",margin:"40px auto"}}>
		{
		    filteredCourses.length>0&& totalPage>1&&activePagination&&
			<Pagination
			    totalPages={totalPage}
			    onPageChange={handlePaginationChange}
			    defaultActivePage={currentPage}
			    pointing
			    secondary
			/>
		}
	    </div>
	</Container>
    )
};

export default withRouter(Courses);
