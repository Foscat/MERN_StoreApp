import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CustomerSignInForm = (props) => {
    return(
        <div className="CustSignIn ft_mukta">
            <Form style={props.style}>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="signInEmail" onChange={props.handleInputChange}
                     id="email" placeholder="Your email" style={{width: "85%"}} />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="signInPass" onChange={props.handleInputChange}
                     id="password" placeholder="Password" style={{width: "85%"}} />
                </FormGroup>

                <Button onClick={props.handleFormSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

export default CustomerSignInForm;