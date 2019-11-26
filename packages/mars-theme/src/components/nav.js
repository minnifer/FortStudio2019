import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { NavBar, Nav, NavItem } from 'react-bootstrap';
// const Nav = ({ state }) => (
//   <Container>
//     {state.theme.menu.map(([name, link]) => (
//       <Item key={name} isSelected={state.router.link === link}>
//         <Link link={link}>{name}</Link>
//       </Item>
//     ))}
//   </Container>
// );
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

export default connect(Navbar);

const Container = styled.nav`
  list-style: none;
  display: flex;
  width: 1440px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: auto;
`;

// const Item = styled.div`
//   padding: 0;
//   margin: 0 16px;
//   color: #fff;
//   font-size: 0.9em;
//   box-sizing: border-box;
//   flex-shrink: 0;
  
//   & > a {
//     display: inline-block;
//     line-height: 2em;
//     border-bottom: 2px solid
//       ${({ isSelected }) => (isSelected ? "#fff" : "transparent")};
//   }

//   &:first-of-type {
//     margin-left: 0;
//   }

//   &:last-of-type {
//     margin-right: 0;

//     &:after {
//       content: "";
//       display: inline-block;
//       width: 24px;
//     }
//   }
// `;
