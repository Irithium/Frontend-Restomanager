import { create } from "zustand";
import axiosConfig from "../utils/axiosConfig";
const MENU_URL_GET = "/menu";

const adaptMenuData = (newMenuData) => {
  return newMenuData.map((menuItem) => {
    return {
      id: menuItem.id,
      title: menuItem.producto,
      price: menuItem.precio,
      description: menuItem.descripcion,
      category: menuItem.categoria,
      image: menuItem?.imagenes[0]
        ? menuItem?.imagenes[0]
        : "https://i.pinimg.com/564x/07/21/32/072132759e23ee009f4f9ba04bdc8845.jpg",
      agregados: menuItem?.agregados.map((agregado) => {
        return {
          id: agregado.id,
          id_menu: agregado.id_menu,
          name: agregado.nombre,
          price: agregado.precio,
          description: agregado.descripcion,
        };
      }),
    };
  });
};

const useMenu = create((set) => ({
  menu: [],
  filteredMenu: [],
  isLoading: true,

  fetchMenu: async () => {
    try {
      const response = await axiosConfig.get(MENU_URL_GET);
      const data = response.data;
      const adaptedMenu = adaptMenuData(data);
      set({ menu: adaptedMenu, filteredMenu: adaptedMenu, isLoading: false });
    } catch (error) {
      set({ menu: [], filteredMenu: [], isLoading: false });
      throw new Error(error);
    }
  },

  setMenu: (menu) => set({ menu }),

  setFilteredMenu: (filteredMenu) => set({ filteredMenu }),
}));

export default useMenu;
