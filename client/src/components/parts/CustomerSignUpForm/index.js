import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CustomerSignUpForm = (props) => {
    return(
        <div className="CustSignUp ft_mukta">
            <Form style={props.style}>

                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="addCustName1" onChange={props.handleInputChange}
                     id="firstName" placeholder="First Name" style={{width: "85%"}} />
                </FormGroup>

                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="addCustName2" onChange={props.handleInputChange}
                     id="lastName" placeholder="Last Name" style={{width: "85%"}} />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Preferred Email</Label>
                    <Input type="email" name="addCustEmail" onChange={props.handleInputChange}
                     id="email" placeholder="Your email" style={{width: "85%"}} />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="addCustPass" onChange={props.handleInputChange}
                     id="password" placeholder="Password" style={{width: "85%"}} />
                </FormGroup>

                <FormGroup>
                    <Label for="phoneNum">Phone Number</Label>
                    <Input type="number" name="addCustPhone" onChange={props.handleInputChange}
                     id="phoneNum" placeholder="Your phone number" style={{width: "85%"}} />
                </FormGroup>

                <FormGroup>
                    <Label for="zip">Zip Code</Label>
                    <Input type="number" name="addCustZip" onChange={props.handleInputChange}
                     id="zip" placeholder="Your zip code" style={{width: "85%"}} />
                </FormGroup>

                <Button onClick={props.handleFormSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

export default CustomerSignUpForm;