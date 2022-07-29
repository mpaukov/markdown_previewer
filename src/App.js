import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import Editor from "./components/Editor/Editor";
import Previewer from "./components/Previewer/Previewer";
import { readFile } from "./utils/readFile";

function App() {
  const [input, setInput] = useState("");
  const [sizeEditor, setSizeEditor] = useState(false);
  const [sizePreviewer, setSizePreviewer] = useState(false);

  useEffect(() => {
    readFile().then((r) => setInput(r));
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const toggleSizeEditor = () => {
    setSizeEditor((state) => !state);
  };

  const toggleSizePreviewer = () => {
    setSizePreviewer((state) => !state);
  };

  return (
    <Container>
      {!sizePreviewer && (
        <Editor
          input={input}
          onChange={handleChange}
          size={sizeEditor}
          onSize={toggleSizeEditor}
        />
      )}
      {!sizeEditor && (
        <Previewer
          input={input}
          size={sizePreviewer}
          onSize={toggleSizePreviewer}
        />
      )}
    </Container>
  );
}

export default App;
