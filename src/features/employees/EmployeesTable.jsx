import { useEmployees } from "./useEmployees";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import EmployeeRow from "./EmployeeRow";
import Pagination from "../../ui/Pagination";

function EmployeesTable({ teamId }) {
  const { isLoading, employees, count } = useEmployees(teamId);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Table actions={false}>
        <Table.Header>
          <th>Name</th>
          <th>Role</th>
          <th>Department</th>
          <th>Location</th>
        </Table.Header>

        <Table.Body
          data={employees}
          render={(employee) => (
            <EmployeeRow key={employee.id} employee={employee} />
          )}
        />
      </Table>
      <Pagination count={count} />
    </>
  );
}

export default EmployeesTable;
