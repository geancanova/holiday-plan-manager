import PlanTable from "../features/plans/PlanTable";
import Spinner from "../ui/Spinner";
import PageHeader from "../ui/PageHeader";
import Empty from "../ui/Empty";
import Pagination from "../ui/Pagination";
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

      {plans.length ? (
        <>
          <PlanTable plans={plans} />
          <Pagination count={count} />
        </>
      ) : (
        <Empty resourceName="plans" />
      )}
    </>
  );
}

export default Plans;
