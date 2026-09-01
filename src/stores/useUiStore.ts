import { create } from "zustand";

type UiStore = {
  isSidebarOpen: boolean;
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;

  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  showBackToTop: boolean;
  setShowBackToTop: (value: boolean) => void;

  colorIndex: number;
  selectColor: (value: number) => void;
};

export const useUiStore = create<UiStore>((set) => ({
  isSidebarOpen: false,
  isSearchOpen: false,
  showBackToTop: false,
  showBackToTopButton: false,
  colorIndex: 0,

  handleOpenSidebar: () => set({ isSidebarOpen: true }),
  handleCloseSidebar: () => set({ isSidebarOpen: false }),

  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),

  setShowBackToTop: (value) => set({ showBackToTop: value }),

  selectColor: (value) => set({ colorIndex: value }),
}));
