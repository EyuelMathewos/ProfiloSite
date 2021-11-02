import React from 'react'
import styled from 'styled-components';
import { Icon } from '.././Container';
import {Button} from ".././Button";
export  const  Image  =  styled.div`
background-size: contain;
background-position: center;
background-image: url('${props => props.content}');
background-repeat: no-repeat;
fontSize: 24px;
font-weight: bold;
text-shadow: 0 0 10px rbga(0, 0, 0, 0.2);
color: red;
text-align: center;
/* padding: 50px 0px;*/
margin: 6px;
width:100%
`;

export  const  CardContainer  =  styled.div`
display:grid;
grid-template-columns: 50% 50%;
//background-size: cover;
//background-position: center;
//background-image: url('${props => props.content}');
fontSize: 24px;
font-weight: bold;
text-shadow: 0 0 10px rbga(0, 0, 0, 0.2);
color: red;
text-align: center;
/* padding: 50px 0px;*/
margin: 6px;
//width:300px;
height:300px;
background: linear-gradient(to right, rgb(213, 133, 255) 0%, rgb(0, 255, 238) 100%);
border-radius: 13px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
transition: all 0.3s ease;
&:hover {
    margin-top: -5px;
  }

@media (max-width: 1440px) {
    width:${props => (props.swidth)/4}px;
   
 }
 @media (max-width: 1200px) {
    width:${props => (props.swidth)/4}px;
   
 }
 @media (max-width: 1024px) {
  
    width:${props => (props.swidth)/4}px;
   
 }
 @media (max-width: 768px) {
     
    width:${props => (props.swidth)-9/3}px;
   
 }
 @media (max-width: 480px) {
    width:${props => (props.swidth)}px;
 }
  `;
export const CardTitle = styled.h1`
  fontSize: 1.5em;
  color: white;
`;

export const CardDetial = styled.p`
  color: white;
  height:25%;
  fontSize: 0.8em;
`;
export class Card extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseHover = this.handleMouseHover.bind(this);
     this.state = {
        width: window.innerWidth,
        catagory:props.catagory,
        isHovering: false
      };

    }  

    handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }
      golink = () => {
        window.open('http://google.com','_blank');
    }


    render() {
        return (

            <CardContainer onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}> 
              <Image swidth={this.state.width} width={this.state.width} content={this.props.cardDetial.picture}/>
          <div><CardTitle>{this.props.cardDetial.title}</CardTitle>
          <CardDetial>{this.props.cardDetial.detail}</CardDetial>
          {this.state.isHovering && this.props.cardDetial.url!=null &&<div style={{"display":"absolute","float":"right"}}>
             <a href={this.props.cardDetial.url} target="_blank" rel="noopener noreferrer"> <Button> Link <Icon secondary className="fa fa-play" aria-hidden="true"/></Button></a>
           </div>}
          </div>

              </CardContainer>
        )
    }

}
export default Card