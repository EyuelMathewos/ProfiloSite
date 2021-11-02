import styled, { css } from 'styled-components';

export  const  Box  =  styled.div`
    position:relative;
   // padding: 20px;
    will-change:transform;
    width:100%;
    height:100%;
    //clip-path:polygon(0px 15%, 100% 25%, 100% 85%, 0px 75%);
    background:linear-gradient(to right, slateblue 0%, deepskyblue 100%);
   // transform : translate3d(0px, 1333.9px, 0px);
   ${(props) =>
    props.secondary &&
    css`
       background:#0000;
    `}
      `;

  export const BoxTitle = styled.h1`
      fontSize: 42px;
      color: white;
      padding: 20px;
    `;
    export const BoxDetial = styled.h4`
      color: white;
    `;