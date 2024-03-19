import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getPlans(page) {
  let query = supabase
    .from("plans")
    .select("id, created_at, title, description, teams(id, title)", { count: "exact" }).order("teamId", { ascending: true });

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Plans could not be loaded");
  }

  return { data, count };
}

export async function getPlan(id) {
  const { data, error } = await supabase
    .from("plans")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Plan not found");
  }

  return data;
}

export async function createEditPlan(newPlan, id) {

  // 1. Create plan
  let query = supabase.from("plans");

  // A) CREATE
  if (!id) query = query.insert([{ ...newPlan }]);

  // B) EDIT
  if (id) query = query.update({ ...newPlan }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Plan could not be created.");
  }

  return data;
}

export async function deletePlan(id) {
  const { data, error } = await supabase.from("plans").delete().eq("id", id);

  if (error) {
    console.error(error);

    throw new Error("Plan could not be deleted.");
  }

  return data;
}