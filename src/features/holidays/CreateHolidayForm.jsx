import { useForm } from "react-hook-form";
import { useCreateHoliday } from "./useCreateHoliday";
import { useEditHoliday } from "./useEditHoliday";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Textarea from "../../ui/Textarea";
import { useParams } from "react-router";

function CreateHolidayForm({ holidayToEdit = {}, onCloseModal }) {
  const { isCreating, createHoliday } = useCreateHoliday();
  const { isEditing, editHoliday } = useEditHoliday();
  const isWorking = isCreating || isEditing;
  const planId = useParams().planId;

  const { id: editId, ...editValues } = holidayToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession
      ? {
          ...editValues,
          date: new Date(editValues.date).toISOString().split("T")[0],
        }
      : {
          planId: Number(planId),
        },
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession) {
      editHoliday(
        { newHolidayData: { ...data }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createHoliday(
        { ...data },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  }

  function onError(errors) {
    // Just to made know that this function exists. Can be used to send error reports to a service, e.g.
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Title" error={errors?.title?.message}>
        <Input
          type="text"
          id="title"
          disabled={isWorking}
          {...register("title", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          id="description"
          disabled={isWorking}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.date?.message}>
        <Input
          type="date"
          id="date"
          disabled={isWorking}
          {...register("date", {
            required: "This field is required",
            valueAsDate: true,
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          $variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit holiday" : "Create new holiday"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateHolidayForm;
