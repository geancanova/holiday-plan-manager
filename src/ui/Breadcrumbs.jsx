import styled from "styled-components";

const StyledBreadcrumbs = styled.nav`
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 0.5rem 1.2rem;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.8rem;
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

  & + & {
    &::before {
      content: ">";
    }
  }
`;

function Breadcrumbs({ children }) {
  return (
    <StyledBreadcrumbs>
      <StyledNav>{children}</StyledNav>
    </StyledBreadcrumbs>
  );
}

function BreadcrumbItem({ children }) {
  return <StyledBreadcrumbItem>{children}</StyledBreadcrumbItem>;
}

Breadcrumbs.BreadcrumbItem = BreadcrumbItem;

export default Breadcrumbs;
