import { render, screen } from "@testing-library/react";
import MessageList from "../MessageList";
import { AUTH_USER_ID, initialList } from "../../utils/constants";

describe("MessageList component", () => {
  test("Display messages", async () => {
    const data = initialList[0];
    const text = "Hello, How are you today";
    const text2 = "I am good thank you";
    data.messages = [
      {
        text,
        userId: "1",
      },
      {
        text: text2,
        userId: "2",
      },
    ];
    render(<MessageList conversation={initialList[0]} />);
    expect(await screen.findByText(text)).toBeInTheDocument();
    expect(await screen.findByText(text2)).toBeInTheDocument();
  });

  test("Last message should be placed on the bottom", async () => {
    const data = initialList[0];
    const text = "Hello, How are you today";
    data.messages.push({
      text,
      userId: "1",
    });
    render(<MessageList conversation={data} />);
    const messages = screen.queryAllByRole("row");
    expect(messages[messages.length - 1].textContent).toBe(text);
  });

  test("My messages should be placed on the right side", () => {
    const data = initialList[0];
    const text = "Hello Sir, How are you today";
    data.messages.push({
      text,
      userId: AUTH_USER_ID,
    });
    render(<MessageList conversation={data} />);
    const messages = screen.queryAllByRole("grid");
    expect(messages[messages.length - 1].className).toBe("bubble me");
  });
});
