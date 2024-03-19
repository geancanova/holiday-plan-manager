import supabase from "./supabase";

export async function getEmployees(teamId) {
  const { data, error } = await supabase.from("employees").select("*").eq("teamId", teamId).order("fullName", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Employees could not be loaded");
  }

  return data;
}