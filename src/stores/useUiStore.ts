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

  selectedColors: Record<number, number>;
  selectColor: (productId: number, colorIndex: number) => void;

  selectedSizes: Record<number, number | null>;
  selectSize: (productId: number, sizeIndex: number) => void;

  showAllNewArrivals: boolean;
  toggleNewArrivals: () => void;

  showAllTopSelling: boolean;
  toggleTopSelling: () => void;
};

export const useUiStore = create<UiStore>((set) => ({
  isSidebarOpen: false,
  isSearchOpen: false,
  showBackToTop: false,
  showBackToTopButton: false,
  selectedColors: {},
  selectedSizes: {},
  showAllNewArrivals: false,
  showAllTopSelling: false,

  handleOpenSidebar: () => set({ isSidebarOpen: true }),
  handleCloseSidebar: () => set({ isSidebarOpen: false }),

  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),

  setShowBackToTop: (value) => set({ showBackToTop: value }),

  selectColor: (productId, colorIndex) =>
    set((state) => ({
      selectedColors: {
        ...state.selectedColors,
        [productId]: colorIndex,
      },
    })),

  selectSize: (productId, sizeIndex) =>
    set((state) => ({
      selectedSizes: {
        ...state.selectedSizes,
        [productId]: sizeIndex,
      },
    })),

  toggleNewArrivals: () =>
    set((state) => ({ showAllNewArrivals: !state.showAllNewArrivals })),

  toggleTopSelling: () =>
    set((state) => ({ showAllTopSelling: !state.showAllTopSelling })),
}));
