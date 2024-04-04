import styled from "styled-components";

const Row = styled.div`

flex-direction: row;
flex-grow:1;
display: flex; 
flex-wrap: no-wrap;
width: 100%; /* Define a largura máxima */
column-gap: 20px;
padding:8px;



/* Estilos para telas pequenas (por exemplo, smartphones em modo retrato) */
@media screen and (max-width: 600px) {
    width: calc(100% - 19px)
    flex-wrap: wrap;
    flex-direction: column;
}

/* Estilos para telas médias (por exemplo, tablets em modo paisagem) */
@media screen and (min-width: 601px) and (max-width: 1024px) {
    width: calc(100% - 19px)
    flex-wrap: wrap;
    flex-direction: column;
}

/* Estilos para telas grandes (por exemplo, desktops) */
@media screen and (min-width: 1025px) {
    width: calc(100% - 19px)
}

`


export {Row};