import { create } from "zustand";

interface CaseActions {
  setName: (name: string | undefined) => void;
  setTitle: (title: string | undefined) => void;
  setBio: (bio: string | undefined) => void;
  setPortfolio: (portfolio: PortofolioProps[]) => void;
}
const useCaseStore = create<CaseProps & CaseActions>((set) => ({
  name: "",
  title: "",
  bio: "",
  portfolio: undefined,
  setName: (name: string | undefined) => set({ name }),
  setTitle: (title: string | undefined) => set({ title }),
  setBio: (bio: string | undefined) => set({ bio }),
  setPortfolio: (portfolio: PortofolioProps[]) => set({ portfolio }),
}));

export default useCaseStore;
