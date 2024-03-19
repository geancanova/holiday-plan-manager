import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getHolidays(planId, page) {
  let query = supabase.from("holidays").select("*", { count: "exact" }).eq("planId", planId).order("date", { ascending: true });

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Holidays could not be loaded");
  }

  return { data, count };
}

export async function createEditHoliday(newHoliday, id) {

  // 1. Create plan
  let query = supabase.from("holidays");

  // A) CREATE
  if (!id) query = query.insert([{ ...newHoliday }]);

  // B) EDIT
  if (id) query = query.update({ ...newHoliday }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Holiday could not be created.");
  }

  return data;
}

export async function deleteHoliday(id) {
  const { data, error } = await supabase.from("holidays").delete().eq("id", id);

  if (error) {
    console.error(error);

    throw new Error("Holiday could not be deleted.");
  }

  return data;
}