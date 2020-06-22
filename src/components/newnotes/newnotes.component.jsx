import React, { useState } from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function NewNotes() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    return (
        <div className="border-solid border-1 border-gray-100 m-1">
             <Editor 
                editorState={editorState} 
                onChange={setEditorState}
            />
        </div>
       
    )
}

export default NewNotes;
