import Insert from "./components/Insert"
import React, { useEffect, useState } from "react"
import Heading from "./components/Heading"
import View from "./components/View"
import { Note } from "./types"
import useGetAllNotes from './hooks/useGetAllNotes'


function App() {
  const [notes, setNotes] = useState<Array<Note>>([]) //shown

  useEffect(()=> {
    useGetAllNotes().then(res => {
      setNotes(res)
    })
  },[])



  return (<>
    <Heading/>  
    <Insert set={setNotes}/> 

    {
      notes ?  <View list={notes} />
            : ''
    }
   

    
    
  </>
  )
}
  

export default App
