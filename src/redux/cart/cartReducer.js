import {cartActionTypes} from "./cartType";
import {addItemToCart,removeItemFromCart,decrementItem} from "./cartUtil";


const INITIAL_STATE={
    hidden:true,
    cartItems:[]
};

const cartReducer=(state=INITIAL_STATE,action)=>{

    switch (action.type) {
	case cartActionTypes.MOUSE_IN_HIDDEN:
	    return {
		...state,
		hidden: false
	    };

	case cartActionTypes.MOUSE_OUT_HIDDEN:
	    return{
		...state,
		hidden: true
	    };

	case cartActionTypes.ADD_ITEM:
	    return{
		...state,
		cartItems: addItemToCart(state.cartItems,action.payload),
	    };

	case cartActionTypes.REMOVE_ITEM:
	    return{
		...state,
		cartItems: removeItemFromCart(state.cartItems,action.payload),
	    };

	case cartActionTypes.DEC_ITEM:
	    return{
		...state,
		cartItems: decrementItem(state.cartItems,action.payload)
	    };


	default:
	    return state

    }
};

export default cartReducer;
