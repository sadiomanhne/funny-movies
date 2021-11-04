import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { RedirectProps } from "react-router-dom";
import ShareVideo from ".";
import MovieService from "../../services/movie";
import * as authHooks from "react-firebase-hooks/auth";

jest.mock("react-router-dom", () => {
  const actualModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...actualModule,
    useHistory: () => ({ push: jest.fn() }),
    Redirect: ({ to }: RedirectProps) => <div>{`Redirect to ${to}`}</div>,
  };
});
const useAuthStateMock = jest.spyOn(authHooks, "useAuthState");
const addMovieMock = jest.spyOn(MovieService, "add");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Share Video Page", () => {
  it("should redirect to home page if no user signed in", async () => {
    useAuthStateMock.mockReturnValue([undefined, true, undefined]);
    await act(async () => {
      render(<ShareVideo />);
    });
    expect(screen.getByText("Redirect to /")).toBeInTheDocument();
  });

  it("should render page with user signed in and share a Youtube videos", async () => {
    useAuthStateMock.mockReturnValue([
      { email: "test@gmail.com" } as any,
      false,
      undefined,
    ]);
    const wrapper = render(<ShareVideo />);
    expect(screen.getByText("Share a Youtube movie")).toBeInTheDocument();
    expect(screen.getByText("Youtube URL")).toBeInTheDocument();
    expect(screen.getByText("Share")).toBeInTheDocument();

    // input a youtube url
    const urlInput = wrapper.baseElement.querySelector("input");
    fireEvent.change(urlInput!, {
      target: { value: "https://www.youtube.com/watch?v=LvHg6YS_Hv0" },
    });

    // click share
    fireEvent.click(screen.getByText("Share"));
    expect(addMovieMock).toBeCalled();
  });

  it("should render page with user signed in and share a Youtube link not video (homepage, channel...)", async () => {
    useAuthStateMock.mockReturnValue([
      { email: "test@gmail.com" } as any,
      false,
      undefined,
    ]);
    const wrapper = render(<ShareVideo />);
    expect(screen.getByText("Share a Youtube movie")).toBeInTheDocument();
    expect(screen.getByText("Youtube URL")).toBeInTheDocument();
    expect(screen.getByText("Share")).toBeInTheDocument();

    // input a youtube channel url
    const urlInput = wrapper.baseElement.querySelector("input");
    fireEvent.change(urlInput!, {
      target: {
        value: "https://www.youtube.com/channel/UCIvDiwBwDbuGX5mi31IAuaA",
      },
    });

    // click share
    fireEvent.click(screen.getByText("Share"));
    expect(addMovieMock).not.toBeCalled();
    expect(screen.getByText("The URL is not a video!")).toBeInTheDocument();
  });

  it("should render page with user signed in and share a other site link", async () => {
    useAuthStateMock.mockReturnValue([
      { email: "test@gmail.com" } as any,
      false,
      undefined,
    ]);
    const wrapper = render(<ShareVideo />);
    expect(screen.getByText("Share a Youtube movie")).toBeInTheDocument();
    expect(screen.getByText("Youtube URL")).toBeInTheDocument();
    expect(screen.getByText("Share")).toBeInTheDocument();

    // input a other site url
    const urlInput = wrapper.baseElement.querySelector("input");
    fireEvent.change(urlInput!, {
      target: {
        value: "https://google.com",
      },
    });

    // click share
    fireEvent.click(screen.getByText("Share"));
    expect(addMovieMock).not.toBeCalled();
    expect(
      screen.getByText("The URL is not from Youtube!")
    ).toBeInTheDocument();
  });
});
