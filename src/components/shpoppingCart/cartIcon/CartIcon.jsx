import React from "react";
import './CartIcon.css';
import {Image} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {mouseIn, mouseOut} from "../../../redux/cart/cartActions";
import {withRouter} from "react-router";
import {cartItemsCount} from "../../../utils/cartCount&Total";

const CartIcon = ({history})=>{

    const dispatch= useDispatch();
    const cartItems= useSelector(state=> state.cart.cartItems);

    return(
        <div
	    className={"cartIcon"}
	    onMouseEnter={()=>dispatch(mouseIn())}
	    onMouseLeave={()=>dispatch(mouseOut())}
	    onClick={()=>history.replace('/checkout')}
	>
	    <Image
		src={"./assets/images/shopping-cart.svg"}
		className={"shoppingIcon"}
	    />
	    <span className={"cartCount"}>
		{cartItemsCount(cartItems)}
	    </span>
	</div>
    )
};

export default withRouter(CartIcon);
