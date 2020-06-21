import React, { useState } from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function NewNotes() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    return (
        <div>
            <p>Add Notes</p>
             <Editor 
                editorState={editorState} 
                onChange={setEditorState}
            />
        </div>
       
    )
}

export default NewNotes;
