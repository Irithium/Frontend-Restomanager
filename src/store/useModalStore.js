import create from 'zustand';

const useModalStore = create((set) => ({
  isOpen: false,  // Estado para controlar si el modal está abierto
  selectedProduct: null, // Producto seleccionado
  openModal: (product) => set({ isOpen: true, selectedProduct: product }), // Abre el modal y selecciona un producto
  closeModal: () => set({ isOpen: false, selectedProduct: null }), // Cierra el modal
}));

export default useModalStore;
