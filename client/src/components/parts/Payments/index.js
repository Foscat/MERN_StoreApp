import React, { Component } from 'react';
import {Row, Col, Form, FormGroup, Input, Label, Button, Pa} from "reactstrap"
const stateList = [
    "AK",
    "AR",
    "AL",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY"
  ];

  const Payments = () => {
      return(
          <div>
              <Row>
                  <Col>
                    <h3>Payment Information</h3>
                  </Col>

                  <Col>
                    <Form>
                        <FormGroup>
                            <Label for="cardNum">Card Number</Label>
                            <Input name="cardNum" type="number"></Input>
                            <Input type="number" placeholder="month"></Input>
                        </FormGroup>
                    </Form>
                  </Col>
              </Row>
          </div>

      )
  }

  export default Payments;