import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body{
        font-family: "Avenir";
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    img{
        width:100%;
    }
    p,a,ol{
        color:#3F4042;
    }
    
   

`;
export default GlobalStyles;
