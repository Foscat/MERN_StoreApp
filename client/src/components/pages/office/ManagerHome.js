import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TextCard from "../../parts/TextCard";
import FlexTron from "../../parts/FlexTron"
import ResponsiveNav from "../../parts/ResponsiveNav";
import API from "../../../utils/API";
import ManagerAddProductForm from '../../parts/ManagerAddProductForm';


class ManagerHome extends Component {

    constructor(props){
        super(props);

        this.state= {
            pulledProducts: ["carrot"],
            loading: false,
            formInfo: {
                name: "",
                departmant: "",
                manufacturer: "",
                quantity: null,
                price: null,
                description: ""
            }
        }
    }

    componentDidMount(){
        console.log("Did mount: ", this.state)
        console.log("API:", API);
    }


    componentDidUpdate() {
        console.log("Did update: ", this.state)
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleAddProFormSubmit = event => {
        event.preventDefault();
        this.setState({ 
            formInfo: {
                name: this.state.addProName,
                departmant: this.state.addProDept,
                manufacturer: this.state.addProManu,
                quantity: this.state.addProQuan,
                price: this.state.addProPrice,
                description: this.state.addProDes
            }
         });
        // console.log(this.state);
        this.addToInventory();
        
    };

    addToInventory = async (info) => {
        console.log("Add to inventory state: ", this.state);
        this.setState({ loading: true  });
        const addInfo = this.state.formInfo

        API.addProduct({
            product_name: addInfo.name,
            departmant: addInfo.departmant,
            manufacturer: addInfo.manufacturer,
            total_stock: addInfo.quantity,
            price: addInfo.price,
            description: addInfo.description
        })
        .then(() => this.getProducts())
    };

    getProducts= async () => {
        console.log("Get products: ", this.state);
        API.getProducts().then(res => this.setState({ pulledProducts: res.data  }))
        .catch(() => {
            this.setState({ 
                pulledProducts: ["Didn't work"],
                searchTerm: "Go fook ursself"
            });
        })
        this.setState({ loading: false  });
    }


    handleClick = (value) => {
        console.log("click")
        console.log(value);
        API.getProducts().then(res => this.setState({ pulledProducts: res.data  }))
        .catch(() => {
            this.setState({ 
                pulledProducts: [],
                searchTerm: "Go fook ursself"
            });
        })
    };


    render() {
        return (
            <div>

                <Container>

                    <Row>
                        <ResponsiveNav />

                        <FlexTron
                            style={{backgroundColor: "#eee"}}
                            title="My Manager Interface"
                            subtitle="Allows me to navagate and update store database"
                        >
                            <input type="text" placeholder="Search"></input>
                            <Button onClick={() => this.handleClick("my value")}>Submit Search</Button>

                        </FlexTron>

                        <h1>Manager Home</h1>

                        <Row>
                            <Col>
                                <TextCard
                                    style={{backgroundColor: "#ddd", width: "45%"}}
                                    title="Add products"
                                    subtitle="Fill out form with product information and click submit to add to db"
                                >
                                    <ManagerAddProductForm 
                                        handleInputChange={this.handleInputChange} 
                                        handleFormSubmit={this.handleAddProFormSubmit}
                                        name={this.state.formInfo.name}
                                        departmant={this.state.formInfo.departmant}
                                        manufacturer={this.state.formInfo.manufacturer}
                                        quantity={this.state.formInfo.quantity}
                                        price={this.state.formInfo.price}
                                        description={this.state.formInfo.description}
                                    />

                                </TextCard>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default ManagerHome;