import { useEffect, useState } from "react";
import useMenu from "../store/useMenu";
import useCart from "../store/useCart";

/**
 * Componente que renderiza una barra de búsqueda
 *
 * @returns {JSX.Element} - Elemento JSX que contiene la barra de búsqueda
 */
const SearchBar = () => {
  const cartModal = useCart();
  const { orders } = cartModal;
  const { menu, setFilteredMenu } = useMenu();
  const [searchQuery, setSearchQuery] = useState("");
  const [quantity, setQuantity] = useState(orders.length);

  const handleClick = () => {
    cartModal.onOpen();
  };

  useEffect(() => {
    setQuantity(orders.length);
  }, [orders.length]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update the search query state

    if (query === "") {
      setFilteredMenu(menu); // Reset the filtered menu state to the original menu array
    } else {
      const filtered = menu.filter((dish) =>
        dish.title.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredMenu(filtered);
    }
  };

  return (
    // Contenedor principal con estilos de flexbox
    <div className="flex flex-row sticky top-0 md:static w-full lg:w-1/3 max-lg:px-3 items-center justify-evenly">
      <div
        className={`
        flex 
        flex-row 
        h-9
        md:h-10
        lg:h-12 
        max-lg:my-2
        w-3/4
        lg:w-full 
        bg-white 
        rounded-full
        lg:rounded-xl 
        border 
        border-[#C2C2C2] 
        overflow-hidden
        items-center
      `}
      >
        {/* Icono de búsqueda */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_191_562)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.76 25.27L32.49 31L31 32.49L25.27 26.76C24.2 27.53 22.91 28 21.5 28C17.91 28 15 25.09 15 21.5C15 17.91 17.91 15 21.5 15C25.09 15 28 17.91 28 21.5C28 22.91 27.53 24.2 26.76 25.27ZM21.5 17C19.01 17 17 19.01 17 21.5C17 23.99 19.01 26 21.5 26C23.99 26 26 23.99 26 21.5C26 19.01 23.99 17 21.5 17Z"
              fill="#363A44"
            />
          </g>
          <defs>
            <clipPath id="clip0_191_562">
              <rect x="4" y="4" width="40" height="40" rx="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {/* Input de búsqueda */}
        <input
          className={`
          outline-none 
          w-full
          `}
          type="text"
          placeholder="Buscar un producto"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <button className="lg:hidden relative" onClick={() => handleClick()}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="30" height="30" fill="url(#pattern0_473_6882)" />
          <defs>
            <pattern
              id="pattern0_473_6882"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_473_6882" transform="scale(0.01)" />
            </pattern>
            <image
              id="image0_473_6882"
              width="100"
              height="100"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEsUlEQVR4nO2dS4gdRRSGa0QXoihqXIqP6EJEUEdliIM99f+nr1cFNQtdCAqCC4PJSgSD4gTBgI+FCx8YcKURN2YjvjbZ+NgkKCpx4SIEBB9ojBqMr+iVghuIw1TPvXdu96lbpz7496fO6a7uOn91tXOFQqFQKBQKhY6oquoikrcDuHM1ee9vEZHLnXNzXcVkFgA7AfxDcrCWAHxDckdVVWdqx50lADaPUohVdAjANdrxZwfJ1ycsSNCvdV1fpT2GrACwex0FCVPYwYWFhdO1x5ENAO5YT0GGelh7HFlB8slRH+qRu+Qr7TFkR6/Xu8B7f1vstZfkdpLHYkURkSu1x2AOAE80FOQR7fjMQfLqhmnrA+34LDJH8utIQY6TPE87QHMA2NUwbd2tHZ85Qr+rYdrarR2fOeq6PoPk75GCHK6q6lTtGM0B4L3YXbK0tHSDdnzmILmtYdraqR2fOeq6vrihIJ9rx2cSAF/GiuK9v1A7PnOQfKbhLnlAOz5zkFxqKMhb2vGZY35+/jSSRyIF+U1E7oo1Kg2p7tQrAvDGFLyUQeb6trOlAMl7ExjwIHWFjSGd3Cn9fv/89RhbliQidF0A4GPtwXI2JJ0UhORjCQx2kLKCNbG4uHhOJwUJ24C0B8zEBeBDl4JpVcQTBVnusiDhOfJyST6jF6D3flOnBQm7VUpBGJuufgmL6GRMK+sC8KZLzbSyLGg1WptMK+O6JDnTyqoAHHSpmlYWBeBF7YI8rZ0EJqTwMZRqQUSk0k4CLbZLYoQ9WTHTyqA+cilQTCueKMgOlwLe+3sSuDoH5tolMaqq2jDcCT+wKmi0S5oophX3uJQA8Kj2VUpFicgWlxLWTSvv/UaXGGZNK2i3S2JYNa2g3S6JYdW0gna7JIZF0woptEuaAPCudpJosV0SA8DWBJI0MNcuiWHNtPKptEuaIHlAO1G02C6JYci02uNmASumlaTWLlnDtPpJO2E02C4xa1oh1XaJVdMKqbZLYoQzfkke1U4cW5KILLpZA8AL2oljO9o/k6d9B2uX5A8JJHAwzd7VTB+2A8CT/CujgjzkZh0AN2fwPPk3q7OKq6q6lOT7CSR2MIEOeO9vdDnivZ8n+RyAT8JpdAkkezUdDZvIAbwiIrcuLy+fop23QqFQKBQKhcJM473fGP4GN5SKv9Dr9c4dmmrhj3XXmzwYGsBmAF+sduRsSEwXMYjIZeEjf5J/r4jhcDirxMxvnUg+u9biLPjyLccgYZPCGjHsCw1SlzPjHDYA4MEW74zGYpykvTPZah91rgbw8xgtjCNtbNMcTlMjt1LCaasuRwDcP25fyXt/37QvipXPjBH0tssRki9N0Oh7vgV/ZqwYAHzvcgTAaxMU5FXtTyYA/OGsnR3PuJ6acgzXZb/lZ1RE5KYJklFPM4aw6APw45gx7HI5EoweAJ+OkYzP2jCHwicEYxTjuPf+CpcrInJt099DT9Kxtn4VHlbgYdE3YkEed7kjIlV4c2lIxHdte9jDLUp7m+6MYTHyXBSuRETOHp6QvX+4IyX42PvCAQT9fv+sjsKYC4s+ku+EiwDAn+EBHp4ZWU9ThUKhUCgUCoVCoVAoFNz/+Q8SUPBtyfjGOQAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
        <span className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 text-[10px] text-white font-semibold">
          {quantity}
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
