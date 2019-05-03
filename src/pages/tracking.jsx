import React, {Component} from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
//import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import HeaderBar from '../views/HeaderBar'

//import Popup from "reactjs-popup";
import ReactModal from 'react-modal'
import ModalWindow from '../components/ModalWindow'
import GoogleMapReact from 'google-map-react'
//import { ListGroup, ListGroupItem, Container } from "shards-react";
import SiderDemo from '../components/SiderDemo'

const MapWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const NuParallax = styled(Parallax)`
    ${tw`flex flex-wrap justify-between mt-8`};
    display:inline-block;
    max-width: 1000px;
    max-height: inherit;
`


class Tracking extends Component {
    
//    componentDidMount () {
//        const script = document.createElement("script");
//
//        script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap";
//        script.async = true;
//
//        document.body.appendChild(script);
//        var mapProp= {
//                center:new google.maps.LatLng(51.508742,-0.120850),
//                zoom:5,
//            };
//        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);    
//    }

    
    static defaultProps = {
        center: {lat: 40.73, lng: -73.93},
        zoom: 12
    };

    render()
    {
    return (
            <div style={{background: 'rgb(4, 20, 39)'}}>
                <SiderDemo>
                    <NuParallax pages={2} >
                        <GoogleMapReact 
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            yesIWantToUseGoogleMapApiInternals>
                        </GoogleMapReact>
                    </NuParallax>
                </SiderDemo>
            </div>
                  
    )
    }
    
    
}



export default Tracking