import styled from "styled-components";
import Heading from "../ui/Heading";
import PlanTable from "../features/plans/PlanTable";
import Spinner from "../ui/Spinner";
import Empty from "../ui/Empty";
import AddPlan from "../features/plans/AddPlan";
import { usePlans } from "../features/plans/usePlans";

const PageHeader = styled.div`
  padding: 1.2rem 0 3rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;
`;

const PageHeaderHeading = styled.div`
  max-width: 64rem;
  p {
    margin-top: 2rem;
  }
`;

const PageHeaderActions = styled.div`
  flex-shrink: 0;
`;

function Plans() {
  const { plans, isLoading, count } = usePlans();

  if (isLoading) return <Spinner />;

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>
          <Heading as="h1">All Holiday Plans</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            possimus porro culpa maxime, rerum, atque odio quaerat nihil saepe
            laboriosam repellat incidunt quia soluta officia hic cumque nesciunt
            totam? Fugiat!
          </p>
        </PageHeaderHeading>

        <PageHeaderActions>
          <AddPlan />
        </PageHeaderActions>
      </PageHeader>

      {!plans.length ? (
        <Empty resourceName="plans" />
      ) : (
        <PlanTable plans={plans} count={count} />
      )}
    </>
  );
}

export default Plans;
