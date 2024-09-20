import { create } from "zustand";

const useWaitressModal = create((set) => ({
  isOpen: false,

  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useWaitressModal;
