import React from "react";
import './CartDropDown.css';

import {Button,Grid,Label} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {mouseIn, mouseOut} from "../../../redux/cart/cartActions";
import NumberFormat from "react-number-format";
import {cartItemsTotal} from "../../../utils/cartCount&Total";
import {withRouter} from "react-router";
import CartItem from "../cartItem/CartItem";

const CartDropdown = ({history}) =>{
    const dispatch= useDispatch();

    const cartItems = useSelector(state=> state.cart.cartItems);

    return(
        <div
	    className={"cart-dropdown-in-dropdown"}
	    onMouseEnter={()=>dispatch(mouseIn())}
	    onMouseLeave={()=>dispatch(mouseOut())}
	>
	    <div className={"cart-items-in-dropdown"}>
		{
		    cartItems.length> 0 ?
			cartItems.map((cartItem,index)=>
			    <div className={"items-in-cartItem"} key={index}>
				<CartItem item={cartItem} />
			    </div>
			)
			:
			<span
			    className={"empty-message-in-dropdown"}>
			    سبد خرید شما خالی است
			</span>
		}
	    </div>
	    {
	        cartItems.length>0 &&
		    <Grid className={"checkout-div-in-dropdown"}>

			<Button
			    content={"ثبت سفارش"}
			    inverted
			    color={"red"}
			    onClick={()=>{
			        history.replace('/checkout')
			    }}
			/>
			<Label className={"label-in-dropdown"} color={"teal"} tag>
			    مبلغ قابل پرداخت:
			    <NumberFormat
				value={cartItemsTotal(cartItems)}
				displayType={"text"}
				thousandSeparator={true}
			    />
			    {" "}تومان
			</Label>
		    </Grid>
	    }
	</div>
    )
};
export default withRouter(CartDropdown);
