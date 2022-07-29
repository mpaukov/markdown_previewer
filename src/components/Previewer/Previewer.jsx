import { useEffect } from "react";
import { marked } from "marked";
import {
  faWindowMaximize,
  faWindowMinimize,
} from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import {
  PreviewerWrapper,
  Header,
  Thumb,
  Icon,
  Text,
  Button,
  TextArea,
} from "./Previewer.styled";
import hljs from "highlight.js";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

const Previewer = ({ input, size, onSize }) => {
  useEffect(() => {
    document.getElementById("preview").innerHTML = marked.parse(input);
  }, [input]);

  return (
    <PreviewerWrapper>
      <Header>
        <Thumb>
          <Icon icon={faMagnifyingGlass} />
          <Text>Previewer</Text>
        </Thumb>
        <Button type="button" onClick={onSize}>
          {!size ? (
            <Icon icon={faWindowMaximize} />
          ) : (
            <Icon icon={faWindowMinimize} />
          )}
        </Button>
      </Header>

      <TextArea sz={size} id="preview"></TextArea>
    </PreviewerWrapper>
  );
};

export default Previewer;
