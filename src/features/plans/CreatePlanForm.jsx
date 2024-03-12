import { useForm } from "react-hook-form";
import { useCreatePlan } from "./useCreatePlan";
import { useEditPlan } from "./useEditPlan";
import { useTeams } from "./useTeams";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Select from "../../ui/Select";
import FormRow from "../../ui/FormRow";
import Textarea from "../../ui/Textarea";
import Spinner from "../../ui/Spinner";

function CreatePlanForm({ planToEdit = {}, onCloseModal }) {
  const { isCreating, createPlan } = useCreatePlan();
  const { isEditing, editPlan } = useEditPlan();
  const { isLoading, teams } = useTeams();
  const isWorking = isLoading || isCreating || isEditing;

  const { id: editId, ...editValues } = planToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const finalData = {
      ...data,
      teamId: Number(data.teamId),
    };

    if (isEditSession) {
      editPlan(
        { newPlanData: { ...finalData }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createPlan(
        { ...finalData },
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

  if (isLoading) return <Spinner />;

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

      <FormRow label="Participants" error={errors?.teamId?.message}>
        <Select
          id="participants"
          defaultValue={
            Object.keys(editValues).length !== 0 ? editValues?.teams.id : ""
          }
          disabled={isWorking}
          options={teams.map(({ id, title }) => ({
            value: id,
            label: title,
          }))}
          {...register("teamId", {
            required: "This field is required",
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
          {isEditSession ? "Edit plan" : "Create new plan"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreatePlanForm;
