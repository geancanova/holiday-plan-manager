import { HiPencil, HiTrash } from "react-icons/hi2";
import { useDeleteHoliday } from "./useDeleteHoliday";

import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateHolidayForm from "./CreateHolidayForm";

function HolidayRow({ holiday }) {
  const { isDeleting, deleteHoliday } = useDeleteHoliday();
  const { id: holidayId, title, description, date } = holiday;
  const formatDate = new Date(date).toLocaleDateString();

  return (
    <Table.Row>
      <td>{title}</td>

      <td>{description}</td>

      <td>{formatDate}</td>

      <td>
        <Modal>
          <Menus>
            <Menus.Menu>
              <Menus.Toggle id={holidayId} />
              <Menus.List id={holidayId}>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateHolidayForm holidayToEdit={holiday} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="holiday"
                  disabled={isDeleting}
                  onConfirm={() => deleteHoliday(holidayId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Menus>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default HolidayRow;
