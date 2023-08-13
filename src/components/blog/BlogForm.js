import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogForm = () => {
 
    const codeString = 'const message = "Hello, World!";';
    const language = 'javascript';
  
    return (
      <div>
        <h2>Code Example</h2>
        <SyntaxHighlighter language={language} style={darcula}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  }
export default BlogForm;

