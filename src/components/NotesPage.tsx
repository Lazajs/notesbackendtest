import React, { useState, useEffect } from "react"
import useGetAllNotes from "../hooks/useGetAllNotes"
import { Note } from "../types"
import Insert from "./Insert"
import View from "./View"

export default function NotesPage() {
    const [notes, setNotes] = useState<Array<Note>>([]) //shown

    useEffect(() => {
        useGetAllNotes().then(res => {
            setNotes(res)
        })
    }, [])



    return (<>
        <Insert set={setNotes} />

        {
            notes ? <View list={notes} update={setNotes} />
                : ''
        }
    </>
    )
}