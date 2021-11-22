import { useState } from "react";
import Compose from "../components/Compose";
import ConversationList from "../components/ConversationList";
import MessageList from "../components/MessageList";
import { ConversationInterface, MessageInterface } from "../interfaces";
import { initialList } from "../utils/constants";

const Messenger = () => {
  const [conversationList, setConversationList] =
    useState<ConversationInterface[]>(initialList);
  const [selectedConversationId, setSelectedConversationId] = useState<string>(
    initialList[0].id
  );

  const onSubmitMessage = (message: MessageInterface) => {
    const conversation = getConversation();
    if (conversation) {
      conversation.messages = [...conversation.messages, message];
      setConversationList([...conversationList]);
    }
  };

  const getConversation = () => {
    return (
      conversationList.find(({ id }) => id === selectedConversationId) || null
    );
  };

  return (
    <div className="messenger">
      <div className="conversation-list">
        <ConversationList
          conversationList={conversationList}
          onClickListItem={(id) => setSelectedConversationId(id)}
        />
      </div>
      <div className="message-wrapper">
        <div className="message-list-wrapper">
          <MessageList conversation={getConversation()} />
        </div>
        <div className="compose-wrapper">
          <Compose onSubmitMessage={onSubmitMessage} />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
