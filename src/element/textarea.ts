import styled from "styled-components";

interface TextareaPrpos{
    height  ?:  string; 
}

const Textarea = styled.textarea<TextareaPrpos>`
    min-height: ${props=>props.height || '200px'};
    max-height: ${props=>props.height || '200px'};
    border-radius: 4px;
    padding: 4px;
    border: 1px solid #ccc;
    font-size:12pt;
    font-family: "Verdana";
    resize: none;


`


export {Textarea};