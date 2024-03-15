import { Link } from "react-router-dom";
import { usePlan } from "../features/plans/usePlan";
import PageHeader from "../ui/PageHeader";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import Tabs from "../ui/Tabs";
import HolidayTable from "../features/holidays/HolidayTable";
import AddHoliday from "../features/holidays/AddHoliday";
import EmployeesTable from "../features/employees/EmployeesTable";
import Breadcrumbs from "../ui/Breadcrumbs";

function Plan() {
  const { isLoading: isLoadingPlans, plan } = usePlan();

  if (isLoadingPlans) return <Spinner />;

  const { id: planId, title, description, teamId } = plan;

  return (
    <>
      <Breadcrumbs>
        <Breadcrumbs.BreadcrumbItem>
          <Link to="/plans">Plans</Link>
        </Breadcrumbs.BreadcrumbItem>
        <Breadcrumbs.BreadcrumbItem>
          {`Plan: ${title}`}
        </Breadcrumbs.BreadcrumbItem>
      </Breadcrumbs>

      <PageHeader title={title} description={description}>
        <Button type="primary">Generate PDF</Button>
      </PageHeader>

      <Tabs defaultTab="holidays">
        <Tabs.TabsContainer>
          <Tabs.Tab opens="holidays">Holidays</Tabs.Tab>
          <Tabs.Tab opens="participants">Participants</Tabs.Tab>
        </Tabs.TabsContainer>

        <Tabs.TabContent name="holidays">
          <Tabs.TabActions>
            <AddHoliday />
          </Tabs.TabActions>
          <HolidayTable planId={planId} />
        </Tabs.TabContent>

        <Tabs.TabContent name="participants">
          <EmployeesTable teamId={teamId} />
        </Tabs.TabContent>
      </Tabs>
    </>
  );
}

export default Plan;
