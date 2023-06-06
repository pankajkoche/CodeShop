import React, { useState } from 'react';
import marked from 'marked';

const BlogForm = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleMarkdownChange = (event) => {
    const newMarkdown = event.target.value;
    setMarkdown(newMarkdown);
    const newHtml = marked(newMarkdown); // Convert Markdown to HTML
    setHtml(newHtml);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you can save the `html` variable to your database
    // using an API call or any other method you prefer.
    // Example API call using fetch:
    
    fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify({ html }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data saved successfully:', data);
        // Optionally, you can show a success message or redirect the user
      })
      .catch((error) => {
        console.error('Error saving data:', error);
        // Optionally, you can show an error message
      });
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={markdown}
          onChange={handleMarkdownChange}
          placeholder="Enter Markdown"
          rows="10"
          cols="50"
        />
        <br />
        <button type="submit">Save</button>
      </form>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default BlogForm;
