import React from 'react';
import '../CourseData.css';
import {Card, Image, Label} from "semantic-ui-react";
import config from '../../../services/config';
import {Link} from "react-router-dom";
import NumberFormat from "react-number-format";

const CourseData = ({course:{_id,title,imageUrl,price}})=>{
    return(
        <Card
            className={"cardItem"}
            as={Link}
            to={`/course/${_id}`}
            color={"orange"}
            fluid
        >
            <Image
                src={`${config.api}/${imageUrl}`}
                ui={false}
                centered
                size={"mini"}
                wrapped
            />
            <Card.Content>
                <Card.Header className={"cart-header-productOffer"}>
                    {title}
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
                <div className={"textLeft"}>
                    <Label color={"red"} pointing >
                        {
                            price === 0 ? "رایگان" :
                                <NumberFormat
                                    value={price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={" تومان "}
                                />
                        }
                    </Label>
                </div>
            </Card.Content>
        </Card>
    )
};
export default CourseData;
