import { Comment, Delete, Edit, Name, Fecha, Contenido } from "./SingleNote.style"
import React,{ChangeEvent, useEffect, useRef, useState} from "react"
import { Note } from "../types"

export default function SingleNote (props: {info: Note, list: Note[], update: React.Dispatch<React.SetStateAction<Note[]>> }) {
    const { info, list, update } = props
    const [isEditMode, setEditMode] = useState<boolean>(true)
    const [currContent, setCurrContent] = useState<string>(info.content)



    useEffect(() => {
        if (isEditMode && currContent !== info.content) {
            console.log('LA COMPROBACION HA SIDO TRUE')
            const actual = list.findIndex(el => el.content === info.content)
            const tempList = list
            tempList[actual].content = currContent
            const id = list[actual].id

            const OPTIONS = {
                method: 'PUT',
                body: JSON.stringify({data : {id, content: currContent}}),
                headers: {
                    'Content-type': 'application/json'
                }
            }

            fetch(`http://localhost:3001/notes`, OPTIONS)
                .then(res => {
                    if (res.ok) update(tempList)
                })
        } 


    },[currContent, isEditMode])


    const handleContent = (e: ChangeEvent<HTMLInputElement>) => setCurrContent(e.target.value)

    const handleUpdate = (e: any) => {
        const element: HTMLInputElement = e.target.parentElement.children[4]

        if (!isEditMode) {
            element.setAttribute('readonly', '') //NO
            setEditMode(true)
        }
        else if (isEditMode) {
            element.removeAttribute('readonly') //SI
            element.focus()
            setEditMode(false)
        }
    }

    const handleDelete = (e: MouseEvent | any) => { // fix types
        const element: HTMLInputElement = e.target.parentElement.children[4]
        const inner: string = element.value
        const note: any = list.find(obj => obj.content === inner)

        fetch(`http://localhost:3001/notes/${note.id}`, {method: 'DELETE'}).then(statusCode => {
        if (statusCode.ok) props.update(prev => prev.filter(el => el.content !== inner))})
    }

    return  <Comment >
                    <Delete onClick={handleDelete}>X</Delete>
                    <Edit onClick={handleUpdate}>{!isEditMode ? 'Save' : 'Edit note'}</Edit>
                    <Name>{info.name + '\t'}</Name>
                    <Fecha>{'\t'+ info.date}</Fecha>
                    <Contenido readOnly value={currContent} onChange={handleContent}/>
                </Comment>
}