import React from "react";
import styled from "styled-components";

import one from "../../img/computer.png";
import two from '../../img/github.png';
//import netflix from "../../img/netflixlogonew.png"
import netflixIcon from "../../img/logoIcon.png"
import {Card} from "../card"
//const content = [one, two]
const content = [{"picture":one, "title": "CMS", "detail":"Construction Management System using C#", "url":"https://github.com/EyuelMathewos/constraction-management-system-C"},{"picture":two, "title": "CMS2", "detail":"Construction Management System Using Node and React","url":"https://github.com/EyuelMathewos/Construction-Managment-System-React"},{"picture":netflixIcon, "title": "Netflix Clone Flutter", "detail":"This project is a simplified front end clone of Netflix. Created with Flutter.","url":"https://github.com/EyuelMathewos/NetflixCloneFlutter"},{"picture":netflixIcon, "title": "Netflix Clone React", "detail":"Netflix clone design by styled components","url":"https://netflix-clone-et.herokuapp.com/"}]
export  const  FlexContainer  =  styled.div`
    position: relative;
    display: flex;
     `;
    export  const  CardContainer  =  styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    height: 100%;
    width:100%;
   // background: #ddd5d5;

    @media (max-width: 1440px) {
        grid-template-columns: 50% 50%;
        
      }
      @media (max-width: 1200px) {
        grid-template-columns: 50% 50%;
        
      }
      @media (max-width: 1024px) {
       
          grid-template-columns: 50% 50%;
        
      }
      @media (max-width: 768px) {
          
        grid-template-columns: 100%;
        
      }
      @media (max-width: 480px) {
          grid-template-columns: 100%;
      }

    `;
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

//     export  const  Card  =  styled.div`
//     display:grid;
//     grid-template-columns: 50% 50%;
//     //background-size: cover;
//     //background-position: center;
//     //background-image: url('${props => props.content}');
//     fontSize: 24px;
//     font-weight: bold;
//     text-shadow: 0 0 10px rbga(0, 0, 0, 0.2);
//     color: red;
//     text-align: center;
//     /* padding: 50px 0px;*/
//     margin: 6px;
//     //width:300px;
//     height:300px;
//     background: linear-gradient(to right, rgb(213, 133, 255) 0%, rgb(0, 255, 238) 100%);
//     border-radius: 13px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//     transition: all 0.3s ease;
//     &:hover {
//         margin-top: -5px;
//       }

//     @media (max-width: 1440px) {
//         width:${props => (props.swidth)/4}px;
       
//      }
//      @media (max-width: 1200px) {
//         width:${props => (props.swidth)/4}px;
       
//      }
//      @media (max-width: 1024px) {
      
//         width:${props => (props.swidth)/4}px;
       
//      }
//      @media (max-width: 768px) {
         
//         width:${props => (props.swidth)-9/3}px;
       
//      }
//      @media (max-width: 480px) {
//         width:${props => (props.swidth)}px;
//      }
//       `;
// export const CardTitle = styled.h1`
//       fontSize: 42px;
//       color: white;
//     `;

// export const CardDetial = styled.p`
//       color: white;
//     `;

export class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
       }
      


  render() { 
    
    return(

        <FlexContainer>
        <CardContainer>

          {content.map((data, i) => (
          //     <Card key={i}> 
          //     <Image swidth={this.state.width} width={this.state.width} content={data.picture}/>
          // <div><CardTitle>{data.title}</CardTitle><CardDetial>{data.detail}</CardDetial></div>
          //     </Card>
          <Card cardDetial={data} key={i}/>
            ))
            }


        </CardContainer>
        </FlexContainer>
    );

        
    
  }
}