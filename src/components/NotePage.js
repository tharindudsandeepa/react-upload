import React from 'react'
import notes from '../assets/data'


function NotePage({match}){

    let noteId=match.params.id

    let note=notes.find(note =>note.id==noteId)
    return (
        <div className="note">
            <div className="note-header">

            </div>
            
           <p>{note?.body}</p>
        </div>
    )
}

export default NotePage
