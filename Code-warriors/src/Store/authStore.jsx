import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (email, password) => {
    // Simulate API call
    const user = {
      id: '1',
      email,
      name: 'Test User',
    };
    set({ user, isAuthenticated: true });
  },
  register: (name, email, password) => {
    // Simulate API call
    const user = {
      id: '1',
      email,
      name,
    };
    set({ user, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));