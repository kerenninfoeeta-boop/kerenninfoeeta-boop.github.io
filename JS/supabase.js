const SUPABASE_URL = "https://hzmylgleillvkvdozmfy.supabase.co";

const SUPABASE_KEY = "sb_publishable_Ld4Z6SDdkDp9FB-O1uMzsA_829oc34P";

const { createClient } = window.supabase;

window.supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);