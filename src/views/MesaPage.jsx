import { useParams } from "react-router-dom";

import useMesaStore from "../hooks/useMesaStore";
import WelcomeModal from "../components/modals/WelcomeModal";
import App from "../App";

const MesaPage = () => {
  const { numeroMesa } = useParams();
  const tableStore = useMesaStore();

  if (!tableStore.numeroMesa) {
    tableStore.setNumeroMesa(numeroMesa);
  }

  return (
    <>
      <WelcomeModal numeroMesa={numeroMesa} />
      <App />
    </>
  );
};

export default MesaPage;
