import React, {useEffect} from "react";
import {courseIdValidator} from "../../../utils/courseIdValidator";
import {useDispatch, useSelector} from "react-redux";
import {getSingleCourse} from "../../../redux/singleCourse/courseActions";
import {Redirect} from "react-router";
import {Container, Segment, Grid, Image, Label, Icon, Button, Divider} from "semantic-ui-react";
import config from '../../../services/config';
import NumberFormat from 'react-number-format';
import CourseVideosComments from "../../../components/singleCourse/courseTabMenu/CourseVideosComments";
import {addItemToCart} from "../../../redux/cart/cartActions";
import {successMessage} from "../../../utils/showMessage";


const SingleCourse = ({match})=>{

    const dispatch= useDispatch();
    const isLoading = useSelector(state => state.singleCourse.isLoading);
    const course =useSelector(state => state.singleCourse);

    useEffect(()=>{
        if (courseIdValidator(match.params.id)){
            dispatch(getSingleCourse(match.params.id))
	}
    },[dispatch,match]);


    if(!courseIdValidator(match.params.id)) return <Redirect to={"/"}/>;

    return(
        <Container fluid>
	    <header style={{marginTop:"50px",padding:"10px 20px"}}>
		<h1> {course.title} </h1>
	    </header>
	    <Grid padded>
		<Grid.Row columns={2}>
		    <Grid.Column computer={5} tablet={5} mobile={16}>
			<Segment raised color={"teal"}>
			    <Grid.Row>
				{
				    isLoading? <Segment loading={isLoading} size={"mini"}> درحال بارگزاری </Segment>:
					<Image
					    centered
					    circular
					    style={{backgroundColor:"teal"}}
					    src={"./assets/images/avatar.jpg"}
					    rounded
					    size={"small"}
					/>
				}
			    </Grid.Row>
			    <Grid.Row verticalAlign={"middle"}>
				<Divider horizontal>
				    <p style={{textAlign:"center",padding:"15px"}}>
					مدرس این دوره: <span style={{fontWeight:"bold"}}>فرهاد سرلک</span>
				    </p>
				</Divider>
			    </Grid.Row>
			    <hr/>
			    <Grid.Row style={{textAlign:"left"}}>
				<span>
				    <p>A Frontend Developer</p>

				    <p><span style={{fontWeight:"bold"}}>Email :</span> Farhad.sarlak@gmail.com</p>

				</span>
			    </Grid.Row>
			</Segment>
			<Segment raised color={"orange"}>
			    <h3> اطلاعات دوره </h3>
			   <Label style={{margin:"5px 0"}} basic color={"teal"}>
			       <Icon name={"users"}/>
			       تعداد دانشجویان این دوره:
			       <Label.Detail>578 نفر</Label.Detail>
			    </Label>
			    <Label style={{margin:"5px 0"}} basic color={"teal"}>
				<Icon name={"video camera"}/>
				تعداد ویدئوها:
				<Label.Detail> 32 ویدئو </Label.Detail>
			    </Label>
			    <Label style={{margin:"5px 0"}} basic color={"teal"}>
				<Icon name={"clock outline"}/>
				مدت زمان دوره:
				<Label.Detail>  22:35:00 </Label.Detail>
			    </Label>
			    <Label style={{margin:"5px 0"}} basic color={"teal"}>
				<Icon name={"book"}/>
				سطح دوره:
				<Label.Detail> پیشرفته </Label.Detail>
			    </Label>
			    <Label style={{margin:"5px 0"}} basic color={"teal"}>
				<Icon name={"info circle"}/>
				وضعیت دوره:
				<Label.Detail>  به اتمام رسیده </Label.Detail>
			    </Label>
			    <Label style={{margin:"5px 0"}} basic color={"teal"}>
				<Icon name={"dollar sign"}/>
				قیمت:
				<Label.Detail>
				    {
					<NumberFormat
					    displayType={'text'}
					    value={course.price}
					    thousandSeparator={true}
					/>
				    }
				    تومان
				</Label.Detail>
			    </Label>
			    <Label style={{margin:"5px 0"}} basic color={"teal"}>
				<Icon name={"calendar alternate outline"}/>
				آخرین بروزرسانی دوره : شنبه ۳۰ فروردین ۱۳۹۹
			    </Label>
			    <Button
				color={"red"}
				labelPosition={"left"}
				icon
				animated={"fade"}
				fluid
				onClick={()=>{
				    dispatch(addItemToCart(course));
				    successMessage("محصول با موفقیت به سبد شما اضافه شد")
				}}
			    >
				<Icon name={"shopping cart"}/>
				اضافه به سبد خرید
			    </Button>
			</Segment>
		    </Grid.Column>
		    <Grid.Column computer={11} tablet={11} mobile={16}>
			{
			    <Segment loading={isLoading} raised>
				<Image
				    fluid
				    rounded
				    src={`${config.api}/${course.imageUrl}`}
				/>
				<Container textAlign={"justified"}>
				    <h3 style={{padding:"10px 0"}}>{course.title}</h3>
				    <p style={{lineHeight:"2.5"}}> {course.info} </p>

				    <CourseVideosComments/>
				</Container>
			    </Segment>

			}


		    </Grid.Column>
		</Grid.Row>
	    </Grid>
	</Container>
    )
};
export default SingleCourse;
