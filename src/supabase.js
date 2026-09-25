import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aqsmpkaiagbrknpenvdr.supabase.co";
const supabaseKey = "sb_publishable_1G9FEuG2D_srYOgn3vFqQA_O-N1R70p";

export const supabase = createClient(supabaseUrl, supabaseKey);