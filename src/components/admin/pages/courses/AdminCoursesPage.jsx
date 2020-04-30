import React, {useContext} from "react";
import './AdminCoursesPage.css';
import {useSelector} from "react-redux";
import config from '../../../../services/config';
import {Button, Container, Pagination, Grid, Segment, Divider} from "semantic-ui-react";
import {AgGridReact} from "ag-grid-react";
import {dashboardContext} from "../../../context/dashboardContext";

const AdminCoursesPage = ()=>{

    const defaultColDef    = useSelector(state => state.agGridReducer);
    const context = useContext(dashboardContext);
    const {
        currentPage,
	handlePaginationChange,
	courseData,
	openDeleteCourseDialog,
	openNewCourseDialog,
	openEditCourseDialog,
	totalPage
    } = context;

    const columnDefs= [
	{
	    headerName: "ردیف",
	    valueGetter: "node.rowIndex + 1",
	    maxWidth:20
	},
	{ headerName: "عنوان", field: "title",autoHeight:true,suppressSizeToFit: true,filter: 'agTextColumnFilter' },
	{ headerName: "قیمت (تومان)", field: "price",autoHeight:true,suppressSizeToFit: true ,filter: 'agTextColumnFilter',
	    cellRendererFramework: function (params) {
		return(
		    <p className={"customItemStyle"}>
			{
			    params.value ===0? "رایگان" : params.value
			}
		    </p>
		)
	    }
	},
	{ headerName: "تصویر", field: "imageUrl",autoHeight:true ,cellRendererFramework: function (params) {
		return (
		    <img
			src={`${config.api}/${params.value}`}
			className="ui large middle aligned image"
			alt={params.value}
		    />
		)
	    }},
	{ headerName: "توضیحات", field: "info" ,width:200,autoHeight:true,suppressSizeToFit: true,filter: 'agTextColumnFilter'},
	{ headerName: "ویرایش", field:'_id',width:50,autoHeight:true,cellRendererFramework: function (params) {
		return (
		    <div
			className={"customItemStyle"}
			onClick={()=>{
			    openEditCourseDialog(params.data)
			}}
		    >
			<button className="ui icon button basic yellow ">
			    <i aria-hidden="true" className="edit icon"/>
			</button>
		    </div>
		)
	    }},
	{ headerName: "حذف", field:'_id',width:50,autoHeight:true,cellRendererFramework: function (params) {
		return (
		    <div
			className={"customItemStyle"}
			onClick={()=>
			    openDeleteCourseDialog(params.data)
			}
		    >
			<button className="ui icon button basic red customItemStyle">
			    <i aria-hidden="true" className="trash alternate icon"/>
			</button>
		    </div>
		)
	    }},
    ];



    return(
        <Container fluid className={"mainContainerAdminCourses"}>
	    <Segment raised color={"red"}>
		<Divider horizontal>
		    <h3>مشاهده تمامی دوره ها</h3>
		</Divider>
		<Grid padded>
		    <Grid.Row stretched style={{margin:"20px 0 "}}>
			<Grid.Column computer={3} tablet={6} mobile={16}>
			    <Button
				content={"اضافه کردن دوره جدید"}
				labelPosition={"left"}
				size={"small"}
				onClick={()=>openNewCourseDialog()}
				color={"red"}
				icon={"plus"}
			    />
			</Grid.Column>

			<Grid.Column computer={6} tablet={10} mobile={16}>
			    {
				<Pagination
				    totalPages={totalPage}
				    onPageChange={handlePaginationChange}
				    defaultActivePage={currentPage}
				    pointing
				    secondary
				/>

			    }
			</Grid.Column>
		    </Grid.Row>

		    <Grid.Row stretched>
			<div className="ag-theme-alpine" style={{
			    height: '100vh',
			    width: '100%' }}
			>
			    <AgGridReact
				defaultColDef={defaultColDef}
				columnDefs={columnDefs}
				rowData={courseData}
				enableRtl={true}
				animateRows={true}
				pivotMode={false}
				sideBar={true}
				floatingFilter={true}
			    />
			</div>
		    </Grid.Row>
		</Grid>
	    </Segment>
	</Container>
    )
};

export default AdminCoursesPage;
