import Table from "../../ui/Table";

function EmployeeRow({ employee }) {
  const { fullName: name, role, department, location } = employee;

  return (
    <Table.Row>
      <td>{name}</td>

      <td>{role}</td>

      <td>{department}</td>

      <td>{location}</td>
    </Table.Row>
  );
}

export default EmployeeRow;
