import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  // BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import AddCustomer from './AddCustomer';
import { CustomerList } from './CustomerList';
// import { Routes ,Route } from 'react-router-dom';
import Home from './Home';
import PracticeCustomer from './PracticeCustomer';




const NavbarComp = () => {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">EV-Fog | ERP Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Customers" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/home"}>Add Customer</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/addcustomer"}>Customer List</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/customerlist"}>Sales Quotes</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/practicecustomer"}>Sales Order</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Sales Invoices</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Credit Invoice</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Return Orders</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Sales return receipts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Delivery Note</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Reminders & Issued</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Payment Reminder</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Sales Statistics</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">All Report lists</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
                <NavDropdown title="Product" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Product List</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Product Category</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Purchase Order</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Purchase Invoice</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Product Warehouse</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Warehouse" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Warehouse</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Import & Exports</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Damaged Product</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Human Resources" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Employees</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Front End" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Front Site</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Menu</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Content</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Add Product</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Address Map</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Order" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">All Order</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Return</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Cancel</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Pending</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">On Way</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Delivered</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Invoice" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Create New Invoice</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Order</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Invoice</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Invoice Agreement</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">EU Invoice</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">International Invoice</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Credit Invoice</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/customerlist" element={<CustomerList />} />
          <Route path="/practicecustomer" element={<PracticeCustomer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavbarComp;