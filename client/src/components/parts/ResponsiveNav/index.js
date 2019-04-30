import React, { Component } from 'react';
import { Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';

class ResponsiveNav extends Component {

    getClassNames = page => {
        if(page === this.props.activePage) {
            return 'active item';
        }

        return "item"
    };

    render() {
        if(this.props.signedIn){

        }
        return (
            <div style={{backgroundColor: "grey"}}>

                <Nav>

                    <NavbarBrand>
                        <img style={{height: "5%", width: "5%"}} src="./images/Icon.png" alt="Logo" />
                    </NavbarBrand>

                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/manager">Manager</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="#">My Profile</NavLink>
                    </NavItem>

                </Nav>

            </div>
        )
    
    }
} 

export default ResponsiveNav;