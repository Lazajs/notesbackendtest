import { FormDataFromRequest, Note } from "../types"

export default async function fetchNotes(): Promise<Array<Note>> {

  const peticion = await fetch('http://localhost:3001/notes')
                    .then(res => res.json())
                    .then(res => {
                        const newOnes: Array<Note> = res.map((el : FormDataFromRequest) => {
                        el.id = el._id
                        delete el._id
                        delete el.__v
                        return el
                    }
                    )          
                    return newOnes
          })
          return peticion
        }