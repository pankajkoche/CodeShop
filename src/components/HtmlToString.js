import React, { useState } from 'react';

function HTMLToStringConverter() {
  const [code, setCode] = useState("");
  const [codeString, setCodeString] = useState("");


  const handleConvertClick = () => {
    const escapedCode = code.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\n");
    setCodeString(`"${escapedCode}"`);
  }
  

  return (
    <div className="max-w-xl mx-auto my-2 p-2 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Code to String Converter</h1>
      <div className="flex flex-col">
        <label htmlFor="code" className="text-gray-700 font-bold mb-2">Enter Code:</label>
        <textarea
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="resize-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={8}
        />
      </div>
      <button
        onClick={handleConvertClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Convert to String
      </button>
      <div className="flex flex-col mt-4">
        <label htmlFor="code-string" className="text-gray-700 font-bold mb-2">Code String:</label>
        <textarea
          id="code-string"
          readOnly
          value={codeString}
          className="resize-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={8}
        />
      </div>
    </div>
  );
}

export default HTMLToStringConverter;
