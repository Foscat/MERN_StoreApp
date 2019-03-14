import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardSubtitle } from 'reactstrap';

const TextCard = (props) => {
    return(
        <div>
            <Card style={props.style}>
          
                <CardHeader>

                    <CardTitle>
                        <h2>{props.title}</h2>
                    </CardTitle>

                    <CardSubtitle>
                        <h5>{props.subtitle}</h5>
                    </CardSubtitle>

                </CardHeader>

                <CardBody>

                    {props.children}
        
                </CardBody>

            </Card>
        </div>
    )
}

export default TextCard;