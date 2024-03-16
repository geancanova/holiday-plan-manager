import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem min(4.8rem, 5%);
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo size="small" />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
