import { create } from "zustand";

type UiStore = {
  isSidebarOpen: boolean;
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
};

export const useUiStore = create<UiStore>((set) => ({
  isSidebarOpen: false,

  handleOpenSidebar: () => set({ isSidebarOpen: true }),
  handleCloseSidebar: () => set({ isSidebarOpen: false }),
}));
