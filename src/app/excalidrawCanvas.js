"use client";

import { useState, useEffect, useRef } from "react";

export default function ExcalidrawCanvas() {
  const [Excalidraw, setExcalidraw] = useState(null);
  const excalidrawRef = useRef(null);

  useEffect(() => {
    import("@excalidraw/excalidraw").then((comp) => setExcalidraw(comp.Excalidraw));
  }, []);

  const canvasStyle = {
    width: "100%",  // Adjust the width as needed
    height: "100%" // Adjust the height as needed
  };

  const onChange = (excalidrawElements, appState, files) => {
    console.log(excalidrawRef.current.getSceneElements())
  };

  const initialData = {
    elements: [
      {
        "type": "arrow",
        "x": 255,
        "y": 239,
        "label": {
          "text": "HELLO WORLD!!"
        },
        "start": {
          "type": "rectangle"
        },
        "end": {
          "type": "ellipse"
        }
      }
    ]
  }

  return (
    <div style={canvasStyle}>
      {Excalidraw && <Excalidraw initialData={initialData} onChange = {onChange} ref = {excalidrawRef}/>}
    </div>
  );
}