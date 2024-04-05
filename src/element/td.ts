import styled from "styled-components";

interface TdProps{
    whidth?: string;
}

const Td = styled.td<TdProps>`
    width: ${props=>props.whidth || 'auto'};
    padding: 4px;
    border: 1px solid #ccc;



`


export {Td};