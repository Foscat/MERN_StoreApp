import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Container, Row, Col, Button } from 'reactstrap';
import TextCard from "../../parts/TextCard";
import FlexTron from "../../parts/FlexTron"
import ResponsiveNav from "../../parts/ResponsiveNav";
import ProductSlide from "../../parts/ProductSlide";
import CustomerSignInForm from "../../parts/CustomerSignInForm";
import CustomerSignUp from "../../parts/CustomerSignUp";
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
            cartArray: [],
            myId: "123456",
            info: null,
            stockInfo: null,
            // show: false,
            title: null,
            text: null,
            totalPrice: 0
        }
        this.counted = 0;
        
    }

    // When the page loads call function that displays all users in db and log current state
    componentDidMount(){
        this.getUsers();
        console.log("Mount", this.state);
    }


    //Anytime the component updates this function fires
    componentDidUpdate(){
        console.log("Update", this.state);
    }

    // General handler for inputs thats value is to change the state on the DOM
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

    // function that handles adding a customer to the db
    signUpUser = async () => {
        console.log("Add user state: ", this.state);
        this.setState({ loading: true  });
        const s = this.state

        // Take in info from state and send off to post to db
        API.addUser({
            first_name: s.addCustName1,
            last_name: s.addCustName2,
            email: s.addCustEmail,
            password: s.addCustPass,
            phone_num: s.addCustPhone,
            zipcode: s.addCustZip,
            user_type: "customer",
            sale_history: [],
            payments: {},
            // user_since: 
        })
        .then(() => this.getUsers())
    };

    // To sign is a user 
    // ** Under construction needs utils to find one user and checkif info lines up**
    signInUser = async () => {
        console.log("Sign In User");
        // this.setState({ loading: true  });
        
    }

    // Grabs all users in db and displays them on the DOM
    getUsers= async () => {
        console.log("Get users: ", this.state);
        // Meat of code is tucked in the utils folder
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
        // If something goes wrong a default entry into the array is entered
        .catch(() => {
            this.setState({ 
                pulledProducts: ["Didn't work"]
            });
        })
        this.setState({ loading: false  });
    }

    // When a user clicks on the add to cart button on product
    addToCart = async (id, price) => {
        this.setState({ loading: true  });
        const updateData = {id, price};
        this.state.cartArray.push(id);
        const newCount = (updateData.price) + (this.counted);
        this.updateCost(newCount);
    }

    // When a new item is added to cart add up total value
    updateCost = (newCount) => {
        this.counted = newCount;
        this.setState({ totalPrice: newCount,  loading: false });
    }

    // Function to build recipt of items
    // ** Use recipt varible for saving info in history schemas ** 
    buyItems = async () => {
        const contents = this.state.cartArray;
        const initalPrice = this.state.totalPrice; 
        let recipt = [contents, initalPrice];
        console.log("DB recipt: ", recipt);
    }

    render() {

        // Objects to hold temporary css values to import into components
        const userBox = {
            border: "solid black 1px",
            backgroundColor: "#fff",
            padding: "10px"
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

        let date = "1976-04-19T12:59-0500";

        return (
            <div className="Home">
                <ResponsiveNav />
                <Container>
                    {/* Keep this here to show how moment is used in react */}
                    <Moment>{date}</Moment>
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
                            <Button type="button" onClick={() => this.buyItems()}>Buy Items</Button>
                            {/* under construction <Button type="button" onClick={() => this.sweetTest()}>Sweet alert</Button> */}
                        </TextCard>

                        <Row style={{display:"flex"}}>

                            <Col style={{width:"40%"}}>
                                <TextCard
                                    title="Sign in card"
                                    subtitle="Fill out to sign into your account."
                                    style={{border:"solid blue 2px", backgroundColor: "rgb(144, 114, 95)", margin:"10px"}}
                                >
                                    <CustomerSignInForm
                                        handleInputChange={this.handleInputChange}
                                        handleFormSubmit={this.signInUser}
                                        style={signUp}
                                    />

                                    <label for="joinBtn">Not a member?</label>
                                    <a href="/SignUp"><Button id="joinBtn" type="button" className="btn">
                                        Join today!
                                    </Button></a>
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
                                                    <p>Item weight: {item.weight}</p>
                                                    <p>Item Volume: {item.volume}</p>
                                                    <Button type="button" onClick={() => this.addToCart(item._id, item.price)}>Add to shopping cart</Button>
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
                                                style={userBox}
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
                <p style={{visibility: "hidden"}}>Property of K-Fizzle enterprises</p>
            </div>
        );
    }
}

export default Home;