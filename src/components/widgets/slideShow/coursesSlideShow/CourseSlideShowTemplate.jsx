import React from "react";
import './CourseSlideShowTemplate.css';
import config from '../../../../services/config';

import {Image, Label,Segment,Card} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import NumberFormat from "react-number-format";



const CourseSlideShowTemplate =({newSettings,type,slideToShow,courses}) =>{

    let template=null;

    const settings={
	dots: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	rtl: true,
	appendDots: dots => (
	    <div
		style={{
		    backgroundColor: "transparent",
		    borderRadius: "10px",
		    padding: "10px",
		    margin:"0 auto!important"
		}}
	    >
		<Label color={"teal"} basic circular size={"tiny"} style={{ margin: "0 auto" }}>
		    {dots}
		</Label>
	    </div>
	),
	responsive: [
	    {
		breakpoint: 1024,
		settings: {
		    slidesToShow: 4,
		    slidesToScroll: 4,
		    infinite: true,
		    dots: false
		}
	    },
	    {
		breakpoint: 800,
		settings: {
		    slidesToShow: 2,
		    slidesToScroll: 2,
		    initialSlide: 2
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
	...newSettings
    };

    switch (type) {
	case ("homeSlide"):
	    template=courses.reverse().filter((item,index)=>index<slideToShow).map((item,index)=>
		<Image
		    key={index}
		    as={Link}
		    to={`/course/${item._id}`}
		    src={`${config.api}/${item.imageUrl}`}
		    size={"massive"}
		    rounded
		    centered
		/>
	    );
	    break;

	case ("freeCourses"):
	    template=courses.map(item=>
		item.price === 0 ?
		    <Segment key={item._id} className={"offerItems"}>
			<Card
			    className={"card-productOffers"}
			    as={Link}
			    to={`/course/${item._id}`}
			    color={"teal"}
			    fluid
			>
			    <Image
				src={`${config.api}/${item.imageUrl}`}
				ui={false}
				centered
				size={"mini"}
				wrapped
			    />
			    <Card.Content>
				<Card.Header className={"cart-header-productOffer"}>
				    {item.title}
				</Card.Header>
			    </Card.Content>
			    <Card.Content extra>
				<div className={"textLeft"}>
				    <Label color={"red"} pointing className={"priceFont"}>
					رایگان
				    </Label>
				</div>
			    </Card.Content>
			</Card>
		    </Segment>
		: ""
	    );
	    break;

	case ("lastCourses"):
	    template=courses.filter((item,index)=>index<slideToShow).map((item,index)=>
		    <Segment key={index} className={"offerItems"}>
			<Card
			    className={"card-productOffers"}
			    as={Link}
			    to={`/course/${item._id}`}
			    color={"orange"}
			    fluid
			>
			    <Image
				src={`${config.api}/${item.imageUrl}`}
				ui={false}
				centered
				size={"mini"}
				wrapped
			    />
			    <Card.Content>
				<Card.Header className={"cart-header-productOffer"}>
				    {item.title}
				</Card.Header>
			    </Card.Content>
			    <Card.Content extra>
				<div className={"textLeft"}>
				    <Label color={"red"} pointing>
					{
					    item.price === 0 ? "رایگان" :
						<NumberFormat
						    value={item.price}
						    displayType={'text'}
						    thousandSeparator={true}
						    prefix={" تومان "}
						/>
					}
				    </Label>
				</div>
			    </Card.Content>
			</Card>
		    </Segment>
	    );
	    break;

	default:
	    template=null;
    }


    return(
	<Slider {...settings}>
	    { template }
	</Slider>
    )
};

export default CourseSlideShowTemplate;
