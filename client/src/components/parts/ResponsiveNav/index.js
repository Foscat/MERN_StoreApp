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

                <Nav horizontal>

                    <NavbarBrand>
                        <h2 className="navLogo">mylogo</h2>
                    </NavbarBrand>

                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/manager">Manager</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>

                </Nav>

            </div>
        )
    
    }
} 

export default ResponsiveNav;