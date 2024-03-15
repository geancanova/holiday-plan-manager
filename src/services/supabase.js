import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gwzxemojvpwpbubyqyoz.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3enhlbW9qdnB3cGJ1YnlxeW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxODg5MTYsImV4cCI6MjAyNTc2NDkxNn0.6SedgiMf6wpop687RtBVD8k1esBLsOnNl8ZXiyFt6Sw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
