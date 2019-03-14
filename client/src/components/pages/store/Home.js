import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TextCard from "../../parts/TextCard";
import FlexTron from "../../parts/FlexTron"
import ResponsiveNav from "../../parts/ResponsiveNav";
import ProductSlide from "../../parts/ProductSlide";

class Home extends Component {
    constructor(props){
        super(props);

        this.state= {

        }
    }

    render() {
        const mystyle ={
            backgroundColor: "grey",
            width: "25%"
        }
        const jumbo = {
            border: "solid black 2px",
            backgroundColor: "green",
            color: "white"
        }
        const product = {
            border: "solid darkblue 1px",
            backgroundColor: "#eee",
            width: "20%"
        }
        return (
            <div>
                <ResponsiveNav />
                <Container>
                    <Row>
                        <h1>Customer Home</h1>
                        <FlexTron
                            style={jumbo}
                            title="Flextron"
                            subtitle="my lead"
                        >
                            <h3>This is a flextron</h3>
                        </FlexTron>
                        <TextCard 
                            style={mystyle}
                            title="my first card"
                            subtitle="subtitle"
                        >
                            Stuff in my card
                        </TextCard>

                        <Col>
                            <ProductSlide 
                                style={product}
                                title="Store item"
                                subtitle="This is where selling points go"
                                image="http://www.disk.com/wp-content/uploads/2016/04/event-gift-item-services-by-corporate-disk-company-2.jpg"
                                description="This is the description of the product"
                            >
                                <Button>More info</Button>
                            </ProductSlide>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;