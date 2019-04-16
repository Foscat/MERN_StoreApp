import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TextCard from "../../parts/TextCard";
import FlexTron from "../../parts/FlexTron"
import ResponsiveNav from "../../parts/ResponsiveNav";
import API from "../../../utils/API";
import ManagerAddProductForm from '../../parts/ManagerAddProductForm';
import DepartmentRadioFilter from '../../parts/DepartmentRadioFilter';
import "./style.css";


class ManagerHome extends Component {

    constructor(props){
        super(props);

        this.state= {
            selected: null,
            pulledProducts: ["carrot"],
            loading: false,
            formInfo: {
                name: "",
                image: "",
                department: "",
                manufacturer: "",
                quantity: null,
                price: null,
                description: ""
            }
        }
    }

    // State checkers
    componentDidMount(){
        console.log("Did mount state: ", this.state)
        this.getProducts()
    }
    componentDidUpdate() {
        console.log("Did update: ", this.state)
    }

    // General handler for inputs thats value is to change the state
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    // #### **Make backend and util methods and functions** ####
    handleDeptFilterFormSubmit = event => {
        console.log("form submit");
        event.preventDefault();

        // API.
    }

    // Click handler that takes in infoand updates state. needed for sync timing to filter through
    handleAddProFormSubmit = event => {
        event.preventDefault();
        this.setState({ 
            formInfo: {
                name: this.state.addProName,
                image: this.state.addProImg,
                department: this.state.addProDept,
                manufacturer: this.state.addProManu,
                quantity: this.state.addProQuan,
                price: this.state.addProPrice,
                description: this.state.addProDes
            }
         });
        this.addToInventory();
    };

    // Sends info off to utils where there is a api post to the backend route that saves info into the inventory db
    addToInventory = async () => {
        console.log("Add to inventory state: ", this.state);
        this.setState({ loading: true  });
        const s = this.state

        API.addProduct({
            product_name: s.addProName,
            image: s.addProImg,
            department: s.addProDept,
            manufacturer: s.addProManu,
            total_stock: s.addProQuan,
            price: s.addProPrice,
            description: s.addProDes
        })
        .then(() => this.getProducts())
    };

    // Sends off to tils where there is a api call to the backend route that gets all info in inventory db
    getProducts= async () => {
        console.log("Get products: ", this.state);
        API.getProducts().then(res => this.setState({ pulledProducts: res.data  }))
        .catch(() => {
            this.setState({ 
                pulledProducts: ["Didn't work"]
            });
        })
        this.setState({ loading: false  });
    }

    // #### **Make backend and util methods and functions** ####
    // Function that gets info of a specific item
    getSingleItem = name => {
        console.log("Looking for single item")
        console.log(name);
        // API.getSingleProduct(name).then(res => this.setState({ selected: res.body  }))
    }

    // Function that handles the deleting of a single item from the db
    // tied to a button that is rendered with each item in inventory table
    deleteProduct = id => {
        console.log("Delete function started");
        alert("You are deleting someting from the db!");
        API.deleteProduct(id).then(res => this.getProducts())
    }

    render() {
        const inventoryCard = {
            border: "solid grey 1px",
            margin: "10px",
            padding: "10px",
            backgroundColor: "lightblue",
        }
        return (
            <div className="managerHome">

                <Container>

                    <Row>
                        <ResponsiveNav />

                        <FlexTron
                            style={{backgroundColor: "#eee"}}
                            title="My Manager Interface"
                            subtitle="Allows me to navagate and update store database"
                        >
                            <p>You can add to inventory, see all products in inventory, delete inventory and update product info</p>
                        </FlexTron>

                        <h1>Manager Home</h1>

                        <Row style={{display: "flex"}}>
                            <Col>
                                <TextCard
                                    style={{backgroundColor: "#ddd"}}
                                    title="Add products"
                                    subtitle="Fill out form with product information and click submit to add to db"
                                >
                                    {/* Needs file dropper for user pics */}
                                    {/* See component for that */}
                                    <ManagerAddProductForm 
                                        handleInputChange={this.handleInputChange} 
                                        handleFormSubmit={this.handleAddProFormSubmit}
                                    />
                                </TextCard>
                            </Col>

                            <Col>
                                <TextCard
                                    style={{border: "solid red 2px", backgroundColor: "#ddd"}}
                                    title="Find products by demartment"
                                    subtitle="Select a depeartment and click filter to get only items from that department."
                                >
                                    <DepartmentRadioFilter 
                                        handleFormSubmit={this.handleDeptFilterFormSubmit}
                                        handleInputChange={this.handleInputChange}
                                    />

                                </TextCard>
                            </Col>
                        </Row>


                        {/* Row containing all the inventory cards */}
                        <Row className="around">
                            {this.state.pulledProducts.length ? (
                                <div className="center">
                                    {this.state.pulledProducts.map((item) => {
                                        return(
                                            <TextCard
                                                key={item._id}
                                                title={item.product_name}
                                                subtitle={item.department}
                                                style={inventoryCard}
                                            >
                                                <Col>
                                                    <p>Price(each): {item.price}</p>
                                                    <p>Manufacturer: {item.manufacturer}</p>
                                                    <p>Total in stock: {item.total_stock}</p>
                                                    <Button type="button" onClick={() => this.deleteProduct(item._id)}>Delete</Button>
                                                </Col>
                                            </TextCard>
                                        );
                                    })}
                                </div>
                            ) : (<h1>Nothing Here</h1>)}
                        </Row>
                        

                    </Row>
                </Container>
            </div>
        );
    }

}

export default ManagerHome;