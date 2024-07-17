import { useState, useEffect } from 'react';

export default function Timer() {
  const [timerActive, setTimerActive] = useState(false);
  const [timerTime, setTimerTime] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Recuperar el estado del temporizador al montar el componente
  useEffect(() => {
    const savedTimerTime = localStorage.getItem('timerTime');
    const savedTimerActive = localStorage.getItem('timerActive') === 'true';

    if (savedTimerTime) {
      const totalSeconds = parseInt(savedTimerTime, 10);
      setTimerTime(totalSeconds);
      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(totalSeconds % 60);
    }

    if (savedTimerActive) {
      setTimerActive(true);
    }
  }, []);

  useEffect(() => {
    let interval = null;

    if (timerActive) {
      interval = setInterval(() => {
        setTimerTime((prevTime) => {
          const newTime = prevTime - 1;

          if (newTime >= 0) {
            const newHours = Math.floor(newTime / 3600);
            const newMinutes = Math.floor((newTime % 3600) / 60);
            const newSeconds = newTime % 60;

            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);

            // Guardar el tiempo actualizado en localStorage
            localStorage.setItem('timerTime', newTime.toString());
            localStorage.setItem('timerActive', 'true');

            return newTime;
          } else {
            clearInterval(interval);
            setTimerActive(false);
            localStorage.setItem('timerActive', 'false');
            return 0;
          }
        });
      }, 1000);
    } else {
      // Asegurarse de limpiar el intervalo y actualizar localStorage cuando el temporizador no esté activo
      clearInterval(interval);
      localStorage.setItem('timerActive', 'false');
    }

    return () => clearInterval(interval);
  }, [timerActive]);

  const startTimer = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTimerTime(totalSeconds);
    setTimerActive(true); // Activar el temporizador
    localStorage.setItem('timerTime', totalSeconds.toString());
    localStorage.setItem('timerActive', 'true');
  };

  const resetTimer = () => {
    setTimerActive(false);
    setTimerTime(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    localStorage.removeItem('timerTime');
    localStorage.setItem('timerActive', 'false');
  };

  return (
    <div className="bg-base-300 p-3 rounded-xl">
      <div className="flex space-x-2 items-center">
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Math.max(0, Math.min(23, Number(e.target.value))))}
          className="input input-bordered input-sm w-14"
          placeholder="HH"
          max="23"
          disabled={timerActive}
        />
        <span>:</span>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Math.max(0, Math.min(59, Number(e.target.value))))}
          className="input input-bordered input-sm w-14"
          placeholder="MM"
          max="59"
          disabled={timerActive}
        />
        <span>:</span>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Math.max(0, Math.min(59, Number(e.target.value))))}
          className="input input-bordered input-sm w-14"
          placeholder="SS"
          max="59"
          disabled={timerActive}
        />
      </div>
      <div className="flex space-x-2 mt-2">
        <button
          onClick={startTimer}
          className="btn btn-primary btn-sm"
          disabled={timerActive}
        >
          Iniciar
        </button>
        <button
          onClick={resetTimer}
          className="btn btn-secondary btn-sm"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
