import styled from "styled-components";

interface TdProps{
    whidth?: string;
    background?: string;
}

const Td = styled.td<TdProps>`
    width: ${props=>props.whidth || 'auto'};
    background: ${props=>props.background || 'none'};
    padding: 4px;
    border: 1px solid #ccc;



`


export {Td};