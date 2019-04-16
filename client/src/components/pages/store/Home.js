import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TextCard from "../../parts/TextCard";
import FlexTron from "../../parts/FlexTron"
import ResponsiveNav from "../../parts/ResponsiveNav";
import ProductSlide from "../../parts/ProductSlide";
import CustomerSignUpForm from "../../parts/CustomerSignUpForm";
import DepartmentRadioFilter from "../../parts/DepartmentRadioFilter";
import API from '../../../utils/API';
import "./style.css";
// import SweetAlert from "react-bootstrap-sweetalert";

class Home extends Component {
    constructor(props){
        super(props);

        this.state= {
            loading: false,
            userPool: [],
            pulledProducts: [],
            myId: "",
            info: null,
            stockInfo: null,
            show: false,
            title: null,
            text: null
        }
    }

    componentDidMount(){
        this.getUsers();
        console.log(this.state);
    }

    componentDidUpdate(){
        console.log("Upadate", this.state);
    }

    // General handler for inputs thats value is to change the state
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    // Under construction
    handleDeptFilterFormSubmit = async () => {
        console.log("Filter department", this.state.deptRadio);
    }
    // End construction

    signUpUser = async () => {
        console.log("Add user state: ", this.state);
        this.setState({ loading: true  });
        const s = this.state

        API.addUser({
            first_name: s.addCustName1,
            last_name: s.addCustName2,
            email: s.addCustEmail,
            password: s.addCustPass,
            phone_num: s.addCustPhone,
            zipcode: s.addCustZip,
            user_type: "customer",
            sale_history: ["beanbag"]
        })
        .then(() => this.getUsers())
    };

    getUsers= async () => {
        console.log("Get users: ", this.state);
        API.getUsers().then(res => this.setState({ userPool: res.data  }))
        .catch(() => {
            this.setState({ 
                userPool: ["Didn't work"]
            });
        })


        this.setState({ loading: false  });
    }

    // Sends off to tils where there is a api call to the backend route that gets all info in inventory db
    getProducts= async () => {
        this.setState({ loading: true  });
        console.log("Get products: ", this.state);
        API.getProducts().then(res => this.setState({ pulledProducts: res.data  }))
        .catch(() => {
            this.setState({ 
                pulledProducts: ["Didn't work"]
            });
        })
        this.setState({ loading: false  });
    }

    // //////// Under construction \\\\\\\\\\\\\
    addToCart = async (id, updateData) => {
        this.setState({ loading: true  });
        console.log("Adding to user cart:", id);
        console.log("Update data: ", updateData);
        // API.updateUser(id, updateData).then(res => this.setState({ info: res.data  }));
        // this.takeStockFromInventory(updateData.sale_history, {total_stock:100})

    }

    // takeStockFromInventory = async (id, quantity) => {
    //     console.log("info check", id, quantity)
    //     API.updateProduct(id, quantity).then(res => this.setState({ stockInfo: res.data  }))

    //    await this.getProducts();
    // }



    render() {

        const userBox = {
            
        }
        const mystyle ={
            border: "solid 1px black", 
            backgroundColor: "#cec9fd",
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
            width: "50%",
            margin: "10px",
            padding: "10px",
        }
        const signUp = {
            border: "solid darkblue 1px",
            backgroundColor: "#eee",
            width: "50%",
            margin: "10px",
            padding: "10px",
        }


        return (
            <div className="Home">
                <ResponsiveNav />
                <Container>
                    <Row>
                        <h1 style={{fontSize:"300%"}} className="ft_ProstoOne">Customer Home</h1>
                        <FlexTron
                            style={jumbo}
                            title="Flextron"
                            subtitle="my lead"
                        >
                            <h3>This is a flextron</h3>
                        </FlexTron>
                        <TextCard
                            style={mystyle}
                            title="Simple query button card"
                            subtitle="Click a button to get functions to fire."
                        >
                            
                            <Button type="button" onClick={() => this.getProducts()}>Get products</Button>
                            {/* under construction <Button type="button" onClick={() => this.sweetTest()}>Sweet alert</Button> */}
                        </TextCard>

                        <Row style={{display:"flex"}}>

                            <Col style={{width:"40%"}}>
                                <TextCard
                                    title="Sign up card"
                                    subtitle="Fill out for to add user to db"
                                    style={{border:"solid blue 2px", backgroundColor: "rgb(144, 114, 95)", margin:"10px"}}
                                >
                                    <CustomerSignUpForm 
                                        handleInputChange={this.handleInputChange}
                                        handleFormSubmit={this.signUpUser}
                                        style={signUp}
                                    />
                                </TextCard>
                            </Col>

                            <Col>
                                <TextCard
                                    style={{border: "solid red 2px", backgroundColor: "rgb(144, 114, 95)", margin:"10px"}}
                                    title="Find products by demartment"
                                    subtitle="Select a depeartment and click filter to get only items from that department."
                                >
                                    {/* Under construction */}
                                    <DepartmentRadioFilter 
                                        handleFormSubmit={this.handleDeptFilterFormSubmit}
                                        handleInputChange={this.handleInputChange}
                                    />
                                    {/* End Construction */}

                                </TextCard>
                            </Col>
                            
                        </Row>

                        {/* Row containing all the inventory cards */}
                        <Row className="around">
                            {this.state.pulledProducts.length ? (
                                <div className="center">
                                    {this.state.pulledProducts.map((item) => {
                                        return(
                                            <ProductSlide
                                                className="ft_anton" 
                                                key={item._id}
                                                title={item.product_name}
                                                subtitle={item.department}
                                                style={product}
                                                image={item.image}
                                                description={item.description}
                                            >
                                                <Col>
                                                    <p>Price(each): {item.price}</p>
                                                    <p>Manufacturer: {item.manufacturer}</p>
                                                    <p>Total in stock: {item.total_stock}</p>
                                                    <Button type="button" onClick={() => this.addToCart(this.state.myId, {"sale_history":item._id} )}>Add to shopping cart</Button>
                                                </Col>
                                            </ProductSlide>
                                        );
                                    })}
                                </div>
                            ) : (<h1>Nothing Here</h1>)}
                        </Row>

                        <Row className="around">
                            {this.state.userPool.length ? (
                                <div className="center">
                                    {this.state.userPool.map((user) => {
                                        return(
                                            <TextCard
                                                style={}
                                                className="ft_anton"
                                                key={user._id}
                                                title={user.first_name + " " + user.last_name}
                                                subtitle={"User since " + user.created_at}
                                            >
                                                {/* Under construction */}
                                                <p>info about the user goes here</p>
                                                {/* End construction */}

                                            </TextCard>
                                        )
                                    })}
                                </div>
                            ) : (<h2>Nothing here</h2>)}
                        </Row>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;