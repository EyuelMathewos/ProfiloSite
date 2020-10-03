import React from 'react'
import styled from 'styled-components';
import image from "../img/github.png";
import coderocta from "../img/coderocta"
export const Img = styled.img`
// position: relative;
// background-image: url(${props => props.url});
// background-repeat: no-repeat;
// background-size: cover;
width: 100px;
heigt: 100px;
}
`;
export const Span = styled.span`
width: 100px;
heigt: 100px
}
`;
export  const  Fall  =  styled.div`
	dispalay: flex;
	width: 0.1%;
	color: #FFFAFA;
	opacity: 0;
	font-size: 120px;
	margin: 0;
	padding: 0;
    animation: fall 16s linear infinite;
    
    @keyframes fall {
        0% {
            opacity: 0;
        }
        3% {
            opacity: 0.9;
        }    
        90% {
            opacity: 0.9;
        }
        100% {
            transform: translate(0, 97vh);
            //opacity: 0;
        }
    }

`;
// "https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/20167174151551942641-512.png",
//     "https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/9818154791551942292-512.png",
//     "https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/15056343581551942278-512.png",
//     "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
//    "https://github.blog/wp-content/uploads/2012/03/codercat.jpg?resize=896%2C896",

const Snowflake = (props) =>{
    let logos=[
        "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
    image,
    coderocta
     ];
    console.log(logos[Math.floor((Math.random()*logos.length))])
    return(
        <Fall id={`item${props.id}`} style={props.style}>
            
            <Img src={logos[Math.floor((Math.random()*logos.length))]}/>

        </Fall>
        // <p className='Snowflake' id={`item${props.id}`} style={props.style}>
        //     * n/ ()
        // </p>
    )
}




let animationDelay = '0s';
        let fontSize = '100px';
        let arr = Array.from('Snowflakes Snowflakes')
export class Falling extends React.Component {
    snow=()=>{
        // console.log("this is working")
        
                return arr.map((el, i)=>{
            animationDelay = `${(Math.random()*16).toFixed(2)}s`;
            fontSize = `${(Math.floor(Math.random()*10) + 10)}px`;
            let style = {
                animationDelay,
                fontSize
        }
        return (<Snowflake key={i} id={i} style={style}/>)
        })
    }

    render() {

        return (
           <div style={{
            "display": "flex",
            "justifyContent": "space-between",
            "margin": "0",
            "padding": "0",
            "overflow": "hidden",
            "height": "100%",
            "width":"100%"
           }}>

           {/* <p style={{"color":"red", "padding-top":"400px"}}>hello world</p> */}
           
               {
                   arr.map((el, i)=>{
                    animationDelay = `${(Math.random()*16).toFixed(2)}s`;
                    // fontSize = `${(Math.floor(Math.random()*10) + 10)}px`;
                    let style = {
                        animationDelay,
                        fontSize};
                        
                
                return (<Snowflake key={i} id={i} style={style}/>)
            })
            }
            
           


 

           </div> 
        )
    }
}
export default Falling
