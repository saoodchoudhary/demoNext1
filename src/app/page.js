"use client"
import React, { useState } from 'react';

const Home = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  const handleHtmlChange = (e) => {
    setHtmlCode(e.target.value);
  }

  const handleCssChange = (e) => {
    setCssCode(e.target.value);
  }

  const handleJsChange = (e) => {
    setJsCode(e.target.value);
  }

  return (
    <div>
      <div>
        <h3>HTML Editor</h3>
        <textarea
          value={htmlCode}
          onChange={handleHtmlChange}
          rows={10}
          cols={50}
        />
      </div>
      <div>
        <h3>CSS Editor</h3>
        <textarea
          value={cssCode}
          onChange={handleCssChange}
          rows={10}
          cols={50}
        />
      </div>
      <div>
        <h3>JavaScript Editor</h3>
        <textarea
          value={jsCode}
          onChange={handleJsChange}
          rows={10}
          cols={50}
        />
      </div>
      <div>
        <h3>Preview</h3>
        <div>
          <style>{cssCode}</style>
          <script>{jsCode}</script>
          <div dangerouslySetInnerHTML={{ __html: htmlCode }} style={{ border: '1px solid #ccc', padding: '10px' }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
