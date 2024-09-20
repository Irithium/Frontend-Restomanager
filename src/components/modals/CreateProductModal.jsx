import React, { useState } from 'react';
import axiosConfig from '../../utils/axiosConfig';

const URL_POST_MENU = '/menu';

const CreateProductModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    producto: '',
    precio: '',
    descripcion: '',
    categoria: '',
    agregados: [{ nombre: '', precio: '', descripcion: '' }],
    imagenes: [{ url: '' }]
  });

  // Manejar cambios en los campos
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar cambios en los agregados
  const handleAgregadoChange = (index, field, value) => {
    const newAgregados = [...formData.agregados];
    newAgregados[index] = { ...newAgregados[index], [field]: value };
    setFormData({ ...formData, agregados: newAgregados });
  };

  // Agregar nuevo agregado
  const addAgregado = () => {
    setFormData({
      ...formData,
      agregados: [...formData.agregados, { nombre: '', precio: '', descripcion: '' }]
    });
  };

  // Manejar cambios en las imágenes
  const handleImageChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, imagenes: [{ url: value }] });
  };

  // Guardar nuevo producto
  const handleSave = async () => {
    // Crea una copia de formData para evitar modificar el estado directamente
    const formDataCreated = { ...formData };
    
    // Convierte el precio del producto a un número
    formDataCreated.precio = parseFloat(formDataCreated.precio);
    
    // Filtra los agregados vacíos y convierte los precios a números
    formDataCreated.agregados = formDataCreated.agregados
      .filter(agregado => agregado.nombre.trim() !== '' && !isNaN(agregado.precio))
      .map(agregado => ({
        ...agregado,
        precio: parseFloat(agregado.precio)
      }));
  
    // Imprime el JSON a enviar antes de hacer la solicitud para depuración
    console.log('JSON a enviar:', formDataCreated);
  
    try {
      // Verifica que el precio del producto sea válido antes de enviar la solicitud
      if (!isNaN(formDataCreated.precio)) {
        await axiosConfig.post(URL_POST_MENU, formDataCreated);
        onClose(formDataCreated); // Cierra el modal y pasa el producto creado
      } else {
        console.error('Error: El valor de precio no es válido');
      }
    } catch (error) {
      console.error('Error al guardar el producto:', error);
    }
  };
  
  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-[70vw] max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl mb-4">Crear Producto</h2>
        <form className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Nombre, Categoría y Precio */}
          <input
            type="text"
            name="producto"
            placeholder="Nombre del producto"
            value={formData.producto}
            onChange={handleFieldChange}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="categoria"
            placeholder="Categoría"
            value={formData.categoria}
            onChange={handleFieldChange}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={formData.precio}
            onChange={handleFieldChange}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          
          {/* Descripción (ocupa las 3 columnas) */}
          <textarea
            name="descripcion"
            placeholder="Descripción"
            value={formData.descripcion}
            onChange={handleFieldChange}
            className="mb-2 p-2 border border-gray-300 rounded col-span-3"
          />

          {/* Agregados */}
          <h3 className="text-xl mb-2 col-span-3">Agregados</h3>
          {formData.agregados.map((agregado, index) => (
            <React.Fragment key={index}>
              <input
                type="text"
                placeholder="Nombre del agregado"
                value={agregado.nombre}
                onChange={(e) => handleAgregadoChange(index, 'nombre', e.target.value)}
                className="mb-1 p-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                placeholder="Precio"
                value={agregado.precio}
                onChange={(e) => handleAgregadoChange(index, 'precio', e.target.value)}
                className="mb-1 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Descripción"
                value={agregado.descripcion}
                onChange={(e) => handleAgregadoChange(index, 'descripcion', e.target.value)}
                className="mb-1 p-2 border border-gray-300 rounded col-span-3"
              />
            </React.Fragment>
          ))}
          <button
            type="button"
            onClick={addAgregado}
            className="p-2 bg-green-500 text-white rounded col-span-3"
          >
            Agregar otro agregado
          </button>

          {/* Imagen */}
          <h3 className="text-xl mb-2 col-span-3">Imagen</h3>
          <input
            type="text"
            placeholder="URL de la imagen"
            value={formData.imagenes[0].url}
            onChange={handleImageChange}
            className="mb-2 p-2 border border-gray-300 rounded col-span-3"
          />
        </form>

        {/* Botones de acción */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="p-2 bg-blue-500 text-white rounded mr-2"
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

export default CreateProductModal;
