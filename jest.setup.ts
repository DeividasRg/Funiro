// Mock Supabase client globally
jest.mock("@supabase/supabase-js", () => {
  return {
    createClient: () => ({
      auth: {
        getSession: jest.fn().mockResolvedValue({
          data: { session: null },
        }),
        onAuthStateChange: jest.fn(() => ({
          data: { subscription: { unsubscribe: jest.fn() } },
        })),
      },
      from: jest.fn(() => ({
        select: jest.fn().mockResolvedValue({ data: [], error: null }),
        insert: jest.fn().mockResolvedValue({ data: [], error: null }),
        update: jest.fn().mockResolvedValue({ data: [], error: null }),
      })),
    }),
  };
});
