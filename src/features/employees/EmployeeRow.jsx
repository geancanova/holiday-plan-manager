import Table from "../../ui/Table";

function EmployeeRow({ employee }) {
  const { fullName: name, role, department, location } = employee;

  return (
    <Table.Row>
      <span>{name}</span>

      <span>{role}</span>

      <span>{department}</span>

      <span>{location}</span>
    </Table.Row>
  );
}

export default EmployeeRow;
