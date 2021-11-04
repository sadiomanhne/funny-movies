import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import Home from ".";
import MovieService from "../../services/movie";

const getAllMock = jest.spyOn(MovieService, "getAll");
const movieListMock: IMovie[] = [
  { id: "1", title: "title", embedId: "embedId", shareBy: "test@test.com" },
  { id: "2", title: "title", embedId: "embedId", shareBy: "test@test.com" },
];

afterEach(() => {
  jest.clearAllMocks();
});

describe("Home page", () => {
  it("should render movie list with 2 movies", async () => {
    getAllMock.mockResolvedValue([]);
    await act(async () => {
      render(<Home />);
    });
    expect(getAllMock).toBeCalled();
    expect(screen.getByText("No movies found.")).toBeInTheDocument();
  });

  it("should render movie list with 2 movies", async () => {
    getAllMock.mockResolvedValue(movieListMock);
    await act(async () => {
      render(<Home />);
    });
    expect(getAllMock).toBeCalled();
    expect(screen.getAllByText("title")).toHaveLength(2);
  });
});
