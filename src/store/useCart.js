import { create } from "zustand";

const useCart = create((set) => ({
  orders: [], // array de objetos que representan la orden de comida
  isOpen: false,

  onOpen: () => set({ isOpen: true }),

  onClose: () => set({ isOpen: false }),

  addDish: (dish) => {
    set((state) => {
      const existingDish = state.orders.find(
        (item) => item.uniqueKey === dish.uniqueKey
      );

      if (state.orders.length === 0) {
        const plate = { ...dish };
        return {
          total: state.total + dish.totalPrice,
          orders: [...state.orders, plate],
        };
      } else {
        if (existingDish) {
          return {
            orders: state.orders.map((item) =>
              item.uniqueKey === dish.uniqueKey
                ? {
                    ...item,
                    quantity: item.quantity + dish.quantity,
                    totalPrice: item.totalPrice + dish.totalPrice,
                  }
                : item
            ),
            total: state.total + dish.totalPrice,
          };
        } else {
          const plate = { ...dish };
          return {
            orders: [...state.orders, plate],
            total: state.total + dish.totalPrice,
          };
        }
      }
    });
  },

  editDish: (dish, oldUniqueKey) => {
    set((state) => {
      if (dish.uniqueKey === oldUniqueKey) {
        const updatedOrders = state.orders.map((item) =>
          item.uniqueKey === oldUniqueKey
            ? {
                ...item,
                quantity: dish.quantity,
                totalPrice: dish.totalPrice,
              }
            : item
        );

        return {
          ...state,
          orders: updatedOrders,
        };
      } else {
        const existingDish = state.orders.find(
          (item) => item.uniqueKey === dish.uniqueKey
        );

        if (existingDish) {
          const updatedOrders = state.orders.map((item) =>
            item.uniqueKey === dish.uniqueKey
              ? {
                  ...item,
                  quantity: item.quantity + dish.quantity,
                  totalPrice: item.totalPrice + dish.totalPrice,
                }
              : item
          );

          const newOrders = updatedOrders.filter(
            (item) => item.uniqueKey !== oldUniqueKey
          );

          return {
            ...state,
            orders: newOrders,
          };
        } else {
          const newOrders = state.orders.map((item) =>
            item.uniqueKey === oldUniqueKey
              ? {
                  ...item,
                  uniqueKey: dish.uniqueKey,
                  quantity: dish.quantity,
                  totalPrice: dish.totalPrice,
                  addons: dish.addons,
                }
              : item
          );

          return {
            orders: newOrders,
          };
        }
      }
    });
  },

  removeDish: (uniqueKey, quantity) => {
    if (quantity > 0) {
      set((state) => {
        const dishToRemove = state.orders.find(
          (item) => item.uniqueKey === uniqueKey
        );

        if (dishToRemove) {
          if (dishToRemove.quantity === quantity) {
            return {
              orders: state.orders.filter(
                (item) => item.uniqueKey !== dishToRemove.uniqueKey
              ),
            };
          } else {
            return {
              orders: state.orders.map((item) =>
                item.uniqueKey === uniqueKey
                  ? { ...item, quantity: item.quantity - quantity }
                  : item
              ),
            };
          }
        }
      });
    } else {
      return "Hubo un error en su pedido, por favor intente de nuevo";
    }
  },

  clearCart: () => set({ orders: [] }), // Nueva función para limpiar el carrito
}));

export default useCart;
