import Button from "../../ui/Button";
import CreateHolidayForm from "./CreateHolidayForm";
import Modal from "../../ui/Modal";

function AddHoliday() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="holiday-form">
          <Button>Add new Holiday</Button>
        </Modal.Open>
        <Modal.Window name="holiday-form">
          <CreateHolidayForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddHoliday;
