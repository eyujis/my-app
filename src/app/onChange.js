import { $getRoot, $getSelection } from "lexical";

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!

export default function onChange(editorState) {
    
    editorState.read(() => {
    // Read the contents of the EditorState here.
    
    //the content from the whole editor
    const root = $getRoot();

    //the content form the selected content
    const selection = $getSelection();

    console.log(root.getTextContent())

    // console.log(root, selection);
  });
}
