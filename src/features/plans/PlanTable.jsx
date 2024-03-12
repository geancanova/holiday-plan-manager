import PlanRow from "./PlanRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";

function PlanTable({ plans, count }) {
  return (
    <Menus>
      <Table columns="1fr 1.5fr .8fr 3.2rem">
        <Table.Header>
          <div>Title</div>
          <div>Description</div>
          <div>Participants</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={plans}
          render={(plan) => <PlanRow key={plan.id} plan={plan} />}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default PlanTable;
