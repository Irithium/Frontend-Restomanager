<<<<<<< HEAD
import PropTypes from "prop-types";
import CategoryBox from "../CategoryBox";

/**
 * Componente que renderiza una lista de categorías
 *
 * @param {array} categories - Arreglo de categorías a renderizar
 * @returns {JSX.Element} - Elemento JSX que contiene la lista de categorías
 */
const Categories = ({ categories }) => {
  return (
    // Contenedor principal con estilos de flexbox
    <div
      className={`
        flex
        flex-row
        mx-1
        items-center
        w-full
        justify-evenly
        overflow-hidden
      `}
    >
      {/*
        Mapeamos el arreglo de categorías y renderizamos un CategoryBox por cada una
      */}
      {categories.map((item) => {
        return <CategoryBox key={item} label={item} />;
      })}
    </div>
  );
};

// Definimos los tipos de props esperados
Categories.propTypes = {
  // El prop 'categories' es un arreglo requerido
  categories: PropTypes.array.isRequired,
=======
import Proptypes from "prop-types";

const Categories = ({ categories }) => {
  console.log(categories);

  return categories.map((category, key) => {
    return (
      <div key={key} className="px-4">
        {category}
      </div>
    );
  });
};

Categories.propTypes = {
  categories: Proptypes.array.isRequired,
>>>>>>> e9e517f662816aaec4469966c803a2f5651a4b0e
};

export default Categories;
