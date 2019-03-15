import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TextCard from "../../parts/TextCard";
import FlexTron from "../../parts/FlexTron"
import ResponsiveNav from "../../parts/ResponsiveNav";
import API from "../../../utils/API";
import ManagerForm from '../../parts/ManagerForm';


class ManagerHome extends Component {

    constructor(props){
        super(props);

        this.state= {
            pulledProducts: [],
            searchTerm: "",
            formInfo: {}
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.handleProductAdd();
    };


    handleClick = (value) => {
        console.log("click")
        console.log(value);
        API.getProducts()
    };

    handleProductAdd = () => {
        const product = "carrots"
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
                                    <ManagerForm 
                                        handleInputChange={this.handleInputChange} 
                                        handleFormSubmit={this.handleFormSubmit}
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