import { useState } from "react";
import SplitPane, { Pane } from 'split-pane-react';
import Editor from './LexicalEditor';
import ExcalidrawCanvas from "./excalidrawCanvas";

export default function SplitLayout() {
  
    const [sizes, setSizes] = useState([
        '40%',
        '60%'
    ]);

    const [editorState, setEditorStatee] = useState();
  
    const layoutCSS = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
  
    return (
        <div style={{ height: '100vh' }}>
            <SplitPane
                split='vertical'
                sizes={sizes}
                onChange={setSizes}
            >
                <Pane minSize='30%' maxSize='90%'>
                    <div style={{ ...layoutCSS, background: '#ddd' }}>
                    <Editor setEditorStatee={setEditorStatee}/>
                    </div>
                </Pane >
                <Pane minSize='30%' maxSize='90%'>
                    <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
                    <ExcalidrawCanvas editorState={editorState}/>
                    </div>
                </Pane>
            </SplitPane>
        </div>
    )
  }
  