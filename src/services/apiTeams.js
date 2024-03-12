import supabase from "./supabase";

export async function getTeams() {
  const { data, error } = await supabase.from("teams").select("id, title")

  if (error) {
    console.error(error);
    throw new Error("Teams could not be loaded");
  }

  return data;
}