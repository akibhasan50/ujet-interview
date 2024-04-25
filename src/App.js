import React, { useState } from 'react';
import './App.css';



// 1. input handling :Create a state variable to store the input string provided by the user. Set up an input field that allows users to enter the link in the format [Link Name](URL).

// 2.button handling :Create a button that triggers the conversion process when clicked. The button should be disabled if the input field is empty.
// 3.Regular Expression Validation : check input link in  the format [Link Name](URL).

// 4.conversion : Once the input is validated and parsed successfully, construct the HTML code for the hyperlink using the extracted link name and URL.

// 5.Display: Display the converted hyperlink on the page. You can use dangerouslySetInnerHTML to render the HTML code as React components directly interpret 

function App() {
  const [link, setLink] = useState('');
  const [convertedLink, setConvertedLink] = useState('');
  const [linkName, setLinkName] = useState('');

  const isValidLinkFormat = (input) => {
    // Regular expression to validate the link format
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/;
    return linkPattern.test(input);
  };

  const handleConvert = () => {
    if (isValidLinkFormat(link)) {
      const match = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
      const name = match[1];
      const url = match[2];
      setLinkName(name);
      setConvertedLink(`<a href="${url}" target="_blank">${name}</a>`);
    }
  };
  return (
    <div className="App">
      <h1>Link Converter</h1>
      <input
        className='input-link'
        type="text"
        placeholder="Enter link..."
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button className='convert-btn' disabled={!link} onClick={handleConvert}>Convert</button>
      {convertedLink && (
        <div className='link-display'>
          <div dangerouslySetInnerHTML={{ __html: convertedLink }} />
        </div>
      )}
    </div>
  );
}

export default App;