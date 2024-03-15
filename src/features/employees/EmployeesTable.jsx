import { useEmployees } from "./useEmployees";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import EmployeeRow from "./EmployeeRow";

function EmployeesTable({ teamId }) {
  const { isLoading, employees } = useEmployees(teamId);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Table columns="1fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Name</div>
          <div>Role</div>
          <div>Department</div>
          <div>Location</div>
        </Table.Header>

        <Table.Body
          data={employees}
          render={(employee) => (
            <EmployeeRow key={employee.id} employee={employee} />
          )}
        />
      </Table>
    </>
  );
}

export default EmployeesTable;
