import React, { useState, useEffect } from 'react';
import axiosConfig from '../utils/axiosConfig';
import CreateProductModal from '../components/modals/CreateProductModal'; // Importar modal para crear productos
import ModProductModal from '../components/modals/ModProductModal'; // Importar modal para modificar productos

const URL_GET_MENU = '/menu';
const URL_PRODUCT_DELETE = '/menu';

const ManagePanel = () => {
  const [productos, setProductos] = useState([]);
  const [sortedProductos, setSortedProductos] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // Estado para abrir/cerrar modal de creación
  const [isModProductModalOpen, setIsModProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productosPerPage] = useState(7); // Reducir cantidad de productos por página

  // Función para hacer el refetch de los productos
  const fetchProductos = async () => {
    try {
      const response = await axiosConfig.get(URL_GET_MENU);
      setProductos(response.data);
      setSortedProductos(response.data);
    } catch (error) {
      console.error('Error fetching productos:', error);
    }
  };

  // 1. Llamada inicial para obtener los productos desde la API
  useEffect(() => {
    fetchProductos();
  }, []);

  // 2. Actualización de productos ordenados
  useEffect(() => {
    // Ordenar productos aquí si es necesario
  }, [productos]);

  const handleDelete = async (id, productoNombre) => {
    const confirmed = window.confirm(`¿Estás seguro de que deseas eliminar el producto "${productoNombre}" y sus agregados?`);

    if (confirmed) {
      try {
        await axiosConfig.delete(`${URL_PRODUCT_DELETE}/${id}`);
        setProductos(productos.filter((producto) => producto.id !== id));
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    }
  };

  // 2. Abrir modal para agregar producto
  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  // 3. Cerrar modal y hacer refetch si se agrega un producto
  const closeCreateModal = (newProduct) => {
    setIsCreateModalOpen(false);
    if (newProduct) {
      fetchProductos(); // Refetch de productos después de agregar uno nuevo
    }
  };

  // 4. Abrir modal para modificar producto
  const openModProductModal = (product) => {
    setIsModProductModalOpen(true);
    setSelectedProduct(product);
  };

  const closeModProductModal = (updatedProduct) => {
    setIsModProductModalOpen(false);
    if (updatedProduct) {
      fetchProductos(); // Refetch de productos después de modificar uno
    }
  };

  // Paginación
  const indexOfLastProduct = currentPage * productosPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productosPerPage;
  const currentProductos = sortedProductos.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedProductos.length / productosPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestión de Productos</h1>
      <button
        onClick={openCreateModal}
        className="p-2 bg-blue-600 text-white rounded mb-4 hover:bg-blue-700 transition duration-150 ease-in-out"
      >
        Crear Producto
      </button>

      {/* Tabla de productos */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-200 text-gray-600">
          <tr>
            <th className="border-b border-gray-300 p-4 text-left">Imagen</th>
            <th className="border-b border-gray-300 p-4 text-left">Producto</th>
            <th className="border-b border-gray-300 p-4 text-left">Precio</th>
            <th className="border-b border-gray-300 p-4 text-left">Descripción</th>
            <th className="border-b border-gray-300 p-4 text-left">Categoría</th>
            <th className="border-b border-gray-300 p-4 text-left">Agregados</th>
            <th className="border-b border-gray-300 p-4 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {currentProductos.map((producto) => (
            <tr key={producto.id} className="hover:bg-gray-50">
              <td className="border-b border-gray-300 p-4">
                {producto.imagenes && producto.imagenes[0] ? (
                  <img
                    src={producto.imagenes[0].url}
                    alt={producto.producto}
                    className="w-full h-24 object-cover rounded"
                  />
                ) : (
                  <span>No hay imagen</span>
                )}
              </td>
              <td className="border-b border-gray-300 p-4">{producto.producto}</td>
              <td className="border-b border-gray-300 p-4">${producto.precio}</td>
              <td className="border-b border-gray-300 p-4 break-words">{producto.descripcion}</td>
              <td className="border-b border-gray-300 p-4">{producto.categoria}</td>
              <td className="border-b border-gray-300 p-4">
                {producto.agregados.length > 0 ? (
                  producto.agregados.map((agregado, index) => (
                    <span key={agregado.id}>
                      {index > 0 && ', '}
                      {agregado.nombre}
                    </span>
                  ))
                ) : (
                  'Sin agregados'
                )}
              </td>
              <td className="border-b border-gray-300 p-4 text-center">
                {/* Botones para editar/eliminar */}
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => handleDelete(producto.id, producto.producto)}
                    className="w-full p-3 bg-red-600 text-white rounded hover:bg-red-700 transition duration-150 ease-in-out text-sm"
                  >
                    Eliminar
                  </button>
                  <button
                    onClick={() => openModProductModal(producto)}
                    className="w-full p-3 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-150 ease-in-out text-sm"
                  >
                    Modificar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Controles de paginación */}
      <div className="flex justify-center mt-4">
        <nav className="flex space-x-2">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-4 py-2 rounded-lg border ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'} hover:bg-blue-100 transition duration-150 ease-in-out`}
            >
              {number}
            </button>
          ))}
        </nav>
      </div>

      {/* Modal de creación de productos */}
      {isCreateModalOpen && (
        <CreateProductModal
          onClose={closeCreateModal} // Pasa la función de cierre
        />
      )}

      {/* Modal de modificación de productos */}
      {isModProductModalOpen && selectedProduct && (
        <ModProductModal
          product={selectedProduct}
          onClose={closeModProductModal}
        />
      )}

    </div>
  );
};

export default ManagePanel;
