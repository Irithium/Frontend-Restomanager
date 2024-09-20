// Componente Header

const Header = () => {
  // Retorna el JSX del componente
  return (
    // Div contenedor del header
    <div
      className={`
        flex
        flex-col
        bg-gray-900
        max-sm:min-h-32
        h-fit
        md:h-[20%]
        w-full
        justify-center
        items-center 
        py-2
        gap-5
      `}
    >
      {/* Div contenedor de Logo y la dirección */}

      {/* Logo */}

      <img
        src="https://i.ibb.co/gj4hVP3/logobanner1-1.png"
        alt="Banner"
        className="w-3/6 md:w-1/4 lg:w-1/6 h-auto rounded-md overflow-hidden"
      />

      <div className="text-white flex flex-row gap-2 md:hidden">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_383_2891)">
            <path
              d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
              fill="#293160"
            />
          </g>
          <defs>
            <clipPath id="clip0_383_2891">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span>Calle falsa 134</span>
      </div>
    </div>
  );
};

export default Header;
