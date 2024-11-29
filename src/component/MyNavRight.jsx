import React from "react";
import { BellFill, Link, Search } from "react-bootstrap-icons";
import { Row, Col, Nav } from "react-bootstrap";
import Avatar from '../img/avatar.png'
/*import { Link } from "react-router-dom";*/

function NavRight(){
    return(
        <Row className="d-flex align-items-center flex-nowrap me-3"> 
        <Col className="d-none d-sm-block">
        <Nav.Item>
          <Search color="white" size="1rem" className="nav-icon " />
        </Nav.Item></Col>
        <Col className="d-none d-sm-block">
        <Nav.Item>
          <span className="nav-icon text-white ">KIDS</span> 
        </Nav.Item></Col>
        <Col className="d-none d-sm-block">
        <Nav.Item>
          <BellFill color="white" size="1rem" className="nav-icon " />
        </Nav.Item></Col>
        <Col className="d-none d-sm-block">
        

        <img src={Avatar} alt="avatar" className="nav-avatar " style={{height:'30px', width:'30px'}}/></Col>
      </Row>
    )
}
export default NavRight