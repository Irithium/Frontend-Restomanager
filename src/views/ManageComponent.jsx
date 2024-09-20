import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "../store/authStore";
import MozoCallsTable from './MozoCallsTable';  // Importar el componente de la tabla

const ManageComponent = () => {
  const { auth } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [showMozoCalls, setShowMozoCalls] = useState(true);

  useEffect(() => {
    if (!auth.accessToken) {
      navigate("/login");
    }
  }, [auth, navigate]);

  useEffect(() => {
    // Ocultar las llamadas a mozos si no estamos en la ruta "/panel"
    if (location.pathname === "/panel") {
      setShowMozoCalls(true);
    } else {
      setShowMozoCalls(false);
    }
  }, [location]);

  return (
    <div className="flex flex-col h-full">
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => navigate("/panel")}
              className="text-white p-2 rounded"
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("pedidos")}
              className="text-white p-2 rounded"
            >
              Pedidos
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("manage")}
              className="text-white p-2 rounded"
            >
              Administración
            </button>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-4">
        {showMozoCalls && <MozoCallsTable />} 
        <Outlet />
      </main>
    </div>
  );
};

export default ManageComponent;
