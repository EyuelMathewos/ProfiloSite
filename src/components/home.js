import React from "react";
import  {  Container, Nav ,
  NavBrand,
  NavItems,
   
  
   Icon, Logo  }  from  "./Container";
import { Box, BoxTitle, BoxDetial } from "./styledComponents/box";
import '../index.css';

import {  Split, Synopsis } from "./Split.js";
import {Footer} from './Footer';

import Falling from "./animation/falling"
import styled from 'styled-components';
import logo from "./img/logo";
import { Grid } from "./styledComponents/Grid/grid";
import Contact from "./contact/contact.js"
import { ContactCard } from "./contact/contact.js"

import PopUp from "./contact/popup"
export const Main = styled.span`
//color: tomato;
    position: relative;
    bottom: 0em;
    opacity: 0;
    animation: move-text 0.75s forwards;
;


`;
export const Span = styled.span`
    color: #ffffff;
    position: relative;
    //bottom: -1em;
    opacity: 0;
    animation: move-text 0.75s forwards;
    &:hover {
      //bottom: 0em;
      font-weight: 700;
      //font-size:90px;
    }


`;
export const Blink = styled.span`
color: white;
animation: blink 1s linear infinite;

@keyframes blink{
  0%{opacity: 0;}
  50%{opacity: .5;}
  100%{opacity: 1;}
  }
`;
export const H1 = styled.h1`
  font-size: 5.9vw;
  text-align: center;
  //font-weight: 800;
  //color: #353239;

${Main}{
   // color: tomato;
    position: relative;
   // bottom: -1em;
    opacity: 0;
    animation: move-text 0.75s forwards;

  
  ${Span}{
 :nth-child(1n) {
  &:hover {
 color: tomato;
  }
  }


  :nth-child(2n) {
    &:hover {
      color: lightseagreen;
       }
  }

  :nth-child(3n) {
    &:hover {
      color: orange;
       }
  }


:nth-child(4n) {
  &:hover {
    color: dodgerblue;
     }
  }

:nth-child(5n) {
  &:hover {
    color: blueviolet;
     }
  }
}
@keyframes move-text {
  0% {
      //bottom: -0.2em;
      opacity: 1;
  }
  
  50% {
      bottom: 0.2em;
  }

  100% {
      bottom: 0;
      opacity: 1;
  }
}


@media screen and (max-width: 500px) {
body {
  transform: scale(0.75);
}


`;
export const FloatDiv = styled.div`

  animation: floating 3s linear infinite;
  width:100%;
  height:200px;
  //margin-left: 30px;
  margin-top: 5px;

@keyframes floating { 
  0% { transform: translate(0,  0px) } 
  50%  { transform: translate(0, 15px) } 
  100%   { transform: translate(0, -0px) }     
} 
`;
export const FloatImg = styled.img`

  //animation: floating 3s linear infinite;
  width:300px;
  height:100px
  //margin-left: 30px;
  marginTop: 5px;

// @keyframes floating { 
//   0% { transform: translate(0,  0px) } 
//   50%  { transform: translate(0, 15px) } 
//   100%   { transform: translate(0, -0px) }     
// } 
`;
const SplitText= (props)=>{
  return(
      <Main aria-label={props.copy} role={props.role}>
          {props.copy.split("").map(function(char, index){
            //console.log("index of"+index)
            let style = {"animationDelay": (0.5 + index / 10) + "s"}
            return (<Main Style={{"display":"flex"}} key={index}><Span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </Span>
          {index===28&&<Blink>_</Blink>} 
            
            </Main>)
          })
          }
        </Main>
    );
};

// let buffer = ["this is intial state"];
// document.addEventListener('DOMContentLoaded', () => {
//   'use strict';



//   document.addEventListener('keydown', event => {
//       const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
//       const key = event.key.toLowerCase();

//       // we are only interested in alphanumeric keys
//       if (charList.indexOf(key) === -1) return;
//       //console.log(this.state.Movielist+"this is state")
//       buffer.push(key);
//       console.log(buffer);
//   });
//});
export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Movielist: [],

        };
      }
      
 
  render() {
    return(
      <Container>
<Nav>
            <Logo src={logo}/>
            <NavBrand to="/">
            Lion Tech
            </NavBrand>

           
            <NavItems>
              
            </NavItems>
        </Nav>
        <Split>        

        <Falling></Falling>
        <div style={{"height":"100%","position": "absolute",
  "top": "0",
  "left": "0",
  "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"

  }}>
 <div style={{ "width":"100%"}}> <H1 style={{ "marginLeft":"50px"}}><SplitText copy="Hi i'm Eyuel i am a Developer" role="heading" /></H1></div>
</div>

        <Synopsis>
        
            </Synopsis>

        </Split>

        {/* position: relative;
// background-image: url('${wallpaper}');
background-color: #141821;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: ${window.innerHeight-20}px;
top: */}

<Box>
<BoxTitle>Projects</BoxTitle> <br/>
<BoxDetial></BoxDetial>
<Grid/>
</Box>


<Box secondary>
<BoxTitle>Contact Me</BoxTitle>
<ContactCard>
<div style={{  "display": "flex",
            "justifyContent": "space-between",
            "align-items": "center",
            "padding": "20px",
            "width":"80%"
            }}>
<a href="https://t.me/EyuelM" target="_blank" rel="noopener noreferrer"> <Icon style={{"font-size":"48px", "paddingLeft":"20px", "margin":"2px 8px 0px 0px"}} className="fa fa-telegram"/></a>
<a href="https://www.linkedin.com/in/eyuel-mathewos-a5701a164/" target="_blank" rel="noopener noreferrer"><Icon style={{"font-size":"48px", "paddingLeft":"20px", "margin":"2px 8px 0px 0px"}} className="fa fa-linkedin"/></a>
<a href="mailto:eyuelmathewos@gmail.com" target="_blank" rel="noopener noreferrer"><Icon style={{"font-size":"48px", "paddingLeft":"20px", "margin":"2px 8px 0px 0px"}} className="fa fa-envelope"/></a>
</div>
<Contact/>
</ContactCard>




</Box>

{/* <Box>
<BoxTitle>About</BoxTitle>

<Card style={{  "display": "flex",
            "justifyContent": "space-between",
            "margin": "0",
            "padding": "0",
            "overflow": "hidden",
            "height": "400px",
            "width":"100%"}}>
  <FloatImg src={daco}/>
  
  <FloatDiv>
  <CardTitle>I am Creative and innovative</CardTitle> 
  <CardTitle>I have technical skills</CardTitle>
  <CardTitle> Problem Solving</CardTitle> 
  <CardTitle>Fascinated to Learn</CardTitle>
  </FloatDiv>
</Card>
</Box> */}

<Footer></Footer>
<PopUp/>
</Container>

    );
  }
}
export default Home