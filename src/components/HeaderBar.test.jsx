import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import HeaderBar from "./HeaderBar";

// Mock fetch for API integration
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, city: "Paris", country: "France" },
        { id: 2, city: "London", country: "UK" },
        { id: 3, city: "New York", country: "USA" },
      ]),
  })
);

describe("HeaderBar Search", () => {
  it("renders the search input with placeholder", () => {
    render(<HeaderBar />);
    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
  });

  it("aligns the search bar to the right of the navbar", () => {
    render(<HeaderBar />);
    const searchForm = screen.getByRole("search");
    // Check for a class that aligns right (Bootstrap: ms-auto or justify-content-end)
    expect(searchForm.className).toMatch(/ms-auto|justify-content-end/);
  });

  it("shows dropdown with all destinations on empty search", async () => {
    render(<HeaderBar />);
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(screen.getByText("Paris, France")).toBeInTheDocument();
      expect(screen.getByText("London, UK")).toBeInTheDocument();
      expect(screen.getByText("New York, USA")).toBeInTheDocument();
    });
  });

  it("filters destinations by partial, case-insensitive match", async () => {
    render(<HeaderBar />);
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "par" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(screen.getByText("Paris, France")).toBeInTheDocument();
      expect(screen.queryByText("London, UK")).not.toBeInTheDocument();
    });
  });

  it("filters destinations by country", async () => {
    render(<HeaderBar />);
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "uk" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(screen.getByText("London, UK")).toBeInTheDocument();
      expect(screen.queryByText("Paris, France")).not.toBeInTheDocument();
    });
  });

  it("triggers search on button click", async () => {
    render(<HeaderBar />);
    const input = screen.getByPlaceholderText("Search...");
    const button = screen.getByRole("button", { name: /search/i });
    fireEvent.change(input, { target: { value: "new" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("New York, USA")).toBeInTheDocument();
    });
  });

  it("dropdown floats over content and is visible after search", async () => {
    render(<HeaderBar />);
    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "par" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      const dropdown = screen.getByTestId("search-dropdown");
      expect(dropdown).toBeVisible();
      // Check for Bootstrap dropdown or absolute positioning
      expect(dropdown.className).toMatch(/dropdown-menu|position-absolute/);
    });
  });
});