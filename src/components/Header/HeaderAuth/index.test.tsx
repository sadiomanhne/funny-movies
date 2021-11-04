import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import * as firebase from "../../../firebase";
import * as authHooks from "react-firebase-hooks/auth";
import HeaderAuth from ".";

jest.mock("react-router-dom", () => {
  const actualModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...actualModule,
    useHistory: () => ({ push: jest.fn() }),
    Link: ({ children }: any) => <div>{children}</div>,
  };
});
const useAuthStateMock = jest.spyOn(authHooks, "useAuthState");
const logoutMock = jest.spyOn(firebase, "logout");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Header Auth component", () => {
  it("should render component and call logout", async () => {
    useAuthStateMock.mockReturnValue([
      { email: "test@gmail.com" } as any,
      false,
      undefined,
    ]);
    render(<HeaderAuth />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("test@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Share a movie")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Logout"));
    expect(logoutMock).toBeCalled();
  });
});
