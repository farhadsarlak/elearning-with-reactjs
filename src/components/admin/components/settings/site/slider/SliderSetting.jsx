import React, {useState} from "react";
import './SliderSettings.css';
import {Container, Divider, Input,Popup} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {errorMessage} from "../../../../../../utils/showMessage";
import {
    setSliderHomeCount,
    setSliderHomeSpeed,
    setSliderFreeCourse,
    setSliderFreeCourseSpeed,
    setSliderLastCourse,
    setSliderLastCourseSpeed,
    setSliderFreeCourseColorFrom,
    setSliderFreeCourseColorTo,
    setSliderLastCoursesColorFrom,
    setSliderLastCoursesColorTo
} from "../../../../../../redux/siteSettings/sliderSettings/sliderActions";
import {SketchPicker} from "react-color";

const SliderSetting = () =>{

    const homeSliderCounter   = useSelector(state => state.sliderReducer.homeSliderCount);
    const homeSliderSpeed     = useSelector(state => state.sliderReducer.homeAutoplaySpeed);
    const freeCourseCount     = useSelector(state => state.sliderReducer.freeCourseSliderCount);
    const freeCourseSpeed     = useSelector(state => state.sliderReducer.freeCourseSliderSpeed);
    const freeCourseColorFrom = useSelector(state => state.sliderReducer.freeCourseColorFrom);
    const freeCourseColorTo   = useSelector(state => state.sliderReducer.freeCourseColorTo);
    const lastCoursesCount  = useSelector(state => state.sliderReducer.lastCoursesSliderCount);
    const lastCoursesSpeed   = useSelector(state => state.sliderReducer.lastCoursesSliderSpeed);
    const lastCoursesColorFrom = useSelector(state => state.sliderReducer.lastCoursesColorFrom);
    const lastCoursesColorTo   = useSelector(state => state.sliderReducer.lastCoursesColorTo);

    const [showPickerFreeFrom,setShowPickerFreeFrom] = useState(false);
    const [showPickerFreeTo,setShowPickerFreeTo] = useState(false);
    const [showPickerLastFrom,setShowPickerLastFrom] = useState(false);
    const [showPickerLastTo,setShowPickerLastTo] = useState(false);

    const dispatch = useDispatch();


    const handleChangeInput = (e,{value,name}) =>{
	const enteredValue= parseInt(value);
	if(enteredValue<=0 || enteredValue===null || enteredValue===undefined||value.length<=0){
	    errorMessage("تعداد نمایش آیتم در هر صفحه کمتر از 1 نمیتواند باشد");
	}else if (value===" "){
	    errorMessage("لطفا عدد وارد نمایید")
	}else {
	    if (name === "homeSliderCount"){
		dispatch(setSliderHomeCount(enteredValue))
	    }
	    if (name === "sliderMs"){
	        dispatch(setSliderHomeSpeed(enteredValue))
	    }
	    if (name === "freeCourseCount"){
		dispatch(setSliderFreeCourse(enteredValue))
	    }
	    if (name === "freeCourseSpeed"){
		dispatch(setSliderFreeCourseSpeed(enteredValue))
	    }
	    if(name === "lastCoursesCount"){
	        dispatch(setSliderLastCourse(enteredValue))
	    }
	    if(name === "lastCoursesSpeed"){
	        dispatch(setSliderLastCourseSpeed(enteredValue))
	    }
	}
    };


    return (
        <Container fluid>
	    {/* --------------------- Home ---------------------*/}
	    <Divider horizontal >
		<h5>تنظیمات اسلایدشو</h5>
	    </Divider>
	    <div style={{margin:"30px 0"}}>
		<Input
		    name={"homeSliderCount"}
		    labelPosition={"left"}
		    label={"نمایش تعداد آیتم: "}
		    size={"mini"}
		    value={homeSliderCounter}
		    type={"number"}
		    onChange={handleChangeInput}
		/>
	    </div>
	    <div style={{margin:"30px 0"}}>
		<Popup
		    size={"mini"}
		    content={"لطفا عدد را بصورت میلی ثانیه وارد نمایید (4000)"}
		    trigger={<Input
			name={"sliderMs"}
			labelPosition={"left"}
			label={"سرعت حرکت اسلایدها : "}
			size={"mini"}
			value={homeSliderSpeed}
			type={"number"}
			onChange={handleChangeInput}
		    />}
		/>
	    </div>

	    {/* --------------------- FreeCourse ---------------------*/}
	    <Divider horizontal >
		<h5>تنظیمات اسلاید دوره های رایگان</h5>
	    </Divider>
	    <div style={{margin:"30px 0"}}>
		<Input
		    name={"freeCourseCount"}
		    labelPosition={"left"}
		    label={"نمایش تعداد آیتم : "}
		    size={"mini"}
		    value={freeCourseCount}
		    type={"number"}
		    onChange={handleChangeInput}
		/>
	    </div>

	    <div style={{margin:"30px 0"}}>
		<Popup
		    size={"mini"}
		    content={"لطفا عدد را بصورت میلی ثانیه وارد نمایید (4000)"}
		    trigger={
		        <Input
			    name={"freeCourseSpeed"}
			    labelPosition={"left"}
			    label={"سرعت حرکت اسلایدها : "}
			    size={"mini"}
			    value={freeCourseSpeed}
			    type={"number"}
			    onChange={handleChangeInput}
		   	 />}
		/>
	    </div>
	    <div style={{margin:"40px 0"}}>

		{/* -------------from -----------*/}
		<div
		    onClick={()=>setShowPickerFreeFrom(true)}
		    className={"swatch"}
		>
		    <div className={"colorPicker"} style={{background:freeCourseColorFrom}} />
		</div>
		{
		    showPickerFreeFrom &&
			<div className={"popover"}>
			    <div className={"cover"} onClick={()=>setShowPickerFreeFrom(false) }/>
			    <SketchPicker
				style={{margin:"20px 0 !important"}}
				color={freeCourseColorFrom}
				onChange={(color)=>dispatch(setSliderFreeCourseColorFrom(color.hex))}
			    />
			</div>
		}
		{/* ----------------- to ---------------*/}
		<div
		    onClick={()=>setShowPickerFreeTo(true)}
		    className={"swatch"}
		>
		    <div className={"colorPicker"} style={{background:freeCourseColorTo}} />
		</div>
		{
		    showPickerFreeTo &&
		    <div className={"popover"}>
			<div className={"cover"} onClick={()=>setShowPickerFreeTo(false) }/>
			<SketchPicker
			    style={{margin:"20px 0 !important"}}
			    color={freeCourseColorTo}
			    onChange={(color)=>dispatch(setSliderFreeCourseColorTo(color.hex))}
			/>
		    </div>
		}

	    </div>

	    {/* --------------------- lastCourses ---------------------*/}
	    <Divider horizontal >
		<h5>تنظیمات اسلاید آخرین دوره ها</h5>
	    </Divider>

	    <div style={{margin:"30px 0"}}>
		<Input
		    name={"lastCoursesCount"}
		    labelPosition={"left"}
		    label={"نمایش تعداد آیتم : "}
		    size={"mini"}
		    value={lastCoursesCount}
		    type={"number"}
		    onChange={handleChangeInput}
		/>
	    </div>

	    <div style={{margin:"30px 0"}}>
		<Popup
		    size={"mini"}
		    content={"لطفا عدد را بصورت میلی ثانیه وارد نمایید (4000)"}
		    trigger={
		        <Input
			    name={"lastCoursesSpeed"}
			    labelPosition={"left"}
			    label={"سرعت حرکت اسلایدها : "}
			    size={"mini"}
			    value={lastCoursesSpeed}
			    type={"number"}
			    onChange={handleChangeInput}
		    	/>}
		/>
	    </div>

	    <div style={{margin:"40px 0"}}>
		{/* -------------from -----------*/}
		<div
		    onClick={()=>setShowPickerLastFrom(true)}
		    className={"swatch"}
		>
		    <div className={"colorPicker"} style={{background:lastCoursesColorFrom}} />
		</div>
		{
		    showPickerLastFrom &&
		    <div className={"popover"}>
			<div className={"cover"} onClick={()=>setShowPickerLastFrom(false) }/>
			<SketchPicker
			    style={{margin:"20px 0 !important"}}
			    color={lastCoursesColorFrom}
			    onChange={(color)=>dispatch(setSliderLastCoursesColorFrom(color.hex))}
			/>
		    </div>
		}
		{/* ----------------- to ---------------*/}
		<div
		    onClick={()=>setShowPickerLastTo(true)}
		    className={"swatch"}
		>
		    <div className={"colorPicker"} style={{background:lastCoursesColorTo}} />
		</div>
		{
		    showPickerLastTo &&
		    <div className={"popover"}>
			<div className={"cover"} onClick={()=>setShowPickerLastTo(false) }/>
			<SketchPicker
			    style={{margin:"20px 0 !important"}}
			    color={lastCoursesColorTo}
			    onChange={(color)=>dispatch(setSliderLastCoursesColorTo(color.hex))}
			/>
		    </div>
		}
	    </div>

	</Container>
    )
};

export default SliderSetting;
