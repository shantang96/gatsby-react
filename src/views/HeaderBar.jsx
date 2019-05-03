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
  ${tw`text-white font-sans text-lg font-bold mr-6 py-8 px-2 hover:text-yellow`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const NuNavLink = styled(Nav.Link)`
  ${tw`text-white font-sans text-lg font-bold mr-6 py-8 px-6 hover:text-yellow`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const NuForm = styled(Form)`
    ${tw`uppercase inline-flex shadow-md rounded px-2 py-8 pb-8 mb-6`};
`
const NuFormControl = styled(FormControl)`
    ${tw`border-solid border-white border-2 ml-2 font-sans inline-flex focus:outline-none list-reset text-black font-light text-lg p`};
  border-radius: 2px;
  border-width: 2px;
    :focus {
  box-shadow: 0 1.5px yellow;
`
const NuButton = styled(Button)`
    ${tw`uppercase hover:text-blue-dark font-bold border-none pointer-events:auto focus:outline-none ml-4 p-8 font-sans inline-flex list-reset text-white text-lg`};
  :hover{
    color:#167af7;
}
  border-radius: 0px;
  padding: 2px 10px;
    background-color: rgba(255, 255, 255, 0);
    :active {
  box-shadow: 0 1px rgb(84, 244, 0);
  transform: translateY(-0.5px);
};
`

const HeaderBar = ({ children, offset }) => { 
    return (
  <>
    <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 10%, 100% 82%, 0 94%)" speed={0.2} offset={offset} />
    <NuNavbar sticky="top" variant="light" expand="lg">
        <NuNav>
            <NuNavLink href="/">{children[0]}</NuNavLink>
            <NuNavLink href="/tracking">{children[1]}</NuNavLink>
            <NuNavLink>{children[2]}</NuNavLink>
        </NuNav>
        <NuForm>
          <NuFormControl ref={el => username = el} type="text" placeholder="Username" className="mr-sm-2" />
          <NuFormControl ref={el => password = el} type="password" placeholder="Password" className="mr-sm-2" />
          <NuButton onClick={handleClick}>Login</NuButton>
        </NuForm>
    </NuNavbar>
    <Content speed={0.4} offset={offset}>
    </Content>
  </>
)
}

let username;
let password;
function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    console.log(username.value)
    console.log(password.value)
    let content = {Username: username.value,
                   Password: password.value};
    console.log(content);
//    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//            targetUrl = "https://cyorq37jq9.execute-api.us-east-2.amazonaws.com/dev/login"
//    var serverResponse;
//    fetch(proxyUrl + targetUrl, {
//              method: 'post',
//              headers: {
//                'Content-Type': 'application/json'
//              },
//              body: JSON.stringify(content)
//            }).then(res => res.json())
//              .then(response => serverResponse = response)
//              .then(function(){  
//                var result = serverResponse.Status;
//                console.log(typeof result);
//                var reason = serverResponse.Reason;
//                if (result === "Success" )
//                {
//                   window.location.href = "Host- Dashboard.html";
//                }
//                else
//                {
//                    if(reason === "UserDoesNotExist")
//                    {
//                        alert("User does not exist.");
//                    }
//                    if(reason === "IncorrectPassword")
//                    {
//                        alert("Incorrect password.");
//                    }
//                }}).catch(error => console.error('Error:', error));
        //alert("fetch complete");
  }

HeaderBar.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}

export default HeaderBar

