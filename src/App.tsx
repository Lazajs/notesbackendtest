import React, { useState, useEffect } from "react"
import Heading from "./components/Heading"
import { Route } from "wouter"
import NotesPage from "./components/NotesPage"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import { useLocation } from 'wouter'
import { UserData } from "./types"

function App() {
  const [userData, setUserData] = useState<UserData>({ username: '', notes: [], userToken: '' })
  const [, setLocation] = useLocation()

  useEffect(() => {
    const loggedUser: any = localStorage.getItem('loggedUser')
    const parsedUser: UserData = JSON.parse(loggedUser)

    if (parsedUser) {
      setUserData(parsedUser)
    }
  }, [])

  useEffect(() => {
    if (userData && userData.username) {
      console.log(userData)
      setLocation('/notes')
    }
  }, [userData])

  return (<>
    <Heading />
    <Route path="/notes">
      {userData ? <NotesPage user={userData} /> : ''}
    </Route>
    <Route path="/">
      <LoginPage user={setUserData} />
    </Route>
    <Route path="/register" component={RegisterPage} />

  </>)

}


export default App

// crear ruta de login en /
// agregar el formulario y los endpoints
// usar wouter