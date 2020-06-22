import React, { useState } from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function NewNotes() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    return (
        <div
            style={{ 
                border: '1px solid #cccccc',
                height: 500,
                width: 1000,
            }}
        >
             <Editor 
                editorState={editorState} 
                onChange={setEditorState}
            />
        </div>
       
    )
}

export default NewNotes;
