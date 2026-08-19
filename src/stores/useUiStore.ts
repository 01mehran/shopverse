import { create } from "zustand";

type UiStore = {
  isSidebarOpen: boolean;
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;

  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
};

export const useUiStore = create<UiStore>((set) => ({
  isSidebarOpen: false,
  isSearchOpen: false,

  handleOpenSidebar: () => set({ isSidebarOpen: true }),
  handleCloseSidebar: () => set({ isSidebarOpen: false }),

  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
}));
