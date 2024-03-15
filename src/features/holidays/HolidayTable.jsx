import { useHolidays } from "./useHolidays";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import HolidayRow from "./HolidayRow";

function HolidayTable({ planId }) {
  const { isLoading: isLoadingHolidays, holidays } = useHolidays(planId);

  if (isLoadingHolidays) return <Spinner />;

  return (
    <>
      <Table columns="1fr 1fr 1fr 3.2rem">
        <Table.Header>
          <div>Title</div>
          <div>Description</div>
          <div>Date</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={holidays}
          render={(holiday) => (
            <HolidayRow key={holiday.id} holiday={holiday} />
          )}
        />
      </Table>
    </>
  );
}

export default HolidayTable;
