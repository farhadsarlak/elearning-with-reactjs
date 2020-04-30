import React from "react";
import './SearchInHeader.css';
import {Menu,Image,} from "semantic-ui-react";
import {withRouter} from "react-router";
import NumberFormat from "react-number-format";
import config from '../../../services/config';

const SearchResult=({filteredCourse,history,onReset})=>{

    const {price,_id,title,imageUrl} = filteredCourse;

    return(
	<Menu
	    secondary
	    className={"cart-items-class mainResult"}
	    style={{cursor:"pointer!important"}}
	    onClick={() =>{
		history.replace(`/course/${_id}`);
		onReset()
	      }}>
	    <Image
		src={`${config.api}/${imageUrl}`}
		alt={title}
		size={"tiny"}
	    />
	    <div className={"item-details-cart"}>
		<span className={"name-in-dropdown textTitle"}>{ title.substring(0 , 20)+'...'}</span>
	    </div>
	    <div className={"item-details-cart"}>
		{
		    price === 0 ? <span className={"name-in-dropdown"}>رایگان</span>:
			<span className={"name-in-dropdown"}>
			    <NumberFormat
				value={price}
				displayType={'text'}
				thousandSeparator={true}
				className={"format-number"}
			    />
                تومان</span>
		}
	    </div>

	</Menu>
    )
};

export default withRouter(SearchResult);
