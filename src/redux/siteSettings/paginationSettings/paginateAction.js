import {paginateTypes} from "./paginateTypes";


export const setPerPageItem= itemPerPage =>{
    return async dispatch =>{
	await dispatch({
	    type:paginateTypes.SET_PER_PAGE,
	    payload:itemPerPage
	})
    }
};

export const setCurrentPage = currentPage =>{
    return async dispatch =>{
	await dispatch({
	    type:paginateTypes.SET_CURRENT_PAGE,
	    payload:currentPage
	})
    }
};

export const togglePaginate=() =>({
    type: paginateTypes.TOGGLE_ACTIVE_PAGINATE
});

export const toggleScroll=() =>({
    type: paginateTypes.TOGGLE_ACTIVE_SCROLL_DATA
});

export const setScrollLength= number =>({
    type:paginateTypes.SET_SCROLL_LENGTH,
    payload:number
});
