import { create } from "zustand";

const useOrderModal = create((set) => ({
  isOpen: false,
  order: {
    id: 0,
    title: "",
    price: 0,
    image: "",
    body: "",
    addons: [],
    agregados: [],
    quantity: 1,
    uniqueKey: "",
  },

  // Define the 'onOpen' function, which sets the 'isOpen' property to true
  onOpen: () =>
    set({
      isOpen: true,
    }),

  setInfo: (order) => {
    set({
      order: {
        id: order.id,
        title: order.title,
        price: order.price,
        image: order.image ? order.image : "",
        body: order.body,
        addons: order?.addons || [],
        agregados: order.agregados ? order.agregados : [],
        quantity: order?.quantity || 1,
        uniqueKey: order.uniqueKey ? order.uniqueKey : "",
      },
    });
  },
  // Define the 'onClose' function, which sets the 'isOpen' property to false
  onClose: () => set({ isOpen: false }),
}));

export default useOrderModal;
