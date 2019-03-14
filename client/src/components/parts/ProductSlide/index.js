import React from 'react';
import { Card, CardImg, CardBody, CardHeader, CardTitle, CardSubtitle } from 'reactstrap';

const ProductSlide = (props) => {
    return (
        <div>
            <Card style={props.style}>

                <CardHeader>

                    <CardTitle>
                        <h2>{props.title}</h2>
                    </CardTitle>

                    <CardImg  top width="250px" height="250px" src={props.image} />

                    <CardSubtitle>
                        <p>{props.subtitle}</p>
                    </CardSubtitle>

                </CardHeader>

                <hr />

                <CardBody>
                    <p>{props.description}</p>
                    <div>
                        {props.children}
                    </div>
                </CardBody>

            </Card>
        </div>
    )
}

export default ProductSlide;
