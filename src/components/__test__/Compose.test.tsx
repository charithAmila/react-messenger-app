import { render, screen, fireEvent } from "@testing-library/react";
import Compose from "../Compose";
import { AUTH_USER_ID } from "../../utils/constants";

const submitFunction = jest.fn();

describe("Compose component", () => {
  test("Send message", () => {
    const text = "Hello Sir";
    render(<Compose onSubmitMessage={submitFunction} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: text },
    });
    fireEvent.submit(screen.getByRole("form"));
    expect(submitFunction).toBeCalledWith({ text, userId: AUTH_USER_ID });
  });

  test("Don't send empty messages", () => {
    render(<Compose onSubmitMessage={submitFunction} />);
    fireEvent.submit(screen.getByRole("form"));
    expect(submitFunction).toHaveBeenCalledTimes(0);
  });
});
