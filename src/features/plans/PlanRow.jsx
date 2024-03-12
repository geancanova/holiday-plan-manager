import { HiPencil, HiTrash } from "react-icons/hi2";
import { useDeletePlan } from "./useDeletePlan";

import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreatePlanForm from "./CreatePlanForm";

function PlanRow({ plan }) {
  const { isDeleting, deletePlan } = useDeletePlan();

  const {
    id: planId,
    title,
    description,
    teams: { title: participants },
  } = plan;

  return (
    <Table.Row>
      <span>{title}</span>

      <span>{description}</span>

      <span>{participants}</span>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={planId} />
          <Menus.List id={planId}>
            <Modal.Open opens="edit">
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name="edit">
            <CreatePlanForm planToEdit={plan} />
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="plan"
              disabled={isDeleting}
              onConfirm={() => deletePlan(planId)}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default PlanRow;
