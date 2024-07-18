import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Hour() {
  // Obtener la hora actual formateada
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // Paso 1: Crear un estado para la hora, inicializándolo con la hora actual
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    // Paso 3: Actualizar la hora cada segundo
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  // Paso 5: Mostrar la hora en el div
  return (
    <div className="bg-base-300 p-5 pb-6 text-5xl sm:text-6xl rounded-xl">
      {currentTime}
    </div>
  );
}
