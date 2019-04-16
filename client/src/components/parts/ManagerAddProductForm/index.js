import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ManagerAddProductForm = ({style, handleFormSubmit, handleInputChange,}) => {
    return(
        <div className="ManagerForm">
            <Form style={style}>

                <FormGroup>
                    <Label for="productName">Name of product</Label>
                    <Input type="text" name="addProName" onChange={handleInputChange}
                     id="productName" placeholder="Product Name" />
                </FormGroup>

                {/* Make it to where you can put image files from explorer */}
                <FormGroup>
                    <Label for="productImage">Image Link</Label>
                    <Input type="text" name="addProImg" onChange={handleInputChange}
                     id="productName" placeholder="Picture Link" />
                </FormGroup>

                <FormGroup>
                    <Input type="select" name="addProDept" onChange={handleInputChange}
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
                    <Input type="text" name="addProManu" id="Manufacturer"
                     onChange={handleInputChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="totalStock">Quantity</Label>
                    <Input type="number" name="addProQuan" id="totalStock"
                     onChange={handleInputChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="Price">Price</Label>
                    <Input type="number" name="addProPrice" id="Price"
                     onChange={handleInputChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="textDescription">Text Area</Label>
                    <Input type="textarea" name="addProDes" id="textDescription" 
                     onChange={handleInputChange} />
                </FormGroup>

                <Button onClick={handleFormSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

export default ManagerAddProductForm;