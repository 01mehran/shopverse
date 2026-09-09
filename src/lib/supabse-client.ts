import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xhcmnlgkyxlnrsrupxsa.supabase.co";
const supabaseAnonKey = "sb_publishable_xbEXAh43dN10aBntHZH-xA_2oK1CCzK";

export const supabse = createClient(supabaseUrl, supabaseAnonKey);
