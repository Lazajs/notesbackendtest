import styled from "styled-components";

export const Comment = styled.div`
    width: 100%;
    height:fit-content;
    border: 1px dashed #666;
    padding: 1rem;
    margin: 2rem 0 0 0;
    position: relative;
`

export const Name = styled.b`
    font-size: 1.8rem;
    text-transform: uppercase;
`

export const Fecha = styled.b`
    font-size: 1rem;
    color: #666;
`

export const Contenido = styled.input`
    padding: 1rem;
    font-size: 1.6rem;
    font-family: sans-serif;
    border:none;
    outline: none;
    width: 100;
`

export const Delete = styled.b`
    font-weight: 700;
    position: absolute;
    background: black;
    right: 1rem;
    top: 1rem;
    color: white;
    font-family: arial;
    width: 2rem;
    text-align: center;

    &:hover {
        background-color: #333;
        cursor: pointer;
    }
`

export const Edit = styled.button`
    border: none;
    outline: none;
    font-size: 1.5rem;
    border: 1px solid black;
    padding: .3rem;
    position: absolute;
    right: 4rem;
    top: 1rem;
    background: black;
    color: white;

    &:hover {
        background-color: #333;
        cursor: pointer;
    }
`