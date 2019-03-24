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

                    <CardImg style={{width: "100%", height:"100%",maxHeight:"300px", maxWidth:"300px"}} src={props.image} />

                    <CardSubtitle>
                        <p>{props.subtitle}</p>
                    </CardSubtitle>

                </CardHeader>

                <hr />

                <CardBody>
                    <p style={{display:"flex", width:"90%"}}>{props.description}</p>
                    <div>
                        {props.children}
                    </div>
                </CardBody>

            </Card>
        </div>
    )
}

export default ProductSlide;
