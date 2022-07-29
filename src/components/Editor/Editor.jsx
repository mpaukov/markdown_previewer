import {
  faWindowMaximize,
  faWindowMinimize,
} from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import {
  EditorWrapper,
  Header,
  Thumb,
  Icon,
  Text,
  Button,
  TextArea,
} from "./Editor.styled";

const Editor = ({ input, onChange, size, onSize }) => {
  return (
    <EditorWrapper>
      <Header>
        <Thumb>
          <Icon icon={faPenToSquare} />
          <Text>Editor</Text>
        </Thumb>
        <Button type="button" onClick={onSize}>
          {!size ? (
            <Icon icon={faWindowMaximize} />
          ) : (
            <Icon icon={faWindowMinimize} />
          )}
        </Button>
      </Header>

      <TextArea value={input} onChange={onChange} sz={size} id="editor" />
    </EditorWrapper>
  );
};

export default Editor;
