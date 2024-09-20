import PropTypes from "prop-types";

const AgregadoBtn = ({ agregado, setSelAddons, addons }) => {
  return (
    <div
      id={agregado.id}
      className="flex-1 flex flex-row md:justify-start items-center gap-2 w-full"
    >
      <div className="w-6 xl:w-9 h-9 xl:h-12 flex justify-start items-center ">
        <input
          type="checkbox"
          id={`${agregado.id}`}
          name="agregado"
          value={agregado.id}
          className="w-4 xl:w-5 h-4 xl:h-5"
          onChange={(e) => {
            if (e.target.checked) {
              setSelAddons((prev) =>
                [...prev, agregado].sort((a, b) => a.id - b.id)
              );
            } else {
              setSelAddons((prev) =>
                prev
                  .filter((a) => a.id !== agregado.id)
                  .sort((a, b) => a.id - b.id)
              );
            }
          }}
        />
      </div>
      <div className="flex flex-row justify-between w-full">
        <span className="capitalize text-lg md:text-base ">
          {agregado?.name}
        </span>
        <span className="text-lg md:text-base font-medium mr-2">
          ${agregado.price}
        </span>
      </div>
    </div>
  );
};

AgregadoBtn.propTypes = {
  addons: PropTypes.array.isRequired,
  agregado: PropTypes.object.isRequired,
  setSelAddons: PropTypes.func.isRequired,
};

export default AgregadoBtn;
