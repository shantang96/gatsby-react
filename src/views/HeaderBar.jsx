import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import styled from 'styled-components'
import tw from 'tailwind.macro'


const NuNavbar = styled(Navbar)`
${tw`uppercase inline-flex list-reset text-white`};
`

const NuNav = styled(Nav)`
  ${tw`text-white font-sans text-lg font-bold mr-6 py-8 px-8 hover:text-yellow`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const NuForm = styled(Form)`
    ${tw`uppercase inline-flex shadow-md rounded px-8 py-8 pb-8 mb-6`};
`
const NuFormControl = styled(FormControl)`
    ${tw`border-solid border-white border-2 ml-2 font-sans inline-flex focus:outline-none list-reset text-black font-light text-lg p`};
`
const NuButton = styled(Button)`
    ${tw`border-solid border-black border-none shadow-inner-md pointer-events:auto focus:outline-none ml-2 font-sans inline-flex list-reset text-white text-base`};
    background-color: rgba(255, 255, 255, 0);
    :active {
  box-shadow: 0 1px rgba(27, 232, 82, 0.53);
  transform: translateY(0.5px);
};
`

const HeaderBar = ({ children, offset }) => (
  <>
    <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 10%, 100% 82%, 0 94%)" speed={0.2} offset={offset} />
    <NuNavbar sticky="top" variant="light" expand="lg">
        <NuNav href="/">Home</NuNav>
        <NuNav>Tracking</NuNav>
        <NuNav>Login</NuNav>
        <NuForm>
          <NuFormControl type="text" placeholder="Username" className="mr-sm-2" />
          <NuFormControl type="password" placeholder="Password" className="mr-sm-2" />
          <NuButton>Login</NuButton>
        </NuForm>
    </NuNavbar>
    <Navbar sticky="top" fixed="top" bg="light" expand="lg">
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
    </Navbar>;
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default HeaderBar

HeaderBar.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
