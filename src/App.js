// External imports
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import marked from "marked";

import "./styles.css";

export default function App() {
  const defaultInput = `# Welcome to my markdown previewer!

This previewer renders GitHub-flavored markdown based on your input!
## Here's a subheading
Here's a [link](http://en.wikipedia.org/wiki/link), some \`<code></code>\`, and a code block:

\`\`\`
#include stdio.h

int main(void) {
  printf("Hello, world!");
  return 0;
}
\`\`\`

Text can also be **bold** or _italic_, or even a 
> blockquote

Here's a list:
- Item 1
  - Sub-item 1
    - Sub-sub item 1

There are also numbered lists:
1. Item 1
1. Item 2
1. Item 3

Finally, you can include images, like:
![Image of orchid](https://images.unsplash.com/photo-1586799958784-8687bc5d659f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)
  
  `;

  const [input, setInput] = useState(defaultInput);
  const [darkMode, setDarkMode] = useState(false);

  const handleTextareaChange = (e) => {
    setInput(e.target.value);
  };

  const handleThemeChange = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <section id="App" className={darkMode ? "App darkMode" : "App"}>
      <div className="App_header">
        <h1 className="App_title">Markdown Previewer</h1>
      </div>
      <div className="App_container">
        <div className="App_component">
          <h2 className="App_component_header">Editor</h2>
          <textarea
            id="editor"
            className="Editor"
            onChange={handleTextareaChange}
            value={input}
          ></textarea>
        </div>
        <div className="App_component">
          <h2 className="App_component_header">Previewer</h2>
          <div id="previewer" className="Previewer">
            {ReactHtmlParser(marked.parse(input))}
          </div>
        </div>
      </div>
      <div className="App_bottomBar">
        <div className="App_themeWrapper">
          <p
            id="App_themeLabel--light"
            name="App_themeLabel--light"
            className="App_themeLabel"
          >
            Light Mode
          </p>
          <p
            id="App_themeLabel--light"
            name="App_themeLabel--light"
            className="App_themeLabel--small"
          >
            Light
          </p>
          {/* Based on guide at https://www.w3schools.com/howto/howto_css_switch.asp */}
          <label className="switch">
            <input
              type="checkbox"
              aria-labelledby="App_themeLabel--dark"
              onChange={handleThemeChange}
            />
            <span className="slider"></span>
          </label>
          <p
            id="App_themeLabel--dark"
            name="App_themeLabel--dark"
            className="App_themeLabel"
          >
            Dark Mode
          </p>
          <p
            id="App_themeLabel--dark"
            name="App_themeLabel--dark"
            className="App_themeLabel--small"
          >
            Dark
          </p>
        </div>
        <div className="App_attribution">
          <p className="App_attribution_text">
            Created by <a href="https://github.com/anth-volk">Anthony Volk</a>
          </p>
        </div>
      </div>
    </section>
  );
}
