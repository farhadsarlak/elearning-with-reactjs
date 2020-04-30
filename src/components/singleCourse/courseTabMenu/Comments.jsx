import React from "react";
import {Container,Button, Comment, Form, Header} from "semantic-ui-react";

const Comments = ()=>{
    return(
        <Container fluid>
	    <Comment.Group>
		<Header as='h3' dividing>
		    نظرات
		</Header>

		<Comment>
		    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
		    <Comment.Content>
			<Comment.Author as='a'>فرهاد</Comment.Author>
			<Comment.Metadata>
			    <div>امروز در ساعت 20:56</div>
			</Comment.Metadata>
			<Comment.Text>دوره بسیار عالی است</Comment.Text>
			<Comment.Actions>
			    <Comment.Action>پاسخ</Comment.Action>
			</Comment.Actions>
		    </Comment.Content>
		</Comment>

		<Comment>
		    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
		    <Comment.Content>
			<Comment.Author as='a'>علی</Comment.Author>
			<Comment.Metadata>
			    <div>دیروز در ساعت 9:20</div>
			</Comment.Metadata>
			<Comment.Text>
			    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
			</Comment.Text>
			<Comment.Actions>
			    <Comment.Action>پاسخ</Comment.Action>
			</Comment.Actions>
		    </Comment.Content>
		    <Comment.Group>
			<Comment>
			    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
			    <Comment.Content>
				<Comment.Author as='a'>محمد</Comment.Author>
				<Comment.Metadata>
				    <div>الان</div>
				</Comment.Metadata>
				<Comment.Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</Comment.Text>
				<Comment.Actions>
				    <Comment.Action>پاسخ</Comment.Action>
				</Comment.Actions>
			    </Comment.Content>
			</Comment>
		    </Comment.Group>
		</Comment>

		<Comment>
		    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
		    <Comment.Content>
			<Comment.Author as='a'>رضا</Comment.Author>
			<Comment.Metadata>
			    <div>5 روز پیش</div>
			</Comment.Metadata>
			<Comment.Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Comment.Text>
			<Comment.Actions>
			    <Comment.Action>پاسخ</Comment.Action>
			</Comment.Actions>
		    </Comment.Content>
		</Comment>

		<Form reply>
		    <Form.TextArea />
		    <Button content='ارسال پاسخ' labelPosition='left' icon='edit' color={"teal"} />
		</Form>
	    </Comment.Group>
	</Container>
    )
};
export default Comments;
