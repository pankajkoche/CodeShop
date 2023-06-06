import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FiBold, FiList, FiUnderline } from 'react-icons/fi';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  }

  const handleBoldClick = () => {
    const boldMarkdown = markdown + '**Bold text** ';
    setMarkdown(boldMarkdown);
  }

  const handleListClick = () => {
    const listMarkdown = markdown + '\n- List item 1\n- List item 2\n- List item 3\n';
    setMarkdown(listMarkdown);
  }

  const handleColorClick = () => {
    const colorMarkdown = markdown + '<span style="color:red">Red text</span> ';
    setMarkdown(colorMarkdown);
  }

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-bold mb-4">Markdown Editor</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Input</h2>
          <div className="input-container">
            <textarea
              className="w-full h-64 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={handleChange}
              value={markdown}
            />
            <div className="input-buttons">
              <button onClick={handleBoldClick}><FiBold /></button>
              <button onClick={handleListClick}><FiList /></button>
              <button onClick={handleColorClick}><FiUnderline /></button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Output</h2>
          <div className="markdown-preview p-2 border rounded-md shadow-sm">
            <ReactMarkdown className="prose" children={markdown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;
