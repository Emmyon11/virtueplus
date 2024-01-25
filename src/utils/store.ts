import { create } from 'zustand';

interface DrawerState {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const useDrawerState = create<DrawerState>()((set) => ({
  open: false,
  openDrawer: () => set(() => ({ open: true })),
  closeDrawer: () => set({ open: false }),
}));
