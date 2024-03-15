import styled, { css } from "styled-components";
const sizes = {
  small: css`
    height: 3.5rem;
  `,
  medium: css`
    height: 5rem;
  `,
};

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  display: block;
  height: 5rem;
  width: auto;
  margin: auto;
  ${(props) => sizes[props.$size]}
`;

function Logo({ size }) {
  return (
    <StyledLogo>
      <Img
        $size={size}
        src="./logo-holiday-plan-manager.png"
        alt="Holiday Plan Manager"
      />
    </StyledLogo>
  );
}

Logo.defaultProps = {
  $size: "medium",
};

export default Logo;
