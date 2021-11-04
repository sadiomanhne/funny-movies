import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import * as firebase from "../../../firebase";
import HeaderGuest from ".";

const signInWithEmailAndPasswordMock = jest.spyOn(
  firebase,
  "signInWithEmailAndPassword"
);

afterEach(() => {
  jest.clearAllMocks();
});

describe("Header Guest component", () => {
  it("should NOT call firebase when input valid email and password", async () => {
    render(<HeaderGuest />);
    expect(screen.getByText("Login/Register")).toBeInTheDocument();

    // signin/register
    fireEvent.click(screen.getByText("Login/Register"));
    expect(signInWithEmailAndPasswordMock).not.toBeCalled();
  });

  it("should call firebase when input valid email and password", async () => {
    render(<HeaderGuest />);
    expect(screen.getByText("Login/Register")).toBeInTheDocument();

    // enter email and password
    const emailInput = screen.getByPlaceholderText("email");
    fireEvent.change(emailInput, { target: { value: "mane@sadio.com" } });
    const passwordInput = screen.getByPlaceholderText("password");
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    // signin/register
    fireEvent.click(screen.getByText("Login/Register"));
    expect(signInWithEmailAndPasswordMock).toBeCalledWith(
      "mane@sadio.com",
      "123456"
    );
  });
});
