import { useState, FormEvent, KeyboardEvent } from "react";
import { MessageInterface } from "../interfaces";
import { AUTH_USER_ID } from "../utils/constants";

interface ComposeInterface {
  onSubmitMessage: (message: MessageInterface) => void;
}

const Compose = ({ onSubmitMessage }: ComposeInterface) => {
  const [text, setText] = useState<string>("");

  const submit = (
    e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    if (text) {
      onSubmitMessage({
        userId: AUTH_USER_ID,
        text,
      });
      setText("");
    }
  };

  return (
    <form onSubmit={submit} name="composeForm">
      <input
        type="text"
        name="text"
        onChange={(e) => setText(e.target.value)}
        className="compose-text-aria"
        value={text}
      />
      <button type="submit">Send</button>
    </form>
  );
};
export default Compose;
