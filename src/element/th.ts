import styled from "styled-components";

interface ThProps{
    whidth?: string;
}

const Th = styled.th<ThProps>`
    width: ${props=>props.whidth || 'auto'};
    padding: 4px;
    border: 1px solid #ccc;

    resize: none;
    background: #ccc;
    text-align: left;


`


export {Th};