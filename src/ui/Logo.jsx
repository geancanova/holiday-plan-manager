import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
const sizes = {
  small: css`
    max-height: 3.5rem;
  `,
  medium: css`
    max-height: 5rem;
  `,
};

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  display: block;
  width: auto;
  margin: auto;
  ${(props) => sizes[props.$size]}
`;

function Logo({ size }) {
  return (
    <StyledLogo>
      <Link to="/">
        <Img
          $size={size}
          src="/logo-holiday-plan-manager.png"
          alt="Holiday Plan Manager"
        />
      </Link>
    </StyledLogo>
  );
}

Logo.defaultProps = {
  $size: "medium",
};

export default Logo;
