(function () {
  let _client = null;

  window.getSupabaseClient = function () {
    if (_client) return _client;

    if (!window.supabase || typeof window.supabase.createClient !== "function") {
      throw new Error("Supabase JS not loaded. Add the supabase-js CDN script tag.");
    }
    if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) {
      throw new Error("Missing Supabase config. Create `supabase-config.js` (see `supabase/SETUP.md`).");
    }

    _client = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
    return _client;
  };

  window.getSupabaseUser = async function () {
    const sb = window.getSupabaseClient();
    const { data, error } = await sb.auth.getUser();
    if (error) return null;
    return data.user || null;
  };
})();

