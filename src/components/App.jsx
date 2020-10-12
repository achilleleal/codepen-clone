import React, { useState } from 'react';
import Editor from './Editor'

function App() {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  return (
    <>
      <div className="pane top-pane">
        <Editor 
          lang="xml"
          title="HTML" 
          value={html} 
          onChange={setHtml}
        />
        <Editor 
          lang="javascript" 
          title="JS" 
          value={css} 
          onChange={setCss}
        />
        <Editor 
          lang="css" 
          title="CSS" 
          value={js} 
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
