import React from 'react';
import {Button, Form, FormGroup, Label, Input} from "reactstrap";

const DepartmentRadioFilter = (props) => {

    return(
        <div className="ft_mukta">
            <Form>
                <FormGroup tag="fieldset">

                    <legend>Radio Buttons</legend>

                    <FormGroup check>
                        <Label check>
                        <Input type="radio" onChange={props.handleInputChange}
                         name="deptRadio" value="General Goods" />{' '}
                            General Goods
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                        <Input type="radio" onChange={props.handleInputChange}
                         name="deptRadio" value="Gadgets" />{' '}
                            Gadgets
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                        <Input type="radio" onChange={props.handleInputChange}
                         name="deptRadio" value="Clothes" />{' '}
                            Clothes
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                        <Input type="radio" onChange={props.handleInputChange}
                         name="deptRadio" value="Toys" />{' '}
                            Toys
                        </Label>
                    </FormGroup>

                    <Button type="button" onClick={props.handleFormSubmit}>Filter</Button>

                </FormGroup>
            </Form>
        </div>
    );
    
}

export default DepartmentRadioFilter;