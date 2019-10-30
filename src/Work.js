import React from 'react';
import { Card, Col, Container, Row, Button, Image, Text } from 'react-bootstrap';
import github from './github.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'
import youtube from './youtubelogo.png'
import instagram from './Instagramlogo.png'
import Box from './Box'
import './App.css';

function Work() {
  return (
    <div className="work-page">
        <div className="intro">
            <h1>hey there.</h1>
            <h1>i'm a software developer in chicago.</h1>
            <h5 className="connect">LET'S CONNECT HERE:</h5>
            <row className="icons">
                <a href="https://github.com/SarahMAmann" target="_blank"><img src={github} className="icon-item" alt="logo" /></a>
                <a href="https://www.linkedin.com/in/sarah-amann-b48a49b6/" target="_blank"><img src={linkedin} className="icon-item" alt="logo" /></a>
                <a href="https://twitter.com/ItsSarBearr" target="_blank"><img src={twitter} className="icon-item" alt="logo" /></a>
                <a href="https://www.youtube.com/channel/UCsXev_Ovyyi1oJMAQnze_xA" target="_blank"><img src={youtube} className="icon-item" alt="logo" /></a>
                <a href="https://www.instagram.com/itssarbearr/" target="_blank"><img src={instagram} className="icon-item" alt="logo" /></a>
            </row>
        </div>
        <div className="work-area">
            <Box />
        </div>
    </div>
  );
  }

export default Work;