import React, {useEffect} from "react";
import './MainContainer.css';

import {useDispatch, useSelector} from "react-redux";
import {Switch, Route, Redirect} from "react-router";
import {Segment} from "semantic-ui-react";
import {isEmpty} from 'lodash';
import {decodedToken} from "../utils/decodedToken";

import MainLayout from "./layouts/MainLayout";
import Home from "../pages/home/Home";
import PrivateLayout from "./layouts/PrivateLayout";
import LoginRegister from "../pages/loginRegister/LoginRegister";
import {addUser, clearUser} from "../redux/user/userActions";
import Logout from "../components/logout/Logout";
import _ from 'lodash';
import SingleCourse from "../pages/course/singleCourse/SingleCourse";
import Checkout from "../pages/chekout/Checkout";
import Courses from "../pages/course/allCourses/Courses";
import FilterContext from "../components/context/filterContext";
import CompleteThePurchase from "../pages/completeThePurchase/CompleteThePurchase";
import NotFound from "../pages/404/404";
import AdminHomePage from "../components/admin/pages/adminHomePage/Home";
import AdminCoursesPage from "../components/admin/pages/courses/AdminCoursesPage";
import Settings from "../components/admin/pages/settings/Serttings";
import Users from "../components/admin/pages/users/Users";
import AdminDashboardContext from "../components/context/adminDashboardContext";

const MainContainer = ()=>{
    const courses = _.values(useSelector(state => state.courses));
    const user =useSelector(state=> state.user);
    const isLoading = useSelector(state =>state.courses.loading);
    const dispatch = useDispatch();

    useEffect(()=>{
        const token =localStorage.getItem("token");
        if(token){
            const dToken = decodedToken(token);
            const dateNow = Date.now()/1000;

            if(dToken.payload.exp < dateNow){
                localStorage.removeItem("token");
                dispatch(clearUser());
            }else{
                dispatch(addUser(dToken.payload.user))
            }
        }
    },[dispatch]);

    return(
        isLoading ?<Segment size={"big"} className={"segmentLoader"} loading={isLoading}> درحال بارگزاری </Segment>:
                <Switch>
                    <Route path={['/dashboard']}>
                        <PrivateLayout>
                            <Switch>

                                <Route path={"/dashboard/settings"} render={()=>
                                    !isEmpty(user) && user.isAdmin ?
                                        <Settings courses={courses}/>
                                        :
                                        <Redirect to={"/"} />
                                }
                                />

                                <Route path={"/dashboard/users"} render={()=>
                                    !isEmpty(user) && user.isAdmin ?
                                        <Users />
                                        :
                                        <Redirect to={"/"} />
                                }
                                />

                                <Route path={"/dashboard/courses"} render={()=>
                                    !isEmpty(user) && user.isAdmin ?
                                        <AdminDashboardContext courses={courses}>
                                            <AdminCoursesPage/>
                                        </AdminDashboardContext>
                                        :
                                        <Redirect to={"/"} />
                                }
                                />

                                <Route
                                    path={"/dashboard"}
                                    render={()=>
                                        !isEmpty(user.fullname)&&user.isAdmin ?
                                            <AdminHomePage courses={courses}/> :
                                            <Redirect to={"/"} />
                                    }
                                />

                            </Switch>
                        </PrivateLayout>
                    </Route>

                    <Route path={['/']}>
                        <MainLayout>
                            <Switch>

                                <Route path={"/CompleteThePurchase"} component={CompleteThePurchase}/>

                                <Route
                                    path={"/courses"}
                                    render={()=>
                                        courses.length>0 && !isLoading&&
                                        <FilterContext courses={courses} isLoading={isLoading}>
                                            <Courses/>
                                        </FilterContext>
                                    }
                                />

                                <Route
                                    path={"/course/:id"}
                                    component={SingleCourse}
                                />
                                <Route
                                    path={"/checkout"}
                                    render={()=>
                                        courses.length>0 &&
                                            <Checkout courses={courses} isLoading={isLoading}/>
                                    }
                                />

                                <Route
                                    path={"/logout"}
                                    render={()=>
                                        isEmpty(user.fullname)?
                                            <Redirect to={"/"}/>
                                            :
                                            <Logout/>
                                    }
                                />

                                <Route
                                    path={"/loginRegister"}
                                    render={()=>
                                        isEmpty(user.fullname)?
                                            <LoginRegister/>
                                            :
                                            <Redirect to={"/"}/>
                                    }
                                />

                                <Route
                                    exact
                                    path={"/"}
                                    render={()=>
                                        courses.length>0 ?
                                            <Home courses={courses}/>
                                            :
                                            <h2 style={{textAlign:"center",margin:"2em"}}>
                                                دوره ای جهت نمایش وجود ندارد
                                            </h2>
                                    }
                                />
                                <Route exact path={"*"} component={NotFound}/>
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
    )
};

export default MainContainer;
