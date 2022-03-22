import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const VerCliente = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        setCliente(data);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    obtenerClienteAPI();
  }, []);

  return cargando ? (
    <Spinner />
  ) : Object.keys(cliente).length === 0 ? (
    <p>No hay resultados</p>
  ) : (
    <div>
      <h1 className="font-black text-4xl text-blue-900">
        Ver Cliente: {cliente.nombre}
      </h1>
      <p className="mt-3">Información del Cliente</p>

      {cliente.nombre && (
        <p className="text-4xl text-gray-600 mt-10">
          <span className="uppercase font-bold text-gray-800">Cliente:</span>
          {cliente.nombre}
        </p>
      )}

      {cliente.email && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Email:</span>
          {cliente.email}
        </p>
      )}

      {cliente.telefono && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Teléfono:</span>
          {cliente.telefono}
        </p>
      )}

      {cliente.empresa && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Cliente:</span>
          {cliente.empresa}
        </p>
      )}

      {cliente.notas && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Cliente:</span>
          {cliente.notas}
        </p>
      )}
    </div>
  );
};

export default VerCliente;
