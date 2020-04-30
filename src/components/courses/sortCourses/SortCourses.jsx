import React, {useContext, useState} from "react";
import '../CourseData.css';
import {Menu,Grid,Dropdown,Label} from "semantic-ui-react";
import {filterCoursesContext} from "../../context/filterCoursesContext";

const SortCourses = () =>{
    const [sortByType,setSortByType]=useState();
    const [sortByOrder,setSortByOrder]=useState();
    const filterContext = useContext(filterCoursesContext);

    const {sortFieldItem,sortFieldBy,sortCourse,currentPage,activePagination} = filterContext;

    return(
        <Grid padded>
	    {
	        activePagination&&
		<Label ribbon color={"red"}>
		    صفحه{` ${currentPage}`}
		</Label>
	    }
	    <Grid.Row columns={2}>
		<Menu secondary >
		    <Menu.Item>
			<Dropdown
			    button
			    className={"icon dropdownSortItem"}
			    floating
			    labeled
			    icon={"sort"}
			    options={sortFieldItem}
			    defaultValue={sortFieldItem[0].value}
			    selection
			    onChange={(e,{value})=>
				{
				    setSortByType(value);
				    sortCourse(sortByType,sortByOrder);
				}
			    }
			/>
		    </Menu.Item>
		    <Menu.Item>
			<Dropdown
			    button
			    className={"icon dropdownSortItem"}
			    floating
			    labeled
			    selection
			    icon={"sort"}
			    options={sortFieldBy}
			    defaultValue={sortFieldBy[0].value}
			    onChange={(e,{value})=>{
			        setSortByOrder(value);
				sortCourse(sortByType,sortByOrder)
			    }}
			/>
		    </Menu.Item>

		</Menu>
	    </Grid.Row>
	</Grid>
    )
};
export default SortCourses;
