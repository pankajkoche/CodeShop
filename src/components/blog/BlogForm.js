import React, { useState } from 'react';

function BlogForm() {
  const [title, setTitle] = useState('');
  const [paragraphs, setParagraphs] = useState(['']);
  const [code, setCode] = useState('');
  const [images, setImages] = useState([]);

  const handleAddParagraph = () => {
    setParagraphs([...paragraphs, '']);
  };

  const handleParagraphChange = (index, value) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index] = value;
    setParagraphs(newParagraphs);
  };

  const handleImageChange = event => {
    const files = Array.from(event.target.files);
    const images = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages([...images, ...images]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Send the form data to your server using an HTTP POST request
    // Include the form data as the request body in JSON format
    const formData = { title, paragraphs, code, images };
    fetch('/api/blog-posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          console.log('Blog post saved successfully');
        } else {
          console.error('Failed to save blog post');
        }
      })
      .catch(error => {
        console.error('Error saving blog post:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
      </label>
      {paragraphs.map((paragraph, index) => (
        <div key={index}>
          <label>
            Paragraph {index + 1}:
            <textarea value={paragraph} onChange={event => handleParagraphChange(index, event.target.value)} />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddParagraph}>
        Add paragraph
      </button>
      <label>
        Code:
        <textarea value={code} onChange={event => setCode(event.target.value)} />
      </label>
      <label>
        Images:
        <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      </label>
      <button type="submit">Save blog post</button>
    </form>
  );
}

export default BlogForm;