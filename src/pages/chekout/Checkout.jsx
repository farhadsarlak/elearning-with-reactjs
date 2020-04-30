import React, {createRef} from "react";
import './Checkout.css';
import {
    Grid,
    Container,
    List,
    Transition,
    Segment,
    Button,
    Rail,
    Ref,
    Sticky,
    Menu,
    Label,
    Divider
} from "semantic-ui-react";
import {useSelector} from "react-redux";
import NumberFormat from "react-number-format";
import {Link} from "react-router-dom";
import {cartItemsTotal} from "../../utils/cartCount&Total";
import CheckoutItem from "../../components/checkout/CheckoutItem";
import EmptyCart from "../../components/shpoppingCart/emptyCart/EmptyCart";
import {isEmpty} from 'lodash';
import {Helmet} from "react-helmet";

const Checkout = ({courses}) =>{

    const cartItems = useSelector(state=>state.cart.cartItems);
    const user = useSelector(state=> state.user);

    const contextRef = createRef();

    return(
        <Container fluid  className={"checkoutPage-mainContainer"}>
            <Helmet>
                <title> آموزش مجازی| سبد خرید </title>
            </Helmet>

            <Divider horizontal>
                <h2>سبد خرید</h2>
            </Divider>
            {
                cartItems.length >=1 ? (
                    <Grid columns={2}>
                        <Grid.Column className={"column-in-checkout"}>
                            <Ref innerRef={contextRef}>
                                <div className={"checkoutContent"}>
                                    <Transition.Group
                                        as={List}
                                        duration={1000}
                                        size='huge'
                                        verticalAlign='middle'
                                        animaition={"scale"}
                                    >
                                        {
                                            cartItems.map(cartItem=>
                                                <List.Item key={cartItem._id}>
                                                    <List.Content>
                                                        <CheckoutItem cartItem={cartItem} />
                                                    </List.Content>
                                                </List.Item>
                                            )
                                        }
                                    </Transition.Group>
                                    <Rail position='right' className={"railPrice"}>
                                        <Sticky context={contextRef} offset={55}>
                                            <Segment raised color={"red"} className={"checkoutPage-segment"}>

                                                <p><b> مبلغ قابل پرداخت: </b></p>
                                                <b className={"fontSize-price"}>
                                                    <NumberFormat
                                                        value={cartItemsTotal(cartItems)}
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                    />
                                                    {" "}   تومان
                                                </b>
                                                <Button
                                                    negative
                                                    className={"continue-shopping-button"}
                                                    as={Link}
                                                    to={!isEmpty(user.fullname) ? "/CompleteThePurchase" : "/loginRegister"}
                                                    fluid
                                                >
                                                    ادامه فرآیند خرید
                                                </Button>
                                            </Segment>
                                        </Sticky>
                                    </Rail>
                                </div>
                            </Ref>
                        </Grid.Column>
                        <Grid.Row only={"mobile"} textAlign={"center"}>
                            <Grid.Column width={16}>
                                <Label>
                                    <p><b> مبلغ قابل پرداخت: </b></p>
                                    <b className={"fontSize-price"}>
                                        <NumberFormat
                                            value={cartItemsTotal(cartItems)}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                        />
                                        {" "}   تومان
                                    </b>
                                </Label>
                            </Grid.Column>
                            <Menu pointing secondary fixed={"bottom"} size={"small"} className={"buttonBottom"}>
                                <Button
                                    negative
                                    icon={"arrow circle right"}
                                    labelPosition={"right"}
                                    as={Link}
                                    to={!isEmpty(user.fullname) ? "/CompleteThePurchase" : "/loginRegister"}
                                    fluid
                                    content={"ادامه فرایند خرید"}
                                />
                            </Menu>
                        </Grid.Row>
                    </Grid>
                )
                    :
                    <EmptyCart courses={courses}/>
            }
	</Container>
    )
};

export default Checkout;
