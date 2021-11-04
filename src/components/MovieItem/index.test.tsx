import { render, screen } from "@testing-library/react";
import React from "react";
import MovieItem from ".";

describe("Movie Item component", () => {
  it("should render component", () => {
    const movie = {
      id: "id",
      title: "title",
      description: "desc",
      embedId: "embedId",
      shareBy: "mane@sadio",
    };
    render(<MovieItem {...movie} />);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("desc")).toBeInTheDocument();
    expect(screen.getByText("mane@sadio")).toBeInTheDocument();
  });
});
