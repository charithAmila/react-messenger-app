import { ConversationInterface } from "../interfaces";

interface ConversationListInterface {
  conversationList: ConversationInterface[];
  onClickListItem: (id: string) => void;
}

const ConversationList = ({
  conversationList,
  onClickListItem,
}: ConversationListInterface) => {
  return (
    <ul>
      {conversationList.map(({ name, id }) => (
        <li role="button" key={id} onClick={() => onClickListItem(id)}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default ConversationList;
