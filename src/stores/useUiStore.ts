import { create } from "zustand";

type UiStore = {
  isSidebarOpen: boolean;
  handleToggleSidebar: () => void;
};

export const useUiStore = create<UiStore>((set) => ({
  isSidebarOpen: false,

  handleToggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
