import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import * as authHooks from "react-firebase-hooks/auth";
import Header from ".";

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

afterEach(() => {
  jest.clearAllMocks();
});

describe("Header component", () => {
  it("should render header without auth", async () => {
    useAuthStateMock.mockReturnValue([undefined, true, undefined]);
    render(<Header />);
    expect(screen.getByText("Funny Movies")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Funny Movies"));
    expect(screen.getByText("Login/Register")).toBeInTheDocument();
  });

  it("should render header with auth", async () => {
    useAuthStateMock.mockReturnValue([
      { email: "test@gmail.com" } as any,
      false,
      undefined,
    ]);
    render(<Header />);
    expect(screen.getByText("Funny Movies")).toBeInTheDocument();
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("test@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Share a movie")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
});
