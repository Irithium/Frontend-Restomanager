import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useMesaStore from "../../hooks/useMesaStore";
import useWaitressModal from "../../hooks/useWaitressModal";

const WelcomeModal = ({ numeroMesa }) => {
  const tableModal = useMesaStore();
  const waitressModal = useWaitressModal();
  const [showModal, setShowModal] = useState(tableModal.isOpen);

  useEffect(() => {
    setShowModal(tableModal.isOpen);
  }, [tableModal.isOpen, numeroMesa]);

  const handleClose = useCallback(() => {
    // Set showModal to false and call onClose callback after a delay
    setShowModal(false);
    setTimeout(() => {
      tableModal.onClose();
    }, 300);
  }, [tableModal]);

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/70 shadow-xl z-[40]">
        <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg text-center items-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold md:font-black mb-3 md:mb-4">
            Bienvenido a Nostra Cocina
          </h2>
          <p className="mb-4 md:mb-6 font-medium lg:text-lg">
            Usted está pidiendo para la mesa {numeroMesa}
          </p>

          <div className="space-x-4 flex flex-row items-center">
            {/* Botón para llamar al mozo (enlazar funcionalidad luego) */}
            <button
              onClick={() => waitressModal.onOpen()}
              className="px-4 py-2 bg-[#343434] border-[#343434] text-white text-sm md:text-base md:font-medium rounded hover:bg-[#343434]/80 active:bg-[#1F1F1F] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Llamar al mozo
            </button>

            {/* Botón para continuar al menú (redirige a /) */}
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-[#343434] border-[#343434] text-white text-sm md:text-base md:font-medium rounded hover:bg-[#343434]/80 active:bg-[#1F1F1F] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Continuar al menú
            </button>
          </div>
        </div>
      </div>
    )
  );
};

WelcomeModal.propTypes = {
  numeroMesa: PropTypes.string.isRequired,
};

export default WelcomeModal;
