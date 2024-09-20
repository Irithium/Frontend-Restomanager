import React, { useState, useEffect } from 'react';
import axiosConfig from '../../utils/axiosConfig';

const URL_UPDATE_MENU = '/menu'; 
const URL_AGREGADO = '/agregados'; // Consolidado para añadir y eliminar

const ModProductModal = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    producto: '',
    precio: '',
    descripcion: '',
    categoria: '',
    agregados: [], 
    imagenes: [{ url: '' }]
  });

  useEffect(() => {
    if (product) {
      setFormData({
        producto: product.producto,
        precio: product.precio,
        descripcion: product.descripcion,
        categoria: product.categoria,
        agregados: product.agregados.map(agregado => ({
          ...agregado,
          isNew: false 
        })) || [],
        imagenes: product.imagenes || [{ url: '' }]
      });
    }
  }, [product]);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgregadoChange = (index, field, value) => {
    const newAgregados = [...formData.agregados];
    newAgregados[index] = { ...newAgregados[index], [field]: value };
    setFormData({ ...formData, agregados: newAgregados });
  };

  const addAgregado = () => {
    setFormData({
      ...formData,
      agregados: [...formData.agregados, { nombre: '', precio: '', descripcion: '', isNew: true }]
    });
  };

  const handleImageChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, imagenes: [{ url: value }] });
  };

  const handleDeleteAgregado = async (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar este agregado?')) {
      try {
        await axiosConfig.delete(`${URL_AGREGADO}/${id}`);
        setFormData({
          ...formData,
          agregados: formData.agregados.filter(agregado => agregado.id !== id)
        });
      } catch (error) {
        console.error('Error al eliminar el agregado:', error);
      }
    }
  };

  const handleSave = async () => {
    try {
      if (!product || !product.id) {
        throw new Error('Product ID is missing');
      }

      // Actualiza el producto en la API
      await axiosConfig.put(`${URL_UPDATE_MENU}/${product.id}`, {
        producto: formData.producto,
        precio: formData.precio,
        descripcion: formData.descripcion,
        categoria: formData.categoria,
        agregados: formData.agregados.filter(agregado => !agregado.isNew), 
        imagenes: formData.imagenes
      });

      // Agregar nuevos agregados
      await Promise.all(formData.agregados
        .filter(agregado => agregado.isNew)
        .map(agregado =>
          axiosConfig.post(URL_AGREGADO, {
            id_menu: product.id, 
            nombre: agregado.nombre,
            precio: agregado.precio,
            descripcion: agregado.descripcion
          })
        )
      );
      
      console.log('Producto actualizado:', formData);
      onClose(formData); 
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-[70vw] max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl mb-4">Editar Producto</h2>
        <form className="flex flex-col gap-4">
          {/* Nombre, Categoría y Precio */}
          <input
            type="text"
            name="producto"
            placeholder="Nombre del producto"
            value={formData.producto}
            onChange={handleFieldChange}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={formData.categoria}
            onChange={handleFieldChange}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={formData.precio}
            onChange={handleFieldChange}
            className="p-2 border border-gray-300 rounded"
          />
          
          {/* Descripción */}
          <textarea
            name="descripcion"
            placeholder="Descripción"
            value={formData.descripcion}
            onChange={handleFieldChange}
            className="p-2 border border-gray-300 rounded"
          />

          {/* Agregados */}
          <h3 className="text-xl mb-2">Agregados</h3>
          {formData.agregados.map((agregado, index) => (
            <div key={agregado.id || index} className="flex flex-col mb-4">
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Nombre del agregado"
                  value={agregado.nombre}
                  onChange={(e) => handleAgregadoChange(index, 'nombre', e.target.value)}
                  className="p-2 border border-gray-300 rounded flex-1"
                />
                <input
                  type="number"
                  placeholder="Precio"
                  value={agregado.precio}
                  onChange={(e) => handleAgregadoChange(index, 'precio', e.target.value)}
                  className="p-2 border border-gray-300 rounded flex-1"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteAgregado(agregado.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Eliminar
                </button>
              </div>
              <input
                type="text"
                placeholder="Descripción"
                value={agregado.descripcion}
                onChange={(e) => handleAgregadoChange(index, 'descripcion', e.target.value)}
                className="p-2 border border-gray-300 rounded w-full mb-2"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addAgregado}
            className="p-2 bg-green-500 text-white rounded"
          >
            Añadir otro agregado
          </button>

          {/* Imagen */}
          <h3 className="text-xl mb-2">Imagen</h3>
          <input
            type="text"
            placeholder="URL de la imagen"
            value={formData.imagenes[0].url}
            onChange={handleImageChange}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </form>

        {/* Botones de acción */}
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={handleSave}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Guardar
          </button>
          <button
            onClick={() => onClose(null)}
            className="p-2 bg-gray-500 text-white rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModProductModal;
