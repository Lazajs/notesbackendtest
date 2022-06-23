import React, { useState, useEffect } from "react"
import { Note, UserData } from "../types"
import Insert from "./Insert"
import View from "./View"
import { useLocation } from "wouter"

export default function NotesPage(props: { user: UserData }) {
    const [notes, setNotes] = useState<Array<Note>>(props.user.notes) //shown
    const [, setLocation] = useLocation()

    useEffect(() => {
        if (!props.user.username) setLocation('/')
    }, [])


    return (<>
        <Insert set={setNotes} user={props.user} />

        {
            notes ? <View list={notes} update={setNotes} />
                : ''
        }
    </>
    )
}