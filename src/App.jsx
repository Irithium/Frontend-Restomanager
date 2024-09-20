/**
 * Componente principal de la aplicación
 *
 * @returns {JSX.Element} - Elemento JSX que contiene la estructura básica de la aplicación
 */

import Header from "./containers/Header";
import Navbar from "./containers/Navbar";
import OrderSummary from "./containers/OrderSummary";
import MenuLoader from "./containers/MenuLoader";
import Footer from "./containers/Footer";
import OrderCheck from "./containers/OrderCheck";

// Definimos las categorías de la aplicación
const categories = [
  "Entradas",
  "Pizza",
  "Bebidas",
  "Pastas",
  "Rissotto",
  "Postres",
];

const App = () => {
  return (
    // Contenedor principal con estilos de flexbox
    <div
      className={`
        flex 
        flex-col 
        min-h-screen
        md:h-screen
        font-roboto
        bg-[#EAEAEB]
        md:scrollbar
        md:overflow-y-scroll
        md:scrollbar-track-rounded-full
        md:scrollbar-thumb-rounded-full
        md:scrollbar-thumb-gray-500 
        md:scrollbar-track-slate-300 
      
        `}
    >
      {/* Header de la aplicación */}
      <Header />
      {/* Barra de navegación con categorías */}
      <Navbar categories={categories} />
      {/* Contenedor vacío para futuras secciones */}
      <div
        className={`
          flex 
          flex-row
          justify-between
          w-[87.5%]
          mx-auto
          mt-4
        `}
      >
        <MenuLoader />
        <OrderSummary />
      </div>
      <Footer />
      <OrderCheck />
    </div>
  );
};

export default App;
