// Importamos la biblioteca PropTypes para validar los tipos de props
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useCategory from "../hooks/useCategory";

/**
 * Componente CategoryBox
 *
 * Muestra una caja con un texto que representa una categoría
 *
 * @param {string} category - La categoría a mostrar
 * @returns {JSX.Element} El componente CategoryBox
 */
const CategoryBox = ({ label, onClick }) => {
  const { category } = useCategory();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    category === label ? setSelected(true) : setSelected(false);
  }, [category, selected, label]);

  return (
    // Contenedor con estilos de caja
    <button
      className={`
        box-border 
        flex-1 
        text-center 
        py-2
        lg:py-3 
        transition
        duration-200 
        rounded-[10px]
        cursor-pointer
        mx-[0.1%]
          text-sm
          md:text-base
          xl:text-lg
          font-semibold 
          leading-4
          capitalize

        ${
          selected
            ? "bg-gray-900 text-gray-100 hover:bg-gray-900 hover:opacity-90"
            : "hover:bg-[#A3A3A3] text-[#3D3D3D] hover:text-[#292929] active:bg-gray-900 active:text-gray-100"
        }
      `}
      onClick={onClick}
      value={label}
    >
      {label}
    </button>
  );
};

// Definimos los tipos de props esperados
CategoryBox.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Exportamos el componente por defecto
export default CategoryBox;
