import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
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

import avatar from '../images/avatar.jpg'
//import Popup from "reactjs-popup";
import ReactModal from 'react-modal'
//import ModalWindow from '../components/ModalWindow'


const ProjectsWrapper = styled.div`
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

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-grey-light font-sans flex flex-col pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5} style={{background: '#161719'}}>  
      <HeaderBar offset={0}>
          {'Home'}
          {'Tracking'}
          {'About'}
      </HeaderBar>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> Welcome to my Tracking App.
        </BigTitle>
        <Subtitle>Track your favorite people at their favorite places!</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Companies</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Newt Global"
            link="https://www.newtglobal.com"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
          </ProjectCard>
          <ProjectCard
            title="EFMFM"
            link="https://www.efmfm.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
          </ProjectCard>
{/*
          <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
*/}
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            This website was created using Gatsby. You can do only so much with regular HTML/CSS, for everything else you've got to React.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Go on now, scroll up and down. Watch the Parallax in action.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="shantang@usc.edu">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.instagram.com/thelionking96/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)


export default Index
