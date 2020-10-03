import React from "react";
import  {  Container, Nav ,
  NavBrand,
  NavItems,
  NavItem,
  NavItemButton, 
  Title,
  Wrapper, Icon,IconWrapper, Logo  }  from  "./Container";

import '../index.css';

import { SplitImg, Split, SplitTitle, Synopsis } from "./Split.js";
import { Button } from './Button';
import {Footer} from './Footer';

import Falling from "./animation/falling"
import styled, { css } from 'styled-components';
import logo from "./img/logo"
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
  font-size: 80px;
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

const SplitText= (props)=>{
  return(
      <Main aria-label={props.copy} role={props.role}>
          {props.copy.split("").map(function(char, index){
            console.log("index of"+index)
            let style = {"animationDelay": (0.5 + index / 10) + "s"}
            return (<Main Style={{"display":"flex"}} key={index}><Span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </Span>
          {index==28&&<Blink>_</Blink>} 
            
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
                <Button primary>Join Now</Button>
                <Button header>Log in</Button>
                {/* <Icon type="search"/> */}
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

<div>
        <div style={{
"display": "flex",
"position":"relative",

"will-change":"transform",
"width":"100%",
"height":"1800px",
//"clip-path":"polygon(0px 15%, 100% 25%, 100% 85%, 0px 75%)",
"background":"linear-gradient(to right, slateblue 0%, deepskyblue 100%)",
"transform" : "translate3d(0px, 1333.9px, 0px)"
}}>

</div>
<div style={{
"display": "flex",
"position":"relative",

"will-change":"transform",
"width":"100%",
"height":"1800px",
//"clip-path":"polygon(0px 15%, 100% 25%, 100% 85%, 0px 75%)",
"background":"#333"
}}>

</div>

</div>
<Footer></Footer>
</Container>

    );
  }
}
export default Home