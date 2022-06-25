import React, { useEffect, useState } from "react";
import { Input, Send, Name } from "./Insert.style";
import { FormData, Note, UserData } from "../types";

const postData = (data: FormData) => {
    const CONFIG = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + data.userToken
        },
        body: JSON.stringify(data)
    }
    return fetch('http://localhost:3001/notes', CONFIG).then(res => res.json())
}

export default function Insert(props: { set: React.Dispatch<React.SetStateAction<Note[]>>, user: UserData }) {
    const [info, setInfo] = useState<FormData>({ content: '', important: false, date: '', userToken: props.user.userToken })
    const [val, setVal] = useState<string>('')

    useEffect(() => {
        if (info.content) postData(info).then(res => {
            props.set(prev => prev.concat(res))
        }).catch(console.log)
    }, [info])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setVal('')
        setInfo({ ...info, content: val.trim(), date: Date() })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value)
    }

    return (
        <>
            <Name>{props.user.username}</Name>
            <form onSubmit={handleSubmit}>
                <Input value={val} onChange={handleChange} type='text' />
                {val ? <Send>Send</Send> : ''}
            </form>

        </>
    )
}   