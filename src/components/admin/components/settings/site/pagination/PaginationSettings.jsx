import React from "react";
import {Checkbox, Container, Input,Popup} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {setPerPageItem, togglePaginate,toggleScroll} from "../../../../../../redux/siteSettings/paginationSettings/paginateAction";
import {errorMessage} from "../../../../../../utils/showMessage";


const PaginationSettings =() =>{

    const dispatch = useDispatch();
    const activePaginate = useSelector(state=> state.paginateReducer.activePagination);
    const activeScrollData= useSelector(state => state.paginateReducer.activeScrollData);
    const perPage = useSelector(state => state.paginateReducer.perPage);

    const handleChangePerPage= (e,{value}) =>{
	const enteredValue= parseInt(value);
	if(enteredValue<=0 || enteredValue===null || enteredValue===undefined||value.length<=0){
	    errorMessage("تعداد نمایش آیتم در هر صفحه کمتر از 1 نمیتواند باشد");
	}else if (value===" "){
	    errorMessage("لطفا عدد وارد نمایید")
	}else {
	    dispatch(setPerPageItem(enteredValue))
	}
    };

    return(
       <Container fluid>
	   <div style={{margin:"15px 0"}}>
	       <Checkbox
		   toggle
		   onChange={()=> dispatch(togglePaginate())}
		   checked={activePaginate}
		   label={"فعال سازی صفحه بندی"}
	       />
	   </div>
	   <div style={{margin:"15px 0"}}>
	       <Checkbox
		   toggle
		   onChange={()=> dispatch(toggleScroll())}
		   checked={activeScrollData}
		   label={"فعال سازی اسکرول کردن"}
	       />
	   </div>
	   {
	       activePaginate&&
	       <div style={{margin:"15px 0"}}>
		   <Popup
		       size={"mini"}
		       content={"با فلش بالا و پایین صفحه کلید نیز میتوانید مقدار را تغییر دهید"}
		       trigger={<Input
			   name={"perPageItem"}
			   label={"تعداد نمایش آیتم در هر صفحه: "}
			   type={"number"}
			   size={"mini"}
			   value={perPage}
			   onChange={handleChangePerPage}
		       />}
		   />

	       </div>
	   }
       </Container>
    )
};

export default PaginationSettings;
