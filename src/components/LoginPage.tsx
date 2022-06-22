import React, { useEffect, useState } from "react"
import { Form, Input, Send, LinkToRegister } from "./LoginPage.style"
import { FormLoginData, UserData } from "../types"
import { useLocation } from "wouter"

export default function LoginPage(props: { user: React.Dispatch<React.SetStateAction<UserData>> }) {
    const [info, setInfo] = useState<FormLoginData>({ username: '', password: '' })
    const [, setLocation] = useLocation()

    useEffect(() => {
        const { username, password } = info

        if (username && password) {
            fetch('http://localhost:3001/user/login', {
                method: 'POST',
                body: JSON.stringify(info),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(nres => {
                    if (nres.user) props.user(nres.user)
                })
                .catch(err => console.log(err))
        }
        // ARREGLAR : LA ACCION A USAR PARA LOGUEARSE Y TENER EL USERID, PARA RECUPERAR LAS NOTAS 
    }, [info])

    const handleSumbit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const formulario: any = e.target
        const data: any = new FormData(formulario)

        setInfo({ username: data.get('username'), password: data.get('password') })
    }


    return (
        <Form onSubmit={handleSumbit} method='post' >
            <Input defaultValue='' placeholder='Username' name="username" type='text' />
            <Input defaultValue='' placeholder="Password" name="password" type='password' />
            <Send>Login</Send>
            <LinkToRegister onClick={() => setLocation('/register')} >New here? Register!</LinkToRegister>
        </Form>
    )
}