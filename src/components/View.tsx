import React from "react";
import { Note, UserData } from "../types";
import { Wrapper } from "./View.style";
import SingleNote from "./SingleNote";

export default function View(props: { list: Note[], update: React.Dispatch<React.SetStateAction<Note[]>>, user: UserData }) {
    const { list, update } = props

    return (
        <Wrapper>
            {
                list.map((e: Note) => {
                    return <SingleNote user={props.user} key={e.date} list={list} info={e} update={update} />
                })
            }
        </Wrapper>
    )
}
