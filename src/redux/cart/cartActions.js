import {cartActionTypes} from "./cartType";

export const addItemToCart= item =>({
    type: cartActionTypes.ADD_ITEM,
    payload:item
});

export const removeFromCart=item =>({
    type:cartActionTypes.REMOVE_ITEM,
    payload:item
});

export const decrement= item=>({
    type:cartActionTypes.DEC_ITEM,
    payload:item
});

export const mouseIn = () =>({
    type: cartActionTypes.MOUSE_IN_HIDDEN
});

export const mouseOut = () =>({
    type: cartActionTypes.MOUSE_OUT_HIDDEN
});
