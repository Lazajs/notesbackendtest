import React, { useState, useEffect } from "react"
import { Form, Input, Send, LinkToLogin } from "./RegisterPage.style"
import { useLocation } from 'wouter'
import { FormRegisterData } from "../types"


export default function RegisterPage() {
    const [info, setInfo] = useState<FormRegisterData>({ username: '', password: '', email: '', confirmation: '' })
    const [, setLocation] = useLocation()

    useEffect(() => {
        const { email, username, password, confirmation } = info

        if (email && email.includes('@') && email.includes('.') && username && password && password === confirmation && confirmation) {
            fetch('http://localhost:3001/user/',
                {
                    method: 'POST',
                    body: JSON.stringify({ email, username, password }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then(response => {
                if (response.ok) setLocation('/')
            })
        }
    }, [info])

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const formulario: any = e.target
        const data: any = new FormData(formulario)

        setInfo({ username: data.get('username'), password: data.get('password'), email: data.get('email'), confirmation: data.get('confirmation') })
    }




    return (
        <Form onSubmit={handleSubmit} method="post">
            <Input required placeholder="Username" name="username" type='text' />
            <Input required placeholder="your email" name="email" type='email' />
            <Input required placeholder="new password" name="password" type='password' />
            <Input required placeholder="confirm password" name="confirmation" type='password' />
            <Send>Register</Send>
            <LinkToLogin onClick={() => setLocation('/')}>Already have an account? Login!</LinkToLogin>

        </Form>
    )

}