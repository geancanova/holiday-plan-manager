import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledTabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-grey-100);
  gap: 1.2rem;
`;

const StyledTab = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border-bottom: 3px solid currentColor;
  color: var(--color-grey-300);
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-grey-50);
    color: var(--color-grey-400);
  }

  &:active,
  &.active {
    border-bottom-color: var(--color-brand-600);
    color: var(--color-grey-900);
    outline: none;
  }
`;

const StyledTabActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
  padding-bottom: 3rem;
`;

const TabsContext = createContext();

function Tabs({ children, defaultTab }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const [openName, setOpenName] = useState(tab || defaultTab);
  const open = setOpenName;

  return (
    <TabsContext.Provider value={{ openName, open, setSearchParams }}>
      {children}
    </TabsContext.Provider>
  );
}

function Tab({ children, opens: opensTabContentName }) {
  const { open, openName, setSearchParams } = useContext(TabsContext);

  return (
    <StyledTab
      className={openName === opensTabContentName ? "active" : ""}
      onClick={() => {
        setSearchParams({ tab: opensTabContentName });
        open(opensTabContentName);
      }}
    >
      {children}
    </StyledTab>
  );
}

function TabsContainer({ children }) {
  return <StyledTabsContainer>{children}</StyledTabsContainer>;
}

function TabContent({ children, name }) {
  const { openName } = useContext(TabsContext);

  if (name !== openName) return null;

  return <div>{children}</div>;
}

function TabActions({ children }) {
  return <StyledTabActions>{children}</StyledTabActions>;
}

Tabs.TabsContainer = TabsContainer;
Tabs.Tab = Tab;
Tabs.TabContent = TabContent;
Tabs.TabActions = TabActions;

export default Tabs;
