import React, {useContext, useState} from "react";

import {Segment, Grid, Input, Form, Checkbox, Label, Divider} from "semantic-ui-react";
import {filterCoursesContext} from "../../context/filterCoursesContext";
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

const CourseSidebar = ()=>{

    const filterContext = useContext(filterCoursesContext);
    const {
        toggleCheckboxes,
	checkboxValue,
        courses,
	setSearch,
	priceRange
    } = filterContext;

    const [priceRangeText,setPriceRangeText]=useState([]);

    return(
        <Segment raised color={"teal"}>
	    <Divider horizontal>
		<h4 style={{backgroundColor:"#efefef",borderRadius:"10px",padding:"3px 10px"}}> {courses.length} دوره </h4>
	    </Divider>
	    <Grid>
		<Grid.Row>
		    <Grid.Column width={16}>
			<Input
			    placeholder={"موضوع مورد نظر"}
			    name={"search"}
			    icon={"search"}
			    size={"small"}
			    onChange={e=> setSearch(e.target.value)}
			/>
		    </Grid.Column>
		</Grid.Row>
		<Grid.Row>
		    <Grid.Column>
			<Label
			    icon={"filter"}
			    content={"فیلترها"}
			    pointing={"below"}
			/>
			<Form>
			    <Form.Field>
				<Checkbox
				    radio
				    label={"همه"}
				    value={"all"}
				    name={"checkboxFilter"}
				    checked={checkboxValue === "all"}
				    onChange={toggleCheckboxes}
				/>
			    </Form.Field>
			    <Form.Field>
				<Checkbox
				    radio
				    label={"خریدنی"}
				    name={"checkboxFilter"}
				    value={"buy"}
				    checked={checkboxValue === "buy"}
				    onChange={toggleCheckboxes}
				/>
			    </Form.Field>
			    <Form.Field>
				<Checkbox
				    radio
				    label={"رایگان"}
				    value={"free"}
				    name={"checkboxFilter"}
				    checked={checkboxValue==="free"}
				    onChange={toggleCheckboxes}
				/>
			    </Form.Field>
			</Form>

		    </Grid.Column>
		</Grid.Row>
		<Grid.Row>
		    <Grid.Column>
			<h3 style={{margin:"20px 0"}}>براساس محدوده قیمت</h3>
			{priceRangeText.length>0&&
			    <p style={{fontSize:"13px"}}> از محدوده قیمتی
				<span style={{color:"red",fontWeight:"bold"}}>{priceRangeText[0]}</span>
				تا محدوده قیمتی
				<span style={{color:"red",fontWeight:"bold"}}> {priceRangeText[1]} </span>
			    </p>
			}
			<Range
			    min={0}
			    max={1000000}
			    defaultValue={[0,500000]}
			    onBeforeChange={(e)=> console.log(e)}
			    onChange={(e)=>{
			        setPriceRangeText(e);
			        priceRange(e);
			    }}
			/>
		    </Grid.Column>
		</Grid.Row>
	    </Grid>
	</Segment>
    )
};

export default CourseSidebar;
