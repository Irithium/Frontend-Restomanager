import { create } from "zustand";

const useMesaStore = create((set) => ({
  numeroMesa: false,
  isOpen: true,

  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setNumeroMesa: (number) => set({ numeroMesa: number }),
}));

export default useMesaStore;
