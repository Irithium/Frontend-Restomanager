import React, { useState, useEffect } from 'react';
import axiosConfig from '../utils/axiosConfig';

const MozoCallsTable = () => {
  const [calls, setCalls] = useState([]);
  const CALLS_URL = "/mozocall";

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        const response = await axiosConfig.get(CALLS_URL);
        setCalls(response.data); 
      } catch (error) {
        console.error('Error fetching calls:', error);
      }
    };

    fetchCalls();
    const intervalId = setInterval(fetchCalls, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleMarkAsDelivered = async (id) => {
    try {
      const response = await axiosConfig.put(`${CALLS_URL}/${id}/entregar`);
      const updatedCall = response.data.mozoCall;
      setCalls(calls.map(call =>
        call.id === id ? { ...call, atendido: updatedCall.atendido, hentrega: updatedCall.hentrega } : call
      ));
    } catch (error) {
      console.error('Error marking as delivered:', error);
    }
  };

  const handleMarkAsCharged = async (id) => {
    try {
      const response = await axiosConfig.put(`${CALLS_URL}/${id}/cobrar`);
      const updatedCall = response.data.mozoCall;
      setCalls(calls.map(call =>
        call.id === id ? { ...call, cobrado: updatedCall.cobrado, atendido: updatedCall.atendido, hentrega: updatedCall.hentrega } : call
      ));
    } catch (error) {
      console.error('Error marking as charged:', error);
    }
  };

  const handleDeleteCall = async (id) => {
    try {
      await axiosConfig.delete(`${CALLS_URL}/${id}`);
      setCalls(calls.filter(call => call.id !== id));
    } catch (error) {
      console.error('Error deleting call:', error);
    }
  };

  const sortedCalls = [...calls].sort((a, b) => {
    if (a.cobrado && !b.cobrado) return 1;
    if (!a.cobrado && b.cobrado) return -1;
    if (a.atendido && !b.atendido) return 1;
    if (!a.atendido && b.atendido) return -1;
    return new Date(a.solicitado) - new Date(b.solicitado);
  });

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Llamadas a Mozos</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-200 text-gray-600">
          <tr>
            <th className="border-b border-gray-300 p-4 text-left">ID</th>
            <th className="border-b border-gray-300 p-4 text-left">Mesa</th>
            <th className="border-b border-gray-300 p-4 text-left">Solicitado</th>
            <th className="border-b border-gray-300 p-4 text-left">Atendido</th>
            <th className="border-b border-gray-300 p-4 text-left">Hora de Atención</th>
            <th className="border-b border-gray-300 p-4 text-left">Cuenta</th>
            <th className="border-b border-gray-300 p-4 text-left">Cobrado</th>
            <th className="border-b border-gray-300 p-4 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {sortedCalls.map((call) => (
            <tr
              key={call.id}
              className={
                call.cobrado
                  ? 'bg-green-200'
                  : call.cuenta
                  ? 'bg-yellow-200'
                  : call.atendido
                  ? 'bg-red-200'
                  : ''
              }
            >
              <td className="border-b border-gray-300 p-2 text-center">{call.id}</td>
              <td className="border-b border-gray-300 p-2 text-center">{call.mesa}</td>
              <td className="border-b border-gray-300 p-2 text-center">
                {new Date(call.solicitado).toLocaleString()}
              </td>
              <td className="border-b border-gray-300 p-2 text-center">
                {call.atendido ? 'Sí' : 'No'}
              </td>
              <td className="border-b border-gray-300 p-2 text-center">
                {call.hentrega ? new Date(call.hentrega).toLocaleString() : 'N/A'}
              </td>
              <td className="border-b border-gray-300 p-2 text-center">
                {call.cuenta ? 'Sí' : 'No'}
              </td>
              <td className="border-b border-gray-300 p-2 text-center">
                {call.cobrado ? 'Sí' : 'No'}
              </td>
              <td className="border-b border-gray-300 p-2 text-center">
                {!call.atendido && (
                  <button
                    onClick={() => handleMarkAsDelivered(call.id)}
                    className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out text-sm"
                  >
                    Atendido
                  </button>
                )}
                {call.atendido && !call.cobrado && (
                  <button
                    onClick={() => handleMarkAsCharged(call.id)}
                    className="w-full p-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-150 ease-in-out text-sm"
                  >
                    Cobrado
                  </button>
                )}
                {call.cobrado && (
                  <button
                    onClick={() => handleDeleteCall(call.id)}
                    className="w-full p-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-150 ease-in-out text-sm"
                  >
                    Eliminar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MozoCallsTable;
