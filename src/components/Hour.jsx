import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Hour() {
  // Paso 1: Crear un estado para la hora
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Paso 3: Actualizar la hora cada segundo
    const timer = setInterval(() => {
      // Paso 4: Obtener y formatear la hora actual
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  // Paso 5: Mostrar la hora en el div
  return (
    <>
      <div className="bg-base-300 p-5 pb-6 text-5xl sm:text-6xl rounded-xl">
        {currentTime}
      </div>
    </>
  );
}
