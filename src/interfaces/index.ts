export interface MessageInterface {
  text: string;
  userId: string;
}

export interface ConversationInterface {
  id: string;
  name: string;
  messages: MessageInterface[];
}
