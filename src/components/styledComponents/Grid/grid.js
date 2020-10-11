import React from "react";
import styled from "styled-components";

import one from "../../img/computer.png";
import two from '../../img/github.png';


//const content = [one, two]
const content = [{"picture":one, "title": "CMS", "detail":"Construction Management System using C#"},{"picture":two, "title": "CMS2", "detail":"Construction Management System Using Node and React"},{"picture":one, "title": "Shop App", "detail":"Demo Shop app Design in angular"},{"picture":two, "title": "Netflix Clone", "detail":"Netflix clone design by styled components"}]
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
    background-size: cover;
    background-position: center;
    background-image: url('${props => props.content}');
    font-size: 24px;
    font-weight: bold;
    text-shadow: 0 0 10px rbga(0, 0, 0, 0.2);
    color: red;
    text-align: center;
    /* padding: 50px 0px;*/
    margin: 6px;`;

    export  const  Card  =  styled.div`
    display:grid;
    grid-template-columns: 50% 50%;
    //background-size: cover;
    //background-position: center;
    //background-image: url('${props => props.content}');
    font-size: 24px;
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
      font-size: 42px;
      color: white;
    `;

export const CardDetial = styled.p`
      color: white;
    `;

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
              <Card> 
              <Image swidth={this.state.width} width={this.state.width} key={i} content={data.picture}/>
          <div><CardTitle>{data.title}</CardTitle><CardDetial>{data.detail}</CardDetial></div>
              </Card>
            ))
            }


        </CardContainer>
        </FlexContainer>
    );

        
    
  }
}