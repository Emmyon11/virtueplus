import { User } from '@prisma/client';
import { create } from 'zustand';

interface DrawerState {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

interface UserState {
  user: User;
  setUser: (data: User) => void;
}

export const useDrawerState = create<DrawerState>()((set) => ({
  open: false,
  openDrawer: () => set(() => ({ open: true })),
  closeDrawer: () => set({ open: false }),
}));
export const userState = create<UserState>()((set) => ({
  user: null,
  setUser: (data: User) => set(() => ({ user: data })),
}));
