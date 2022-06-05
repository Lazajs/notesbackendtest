import React from "react";
import { Note } from "../types";
import { Wrapper, Comment, Name, Fecha, Contenido, Delete, Edit } from "./View.style";

export default function View ( props : {list : Note[], update: React.Dispatch<React.SetStateAction<Note[]>>} ){

    const handleDelete = (e: MouseEvent | any) => { // fix types
        const element: HTMLParagraphElement = e.target.parentElement.children[4]
        const inner: string = element.innerText
        const note: any = props.list.find(obj => obj.content === inner)

        fetch(`http://localhost:3001/${note.id}`, {method: 'DELETE'}).then(statusCode => {
        if (statusCode.ok) props.update(prev => prev.filter(el => el.content !== inner))})
    }
    
    const handleUpdate = (e: MouseEvent) => {
        console.log(e)
    }
    
    return (
        <Wrapper> 
            { 
                props.list.map((e: Note) => {
                return <Comment key={e.id}>
                    <Delete onClick={handleDelete}>X</Delete>
                    <Edit>Edit</Edit>
                    <Name>{e.name + '\t'}</Name>
                    <Fecha>{'\t'+ e.date}</Fecha>
                    <Contenido>{e.content}</Contenido>
                </Comment>
                })
            }
        </Wrapper>
    )
}
    