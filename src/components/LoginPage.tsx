import React, { useEffect, useState } from "react"
import { Form, Input, Send, LinkToRegister } from "./LoginPage.style"
import { FormLoginData } from "../types"
import { useLocation } from "wouter"

export default function LoginPage() {
    const [info, setInfo] = useState<FormLoginData>({ username: '', password: '' })
    const [location, setLocation] = useLocation()

    useEffect(() => {
        const { username, password } = info

        if (username && password) {
            fetch('http://localhost:3001/user/register', {
                method: 'POST',
                body: JSON.stringify(info),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.ok) setLocation('/notes')
            }).catch(err => console.log(err))
        }

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