import React,{useState} from "react";
import './SearchInHeader.css';

import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import _ from "lodash";
import {useSelector} from "react-redux";

const SearchInHeader = () =>{

    const [searchText,setSearchText]= useState("");

    const courses = _.values(useSelector(state => state.courses));


    const onResetClick=()=>{
	setSearchText("");
    };

    const filteredCourse = courses?.filter(course=>
	course.title?.toLowerCase().includes((searchText).toLowerCase())
    );

    const changeHandler= (e) =>{
	setSearchText(e.target.value)
    };

    return(
        <div className={"mainDivSearchInHeader"}>
		<SearchInput onChangeHandle={changeHandler} value={searchText}/>
		{
		    filteredCourse.length>0&& searchText.length>0&&
			<div className={"onSearchHandler"}>
			    {
				filteredCourse?.map(course=>
				    <SearchResult
					key={course._id}
					filteredCourse={course}
					onReset={onResetClick}
				    />
				)}
			</div>
		}
	</div>
    )
};

export default SearchInHeader;
