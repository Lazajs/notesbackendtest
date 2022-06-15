import React from "react";
import { Note } from "../types";
import { Wrapper } from "./View.style";
import SingleNote from "./SingleNote";

export default function View ( props : {list : Note[], update: React.Dispatch<React.SetStateAction<Note[]>> } ){
    const { list, update } = props
    
    return (
        <Wrapper> 
            { 
                list.map((e: Note) => {
                return <SingleNote key={e.id} list={list} info={e} update={update} />
                })
            }
        </Wrapper>
    )
}
    