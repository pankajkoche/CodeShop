import React, { useState } from 'react';
import axios from 'axios';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { practiceProblem } from '../../utils/practiceProblem';

const languageOptions = [
  { value: 'python', label: 'Python' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'java', label: 'Java' },
  // Add more language options as needed
];

const Practice = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const problemData = practiceProblem.find((problem) => problem.url === path);

  const [code, setCode] = useState(problemData.codeInEditorPython);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = languageOptions.find(
      (option) => option.value === event.target.value
    );
    setSelectedLanguage(selectedLanguage);

    if (selectedLanguage.value === 'javascript') {
      setCode(problemData.codeInEditorJavascript);
    } else if (selectedLanguage.value === 'python') {
      setCode(problemData.codeInEditorPython);
    }
  };

  const handleRunCode = () => {
    setError('');
    setOutput('');
    const language = selectedLanguage.value;
    const input = problemData.testCases[0].input; // Use the first test case input for sample run
    const problem_name = problemData.title;

    if (language === 'javascript') {
      var inputCode = problemData.inputCodeJavascript;
    } else if (language === 'python') {
      var inputCode = problemData.inputCodePython;
    }

    axios
      .post('http://127.0.0.1:8080/code/run_single', {
        language: language,
        code: code + inputCode,
        input: input,
        problem_name: problem_name,
      })
      .then((response) => {
        if (!response.data.error) {
          setOutput(response.data.output);
        } else {
          setError(response.data.error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmitCode = () => {
    const language = selectedLanguage.value;
    const problem_name = problemData.title;

    if (language === 'javascript') {
      var inputCode = problemData.inputCodeJavascript;
    } else if (language === 'python') {
      var inputCode = problemData.inputCodePython;
    }
    setError('');
    axios
      .post('http://127.0.0.1:8080/code/submit', {
        language: language,
        code: code + inputCode,
        problem_name: problem_name
      })
      .then((response) => {
        // Handle multiple test case results
        const results = response.data;
        setOutput(formatResults(results));
        if (response.data[0].error) {
          setError(response.data[0].error);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const formatResults = (results) => {
    return results.map((result, index) => (
      <div key={index} className="mb-4 bg-gray-200 p-4 rounded-md">
        <div className="flex items-center justify-between">
          {result.is_correct ? (
            <FaCheck className="text-green-500 mr-2" />
          ) : (
            <FaTimes className="text-red-500 mr-2" />
          )}
          <div className="font-semibold">Test Case {index + 1}</div>
          <div className="text-gray-600">Expected: {result.expected_output}</div>
        </div>
        <div className="mt-2">
          <div className="text-gray-600">
            <span className="font-semibold">Input:</span> {result.input}
          </div>
          <div className="text-gray-600">
            <span className="font-semibold">Output:</span> {result.output}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-6">{problemData.title}</h1>
          <p className="text-lg text-gray-800 mb-8">{problemData.description}</p>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8 max-h-96 overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Test Cases</h2>
            {problemData.testCases.map((testCase, index) => (
              <div key={index} className="mb-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <span className="font-semibold">Input:</span> {testCase.input}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md mt-2">
                  <span className="font-semibold">Output:</span> {testCase.output}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <form className="mb-4">
            <label htmlFor="language" className="block mb-2 text-lg font-semibold">
              Language:
            </label>
            <select
              id="language"
              value={selectedLanguage.value}
              onChange={handleLanguageChange}
              className="w-full bg-gray-100 p-4 rounded-lg shadow-md mb-4"
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <label htmlFor="code" className="block mb-2 text-lg font-semibold">
              Solution:
            </label>
            <AceEditor
              mode={selectedLanguage.value}
              theme="monokai"
              value={code}
              onChange={handleCodeChange}
              className="bg-blackprint p-4 rounded-lg shadow-md"
              width="100%"
              height="400px"
              fontSize={16}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
              }}
            />

            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={handleRunCode}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold"
              >
                Run
              </button>
              <button
                type="button"
                onClick={handleSubmitCode}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold ml-2"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Output:</h2>
            {error && <div className="text-red-600 mb-4">{error}</div>}
            {output && (
              <div className="p-4 bg-gray-100 rounded-md max-h-96 overflow-y-auto">
                {formatResults(output)}
              </div>
            )}
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleSubmitCode}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded font-semibold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
