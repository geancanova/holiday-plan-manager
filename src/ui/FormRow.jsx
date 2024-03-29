import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 15rem 3fr 2fr;
    gap: 2.4rem;
  }
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const InputWrapper = styled.div`
  & > *:not(button) {
    width: 100%;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Tip = styled.span`
  display: block;
  font-size: 1.1rem;
  font-style: italic;
  text-align: right;
  color: var(--color-grey-500);
  padding-top: 0.2em;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, tip, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      <InputWrapper>
        {children}
        {tip && <Tip>{tip}</Tip>}
      </InputWrapper>
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
