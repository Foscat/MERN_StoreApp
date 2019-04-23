import React from 'react';
import Flextron from "../FlexTron";
import TextCard from "../TextCard";
import { Row, Container } from 'reactstrap';
import CustomerSignUpForm from './CustomerSignUpForm';

const CustomerSignUp = (props) => {
    
    return(
        <div className="CustSignUp ft_mukta">

            <Container>

                <Row>

                    <Flextron
                     style={{backgroundColor: "#fff", border: "dashed red 2px", width: "80%"}}
                     title="Join Today!"
                     subtitle="Become a member of the online shopping community."
                    >
                     <p>Join today and start reaping the benifits of being a member.</p>
                     <ul>
                        <li>Keep track of purchase history</li>
                        <li>Recive free members only coupons and discounts.</li>
                        <li>Get the latest scoop on new items coming to the store</li>
                     </ul>
                    </Flextron>

                    <TextCard 
                     title="Sign Up Card"
                     subtitle="Fill out info and sign up"
                     style={{width:"fit-content"}}
                    >
                        <CustomerSignUpForm />
                    </TextCard>

                </Row>

            </Container>

        </div>
    )
}

export default CustomerSignUp;