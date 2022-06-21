import React from "react"
import Heading from "./components/Heading"
import { Route } from "wouter"
import NotesPage from "./components/NotesPage"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"


function App() {
  return (<>
    <Heading />
    <Route path="/notes" component={NotesPage} />
    <Route path="/" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />

  </>)

}


export default App

// crear ruta de login en /
// agregar el formulario y los endpoints
// usar wouter