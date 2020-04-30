import React,{Fragment,useState} from "react";
import './CheckoutItem.css';

import {Segment , Image , Grid , Button , Label,Modal} from "semantic-ui-react";
import config from '../../services/config';
import NumberFormat from "react-number-format";
import {useDispatch} from "react-redux";
import {addItemToCart, decrement, removeFromCart} from "../../redux/cart/cartActions";
import {errorMessage, successMessage, warningMessage} from "../../utils/showMessage";

const CheckoutItem =({cartItem}) =>{

    const [showModal,setShowModal]=  useState(false);
    const onOpenModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);

    const dispatch = useDispatch();

    return(
        <Fragment>
	    <Segment raised color={"red"} className={"checkoutPage-segment"} >
		<Grid>
		    <Grid.Column width={4} className={"image-in-checkOutItemPage"}>
			<Image
			    verticalAlign='middle'
			    size={"tiny"}
			    src={`${config.api}/${cartItem.imageUrl}`}
			/>
		    </Grid.Column>
		    <Grid.Column width={12} column={2}>
			<Grid.Column width={12}>
			    <Grid.Row>
				<h3 className={"checkoutPage-title"}>
				    {cartItem.title}
				</h3>
			    </Grid.Row>
			    <Grid.Row textAlign={"right"}>
				<p style={{padding:"10px 0", textAlign:"justify",fontSize:"12px"}}>
				    {cartItem.info.substring(0,50)+"..."}
				</p>
			    </Grid.Row>
			    <Grid.Row className={"checkoutPage-item-container"}>
				<Grid.Column width={16}>
				    <Button.Group>
					<Button icon={"plus"} onClick={() => {
					    dispatch(addItemToCart(cartItem));
					    successMessage("محصول با موفقیت به سبد خرید شما اضافه شد");
					}}/>
					<Button.Or text={cartItem.quantity}/>
					<Button icon={"minus"} onClick={() => {
					    dispatch(decrement(cartItem));
					    warningMessage("از تعداد درخواستی محصول کم شد ")
					}}/>
					<Button icon={"trash alternate"} color={"red"} onClick={onOpenModal} />

				    </Button.Group>
				</Grid.Column>
			    </Grid.Row>
			</Grid.Column>
			<Grid.Column with={4}>
			    <Label color={"red"} attached='bottom right' className={"label-price"}>
				<NumberFormat
				    value={cartItem.price*cartItem.quantity}
				    displayType={'text'}
				    thousandSeparator={true}
				/>
				{" "}  تومان
			    </Label>
			</Grid.Column>
		    </Grid.Column>
		</Grid>
	    </Segment>
	    <Modal size={"mini"} open={showModal} onClose={onCloseModal} dimmer={"blurring"}>
		<Modal.Header>
		    حذف محصول
		    <h5 style={{padding:"5px 0"}}>{cartItem.title}</h5>
		</Modal.Header>

		<Modal.Content>
		    <p>از حذف محصول اطمینان دارید؟</p>
		</Modal.Content>
		<Modal.Actions>
		    <Button
			positive
			icon={"checkmark"}
			labelPosition={"left"}
			content={"بله، کاملا"}
			size={"small"}
			onClick={()=>{
			    dispatch(removeFromCart(cartItem));
			    errorMessage("محصول از سبد خرید شما حذف شد");
			    onCloseModal();
			}}
		    />
		    <Button negative content={"خیر"} onClick={onCloseModal}/>

		</Modal.Actions>
	    </Modal>

	</Fragment>
    )
};

export default CheckoutItem;
