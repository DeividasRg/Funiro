export const createClient = () => ({
  auth: {
    getSession: jest.fn(),
    signInWithPassword: jest.fn(),
  },
  from: () => ({
    select: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn(),
  }),
});
