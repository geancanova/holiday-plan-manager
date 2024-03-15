import PlanTable from "../features/plans/PlanTable";
import Spinner from "../ui/Spinner";
import PageHeader from "../ui/PageHeader";
import Empty from "../ui/Empty";
import AddPlan from "../features/plans/AddPlan";
import { usePlans } from "../features/plans/usePlans";

function Plans() {
  const { plans, isLoading, count } = usePlans();

  if (isLoading) return <Spinner />;

  return (
    <>
      <PageHeader title="All Holiday Plans">
        <AddPlan />
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
