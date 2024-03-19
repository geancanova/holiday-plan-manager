import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getEmployees(teamId, page) {
  let query = supabase.from("employees").select("*", { count: "exact" }).eq("teamId", teamId).order("fullName", { ascending: true });

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Employees could not be loaded");
  }

  return { data, count };
}