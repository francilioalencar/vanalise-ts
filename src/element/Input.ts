import styled from "styled-components";

interface InputProps{
    width?: string;
}

const Input = styled.input<InputProps>`
    border-radius: 4px;
    padding: 4px;
    border: 1px solid #ccc;
    font-size:12pt;
    font-family: "Verdana";
    margin: 0px 0px 4px 0px;
    /* Estilos para telas pequenas (por exemplo, smartphones em modo retrato) */
    @media screen and (max-width: 600px) {
        width: calc( ${porps=>porps.width || '100%'} - 19px)
    }
    
    /* Estilos para telas médias (por exemplo, tablets em modo paisagem) */
    @media screen and (min-width: 601px) and (max-width: 1024px) {
        width: calc( ${porps=>porps.width || '100%'} - 19px)
    }
    
    /* Estilos para telas grandes (por exemplo, desktops) */
    @media screen and (min-width: 1025px) {
        width: calc( ${porps=>porps.width || '100%'} - 19px)
    }

`


export {Input};