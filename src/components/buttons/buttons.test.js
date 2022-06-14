import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Buttons from "./buttons";
describe("Button Click tests", () => {
  test("Onclick alert should be display", () => {
    window.alert = jest.fn();
    const { getByTestId } = render(<Buttons />);
    const btn1 = getByTestId("button");
    fireEvent.click(btn1);
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
});

it("checkbox label changes the text after click", () => {
  const { queryByLabelText, getByLabelText } = render(<Buttons />);
  expect(queryByLabelText(/off/i)).toBeTruthy();
  fireEvent.click(getByLabelText(/off/i));
  expect(queryByLabelText(/on/i)).toBeTruthy();
});

describe("Counter", () => {
  it("should increase count ", () => {
    const { getByTestId } = render(<Buttons />);
    const button = getByTestId("counter-btn");
    fireEvent.click(button);
    expect(button).toHaveTextContent("1");
  });
});
