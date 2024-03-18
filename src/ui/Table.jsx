import { createContext, useContext } from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  border: 1px solid var(--color-grey-200);
  width: 100%;
  border-radius: 7px;
  overflow: auto;
`;

const StyledTable = styled.table`
  min-width: 100%;
  font-size: 1.4rem;
  border-collapse: collapse;
  background-color: var(--color-grey-0);
`;

const CommonRow = styled.tr`
  transition: none;

  > * {
    vertical-align: middle;
    padding: 1.2rem 2.4rem;
  }
`;

const StyledHeader = styled.thead`
  background-color: var(--color-grey-50);
  letter-spacing: 0.4px;
  color: var(--color-grey-600);
  font-weight: 600;
  text-transform: uppercase;

  tr > * {
    border-bottom: 1px solid var(--color-grey-100);
    text-align: left;
  }

  &.actions {
    tr > *:last-child {
      width: 40px;
    }
  }
`;

const StyledRow = styled(CommonRow)`
  &:not(:last-child) {
    > * {
      border-bottom: 1px solid var(--color-grey-100);
    }
  }
`;

const Empty = styled.td`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  padding: 2.4rem;
`;

const TableContext = createContext();

function Table({ children, actions = true }) {
  const TableProvider = TableContext.Provider;

  return (
    <TableContainer>
      <TableProvider value={{ actions }}>
        <StyledTable role="table">{children}</StyledTable>
      </TableProvider>
    </TableContainer>
  );
}

function Header({ children }) {
  const { actions } = useContext(TableContext);

  return (
    <StyledHeader className={actions ? "actions" : ""}>
      <StyledRow>{children}</StyledRow>
    </StyledHeader>
  );
}

function Row({ children }) {
  return <StyledRow>{children}</StyledRow>;
}

function Body({ data, render }) {
  return (
    <tbody>
      {!data?.length ? (
        <StyledRow>
          <Empty colSpan={100}>No data to show at the moment</Empty>
        </StyledRow>
      ) : (
        data?.map(render)
      )}
    </tbody>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Empty = Empty;

export default Table;
