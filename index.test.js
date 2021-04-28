import React from 'react'
import { render, waitFor } from "@testing-library/react";
import mock from "xhr-mock";
import Container from ".";

describe("<Container />", () => {
  beforeEach(() => mock.setup());
  afterEach(() => mock.teardown());

  it("sends a request", async () => {
    const mockFoo = jest.fn(() => expect("yes").toBe("no"));
    mock.get("https://fullstory.com/foo", mockFoo);

    render(<Container />);

    await waitFor(() => expect(mockFoo).toHaveBeenCalledTimes(1));
  });
});
