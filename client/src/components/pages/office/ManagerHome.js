import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TextCard from "../../parts/TextCard";
import FlexTron from "../../parts/FlexTron"
import ResponsiveNav from "../../parts/ResponsiveNav";


class ManagerHome extends Component {

    constructor(props){
        super(props);

        this.state= {

        }
    }

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
                            <Button>Submit Search</Button>

                        </FlexTron>

                        <h1>Manager Home</h1>

                        <Row>
                            <Col>
                                <TextCard
                                    style={{backgroundColor: "#ddd", width: "45%"}}
                                    title="Sample Card"
                                    subtitle="just some filler"
                                >
                                    This is my text card
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