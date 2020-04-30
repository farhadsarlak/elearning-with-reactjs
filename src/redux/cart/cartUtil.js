export const addItemToCart=(cartItems, cartItemToAdd)=>{
    const existingCartItem= cartItems.find(
	cartItem=> cartItem._id === cartItemToAdd._id
    );

    if(existingCartItem){
	return cartItems.map(cartItem=>
	    cartItem._id===cartItemToAdd._id
		? {...cartItem,quantity: cartItem.quantity + 1}
		: cartItem
	);
    }

    return [ ...cartItems, {...cartItemToAdd,quantity: 1} ]

};

export const removeItemFromCart=(cartItems, cartItemToRemove)=>(
    cartItems.filter(cartItem=> cartItem._id !== cartItemToRemove._id)
);

export const decrementItem=(cartItems,cartItemToDec)=> {
    const existingCartItem= cartItems.find(
	cartItem=> cartItem._id === cartItemToDec._id
    );
    if (existingCartItem.quantity<=1){
	return cartItems.filter(cartItem=> cartItem._id !== cartItemToDec._id)
    }else {
	return(
	    cartItems.map(cartItem => (
		cartItem._id === cartItemToDec._id
		    ?
		    {...cartItem , quantity: cartItem.quantity - 1}
		    :
		    cartItem
	    ))
	)
    }
};
