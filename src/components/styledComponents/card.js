import React from "react";
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export  const  Box  =  styled.div`
    position:relative;
   // padding: 20px;
    will-change:transform;
    width:100%;
    height:1200px;
    //clip-path:polygon(0px 15%, 100% 25%, 100% 85%, 0px 75%);
    background:linear-gradient(to right, slateblue 0%, deepskyblue 100%);
   // transform : translate3d(0px, 1333.9px, 0px);
      `;

  export const BoxTitle = styled.h1`
      font-size: 42px;
      color: white;
      padding: 20px;
    `;
    export const BoxDetial = styled.h4`
      color: white;
    `;
{/* <div style={{
"display": "flex",
"position":"relative",

"will-change":"transform",
"width":"100%",
"height":"1800px",
//"clip-path":"polygon(0px 15%, 100% 25%, 100% 85%, 0px 75%)",
"background":"#333"
}}>

</div> */}