import PlanRow from "./PlanRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

function PlanTable({ plans }) {
  return (
    <Menus>
      <Table>
        <Table.Header>
          <th>Title</th>
          <th>Description</th>
          <th>Participants</th>
          <th></th>
        </Table.Header>

        <Table.Body
          data={plans}
          render={(plan) => <PlanRow key={plan.id} plan={plan} />}
        />
      </Table>
    </Menus>
  );
}

export default PlanTable;
