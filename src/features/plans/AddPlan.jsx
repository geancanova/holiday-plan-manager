import Button from "../../ui/Button";
import CreatePlanForm from "./CreatePlanForm";
import Modal from "../../ui/Modal";

function AddPlan() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="plan-form">
          <Button>Add new Plan</Button>
        </Modal.Open>
        <Modal.Window name="plan-form">
          <CreatePlanForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddPlan;
