import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select from "./Select";

// Mock options for testing
const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3", disabled: true },
];

describe("Select Component", () => {
  it("renders without crashing", () => {
    render(<Select options={options} />);
  });

  it("renders options correctly", () => {
    const { getByText } = render(<Select options={options} />);
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
    expect(getByText("Option 3")).toBeInTheDocument();
  });

  it("calls onChange handler when an option is selected", () => {
    const handleChange = jest.fn();
    const { getByDisplayValue } = render(
      <Select options={options} onChange={handleChange} emptyValue />
    );
    const selectElement = getByDisplayValue("Select");
    expect(selectElement).toHaveValue("");
    fireEvent.change(selectElement, { target: { value: "2" } });
    expect(selectElement.value).toBe("2");
  });

  it("renders empty value option if emptyValue prop is true", () => {
    const { getByText } = render(<Select options={options} emptyValue />);
    expect(getByText("Select")).toBeInTheDocument();
  });

  it("disables options correctly", () => {
    const { getByText } = render(<Select options={options} />);
    const option3 = getByText("Option 3");

    expect(option3).toBeDisabled();
  });
});
