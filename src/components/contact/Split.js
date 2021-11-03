import styled from "styled-components";
//import wallpaper from '../img/computer.png';
export const Split = styled.div`
position: relative;
background-image: url('${props => props.content}');
background-repeat: no-repeat;
background-size: contain;
width: 100%;
height: 100%;
margin:80px 0px;

animation: floating 3s ease-in-out infinite;

@keyframes floating {
  0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}    
}
}
`;

export const Synopsis= styled.div`
  position:relative;
  top:0;
  bottom:0;
  left:0;
  padding-top: 230px;
  //padding-left: 20px;
  width: 100%;
  color: white;
  text-align: center;
  `;

export const SplitTitle = styled.h1`
  fontSize: 2.9vw;
`;

export const SplitImg = styled.img`
  height: 100%;
  width: 100%;
`;
