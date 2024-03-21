import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs Component", () => {
  it("renders without crashing", () => {
    render(<Breadcrumbs />);
  });

  it("renders children correctly", () => {
    const { getByText } = render(
      <Breadcrumbs>
        <Breadcrumbs.BreadcrumbItem>Home</Breadcrumbs.BreadcrumbItem>
        <Breadcrumbs.BreadcrumbItem>Products</Breadcrumbs.BreadcrumbItem>
        <Breadcrumbs.BreadcrumbItem>Category</Breadcrumbs.BreadcrumbItem>
        <Breadcrumbs.BreadcrumbItem>Subcategory</Breadcrumbs.BreadcrumbItem>
      </Breadcrumbs>
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Products")).toBeInTheDocument();
    expect(getByText("Category")).toBeInTheDocument();
    expect(getByText("Subcategory")).toBeInTheDocument();
  });

  it("applies correct styles", () => {
    const { container } = render(<Breadcrumbs />);
    const breadcrumbs = container.firstChild;

    expect(breadcrumbs).toHaveStyle(`
      background-color: var(--color-grey-100);
      border-radius: var(--border-radius-md);
      padding: 0.5rem 1.2rem;
    `);
  });
});
