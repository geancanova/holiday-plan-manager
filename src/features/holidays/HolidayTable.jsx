import { useHolidays } from "./useHolidays";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import HolidayRow from "./HolidayRow";
import Pagination from "../../ui/Pagination";

function HolidayTable({ planId }) {
  const { isLoading: isLoadingHolidays, holidays, count } = useHolidays(planId);

  if (isLoadingHolidays) return <Spinner />;

  return (
    <>
      <Table>
        <Table.Header>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th></th>
        </Table.Header>

        <Table.Body
          data={holidays}
          render={(holiday) => (
            <HolidayRow key={holiday.id} holiday={holiday} />
          )}
        />
      </Table>
      <Pagination count={count} />
    </>
  );
}

export default HolidayTable;
