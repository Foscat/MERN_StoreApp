import React, { Component } from 'react';
import { Col, Row, Container } from "reactstrap";
import API from "../../../utils/API";
import CustomerSignUp  from "../../parts/CustomerSignUp";

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state= {

        }
    }

    // General handler for inputs thats value is to change the state on the DOM
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    // function that handles adding a customer to the db
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
            sale_history: [],
            payments: {},
            // user_since: 
        })
        // .then(() => this.getUsers())
    };

    render() {
        const signUp = {
            border: "solid darkblue 1px",
            backgroundColor: "#eee",
            width: "50%",
            margin: "10px",
            padding: "10px",
        }
        return (
            <div>
                <CustomerSignUp 
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.signUpUser} 
                    style={signUp}
                />
            </div>
        );
    }
}

export default SignUp;