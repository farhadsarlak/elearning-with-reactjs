import React from "react";
import './CartItem.css';

import {Menu,Image,Icon,Label} from "semantic-ui-react";
import {Link} from "react-router-dom";
import config from '../../../services/config';
import {successMessage} from "../../../utils/showMessage";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../../redux/cart/cartActions";

const CartItem =({item}) =>{

    const {_id,title,imageUrl,quantity} = item;
    const dispatch=useDispatch();

    const onClickDelete = item =>{
        dispatch(removeFromCart(item));
      successMessage("محصول با موفقیت از سبد شما حذف گردید")
    };

    return(
        <Menu
	    secondary
	    className={"cart-items-class"}
	    as={Link}
	    to={`/course/${_id}`}
	>
	    <Image
		src={`${config.api}/${imageUrl}`}
	    />
	    <div className={"item-details-cart"}>
		<span className={"name-in-dropdown"}>{title}</span>
		<Label className={"quantity-in-dropdown"} color='teal' pointing>{quantity} عدد </Label>
	    </div>

	    <div className={"trash-icon-in-carts"}>
		<Icon
		    onClick={() =>onClickDelete(item)}
		    name={"trash alternate"} size={"large"} color={"red"}
		/>
	    </div>

	</Menu>
    )
};

export default CartItem;
