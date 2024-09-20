import PropTypes from "prop-types";

const Button = ({ label, onClick, disabled, outline }) => {
  // Returning a button element with the specified props and styles
  return (
    <button
      // Adding an onClick event handler
      onClick={onClick}
      // Setting the disabled property
      disabled={disabled}
      className={`
        w-full 
        h-12 
        rounded-[10px] 
        font-inter
        font-bold
        text-center
        
        ${disabled ? "opacity-70 cursor-not-allowed" : ""}
        ${
          outline
            ? "bg-white border-black text-black"
            : "bg-[#343434] border-[#343434] text-white"
        }
      `}
    >
      {label}
    </button>
  );
};

// Definimos los tipos de props esperados
Button.propTypes = {
  // El prop 'categories' es un arreglo requerido
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  outline: PropTypes.bool,
};

export default Button;
