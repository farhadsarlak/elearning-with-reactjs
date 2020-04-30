import React from "react";
import './SearchInHeader.css';
import {Input} from "semantic-ui-react";

const SearchInput=({onChangeHandle,value})=>{

    return(
	<Input
	    placeholder={"جستجوی دوره"}
	    type={"search"}
	    icon={"search"}
	    size={"small"}
	    className={"searchMenu"}
	    onChange={onChangeHandle}
	    value={value}
	/>
    )
};

export default SearchInput;
