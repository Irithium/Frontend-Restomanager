// src/views/AgendaPedidos.jsx
import React, { useState, useEffect } from 'react';
import axiosConfig from '../utils/axiosConfig';

const AgendaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [sortedPedidos, setSortedPedidos] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const PEDIDOS_URL = "/pedidos";

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axiosConfig.get(PEDIDOS_URL);
        setPedidos(response.data);
        setSortedPedidos(response.data);
      } catch (error) {
        console.error('Error fetching pedidos:', error);
      }
    };

    fetchPedidos();
    const intervalId = setInterval(fetchPedidos, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!sortBy) return;

    const sorted = [...pedidos].sort((a, b) => {
      if (sortBy === 'mesa') {
        return sortDirection === 'asc' ? a.id_mesa - b.id_mesa : b.id_mesa - a.id_mesa;
      }
      if (sortBy === 'solicitado') {
        return sortDirection === 'asc'
          ? new Date(a.solicitado) - new Date(b.solicitado)
          : new Date(b.solicitado) - new Date(a.solicitado);
      }
      if (sortBy === 'entregado') {
        return sortDirection === 'asc'
          ? (a.entregado ? 1 : 0) - (b.entregado ? 1 : 0)
          : (b.entregado ? 1 : 0) - (a.entregado ? 1 : 0);
      }
      return 0;
    });

    setSortedPedidos(sorted);
  }, [sortBy, sortDirection, pedidos]);

  const handleSort = (key) => {
    setSortBy((prevSortBy) => {
      const newDirection = (prevSortBy === key && sortDirection === 'asc') ? 'desc' : 'asc';
      setSortDirection(newDirection);
      return key;
    });
  };

  const handleEntregarPedido = async (id) => {
    try {
      await axiosConfig.put(`/pedidos/${id}/entregar`);
      setPedidos((prevPedidos) =>
        prevPedidos.map((pedido) =>
          pedido.id === id ? { ...pedido, entregado: true } : pedido
        )
      );
    } catch (error) {
      console.error('Error updating pedido:', error);
    }
  };

  const handleEliminarPedido = async (id) => {
    try {
      await axiosConfig.delete(`/pedidos/${id}/forzar-eliminar`);
      setPedidos((prevPedidos) =>
        prevPedidos.filter((pedido) => pedido.id !== id)
      );
    } catch (error) {
      console.error('Error deleting pedido:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Agenda de Pedidos</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-200 text-gray-600">
          <tr>
            <th className="border-b border-gray-300 p-4 text-left">ID</th>
            <th
              className="border-b border-gray-300 p-4 text-left cursor-pointer"
              onClick={() => handleSort('mesa')}
            >
              Mesa {sortBy === 'mesa' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className="border-b border-gray-300 p-4 text-left">Producto</th>
            <th className="border-b border-gray-300 p-4 text-left">Agregados</th>
            <th className="border-b border-gray-300 p-4 text-center">Cantidad</th>
            <th
              className="border-b border-gray-300 p-4 text-left cursor-pointer"
              onClick={() => handleSort('solicitado')}
            >
              Solicitado {sortBy === 'solicitado' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th
              className="border-b border-gray-300 p-4 text-left cursor-pointer"
              onClick={() => handleSort('entregado')}
            >
              Entregado {sortBy === 'entregado' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className="border-b border-gray-300 p-4 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {sortedPedidos.map((pedido) => (
            <tr key={pedido.id} className="hover:bg-gray-50">
              <td className="border-b border-gray-300 p-4">{pedido.id}</td>
              <td className="border-b border-gray-300 p-4 text-center">{pedido.id_mesa}</td>
              <td className="border-b border-gray-300 p-4">{pedido.producto.producto}</td>
              <td className="border-b border-gray-300 p-4">
                {pedido.agregados.length > 0 ? (
                  <ul>
                    {pedido.agregados.map((agregado) => (
                      <li key={agregado.id}>{agregado.nombre}</li>
                    ))}
                  </ul>
                ) : (
                  'Sin agregados'
                )}
              </td>
              <td className="border-b border-gray-300 p-4 text-center">{pedido.cantidad}</td>
              <td className="border-b border-gray-300 p-4 text-center">
                {new Date(pedido.solicitado).toLocaleTimeString()}
              </td>
              <td className="border-b border-gray-300 p-4 text-center">
                {pedido.entregado ? 'Sí' : 'No'}
              </td>
              <td className="border-b border-gray-300 p-4 text-center">
                {!pedido.entregado ? (
                  <button
                    onClick={() => handleEntregarPedido(pedido.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-150 ease-in-out"
                  >
                    Marcar como entregado
                  </button>
                ) : (
                  <button
                    onClick={() => handleEliminarPedido(pedido.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition duration-150 ease-in-out"
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

export default AgendaPedidos;
