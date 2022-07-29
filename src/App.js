import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import Editor from "./components/Editor/Editor";
import Previewer from "./components/Previewer/Previewer";
import { readFile } from "./utils/readFile";

function App() {
  const [input, setInput] = useState("");
  const [sizeEditor, setSize] = useState(false);

  useEffect(() => {
    readFile().then((r) => setInput(r));
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const toggleSizeEditor = () => {
    setSize((state) => !state);
  };

  return (
    <Container>
      <Editor
        input={input}
        onChange={handleChange}
        size={sizeEditor}
        onSize={toggleSizeEditor}
      />
      {!sizeEditor && <Previewer />}
    </Container>
  );
}

export default App;
