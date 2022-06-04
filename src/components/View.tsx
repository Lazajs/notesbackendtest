import React from "react";
import { Note } from "../types";
import { Wrapper, Comment, Name, Fecha, Contenido, Delete } from "./View.style";

export default function View ( props : {list : Note[]} ){

    const handleClick = (e: React.SyntheticEvent | any) => {
        const element: HTMLParagraphElement = e.target.parentElement.children[3]
        const inner: string = element.innerText

        const note: any = props.list.find(obj => obj.content === inner)

        fetch(`http://localhost:3001/note/${note.id}`, {method: 'DELETE'}).then(statusCode => console.log(statusCode))

        console.log(note)
    }


    return (
        <Wrapper> 
            { 
                props.list.map((e: Note) => {
                return <Comment key={e.id}>
                    <Delete onClick={handleClick}>X</Delete>
                    <Name>{e.name + '\t'}</Name>
                    <Fecha>{'\t'+ e.date}</Fecha>
                    <Contenido>{e.content}</Contenido>
                </Comment>
                })
            }
        </Wrapper>
    )
}