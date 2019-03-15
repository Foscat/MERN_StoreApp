import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ManagerForm = (props) => {
    return(
        <div className="ManagerForm">
            <Form style={props.style}>

                <FormGroup>
                    <Label for="productName">Name of product</Label>
                    <Input type="text" name="product_name" 
                     id="productName" placeholder="Input name here" />
                </FormGroup>

                <FormGroup>
                    <Input type="select" name="department" 
                     id="selectDepartment" multiple>
                        <option>General goods</option>
                        <option>Gadgets</option>
                        <option>Clothes</option>
                        <option>Toys</option>
                        <option>Seasonal</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Manufacturer">Manufacturer</Label>
                    <Input type="text" name="manufacturer" id="Manufacturer" 
                        placeholder="Input manufacturer name here" />
                </FormGroup>

                <FormGroup>
                    <Label for="totalStock">Quantity</Label>
                    <Input type="number" name="total_stock" id="totalStock" 
                        placeholder="Input stock quantity here" />
                </FormGroup>

                <FormGroup>
                    <Label for="textDescription">Text Area</Label>
                    <Input type="description" name="text" id="textDescription" />
                </FormGroup>

                <Button onSubmit={() => props.handleFormSubmit()}>Submit</Button>
            </Form>
        </div>
    )
}

export default ManagerForm;