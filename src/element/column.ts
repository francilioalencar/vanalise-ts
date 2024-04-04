import styled from "styled-components";

interface ColumnProps{
    width   ?: string | '100%';
    border  ?: string | 'none%';
}


const Column = styled.div<ColumnProps>`
display: flex; 
margin: 4px 0px 0px 0px;
flex-wrap: wrap;
width: ${props=>props.width || '100%'}; /* Define a largura máxima */
border: ${props=>props.border || 'none%'}; /* Define a largura máxima */
flex-direction: column;
column-gap: 20px;
padding:8px;



/* Estilos para telas pequenas (por exemplo, smartphones em modo retrato) */
@media screen and (max-width: 600px) {
    width: calc(100% - 19px)
    
}

/* Estilos para telas médias (por exemplo, tablets em modo paisagem) */
@media screen and (min-width: 601px) and (max-width: 1024px) {
    width: calc(100% - 19px)
}



`


export {Column};