import styled from "styled-components";

const StyledBreadcrumbs = styled.nav`
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 0.5rem 1.2rem;
`;

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledBreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  gap: 0.8rem;

  a {
    color: var(--color-brand-600);

    &:hover {
      color: var(--color-brand-700);
    }
  }

  &:not(:last-child)::after {
    content: ">";
    @media (max-width: 767px) {
      transform: rotate(90deg);
    }
  }
`;

function Breadcrumbs({ children }) {
  return (
    <StyledBreadcrumbs>
      <StyledNavList>{children}</StyledNavList>
    </StyledBreadcrumbs>
  );
}

function BreadcrumbItem({ children }) {
  return <StyledBreadcrumbItem>{children}</StyledBreadcrumbItem>;
}

Breadcrumbs.BreadcrumbItem = BreadcrumbItem;

export default Breadcrumbs;
