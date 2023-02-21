import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
const CodeBlock = ({ code }) => {
    const lan ="python"
    return (
        
        <div>
    <SyntaxHighlighter language={lan} style={vscDarkPlus}>
                {code}
    </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;