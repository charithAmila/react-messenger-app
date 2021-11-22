import { ConversationInterface } from "../interfaces";
import { AUTH_USER_ID } from "../utils/constants";

interface MessageListInterface {
  conversation: ConversationInterface | null;
}

const MessageList = ({ conversation }: MessageListInterface) => (
  <>
    {conversation?.messages.map(({ text, userId }, index) => {
      return (
        <div
          role="grid"
          className={`${userId === AUTH_USER_ID ? "bubble me" : "bubble"}`}
          key={index}
        >
          <div>
            <p role="row">{text}</p>
          </div>
        </div>
      );
    })}
  </>
);

export default MessageList;
