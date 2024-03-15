import styled from "styled-components";
import Heading from "./Heading";

const StyledPageHeader = styled.div`
  padding: 1.2rem 0 3rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyledPageHeaderHeading = styled.div`
  max-width: 64rem;
  p {
    margin-top: 2rem;
  }
`;

const StyledPageHeaderActions = styled.div`
  flex-shrink: 0;
`;

function PageHeader({ children, title, description }) {
  return (
    <StyledPageHeader>
      <StyledPageHeaderHeading>
        <Heading as="h1">{title}</Heading>
        {description && <p>{description}</p>}
      </StyledPageHeaderHeading>
      {children && (
        <StyledPageHeaderActions>{children}</StyledPageHeaderActions>
      )}
    </StyledPageHeader>
  );
}

export default PageHeader;
