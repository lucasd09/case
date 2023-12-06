import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
}

interface AuthActions {
  setAccessToken: (token: string) => void;
  logout: () => void;
}
const useAuthStore = create<AuthState & AuthActions>((set) => ({
  accessToken: null,
  setAccessToken: (token: string) => set({ accessToken: token }),
  logout: () => set({ accessToken: null }),
}));

export default useAuthStore;
