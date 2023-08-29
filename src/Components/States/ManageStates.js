import { create } from "zustand";

export const useServiceStore = create((set) => ({
  service: "All",
  setService: (newService) => set((state) => ({ service: newService })),
}));

export const useShowContactUsFormStore = create((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
