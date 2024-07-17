import { useState, useEffect } from "react";
import fireSound from "./assets/sounds/fire.mp3";
import forestSound from "./assets/sounds/forest.mp3";
import wavesSound from "./assets/sounds/waves.mp3";
import rainSound from "./assets/sounds/rain.mp3";
import PlayButton from "./components/PlayButton";
import ElementSelector from "./components/ElementSelector";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Hour from "./components/Hour";
import { useColor } from "./context/ColorContext"; // Importa el hook del contexto
import useColorClass from "./hooks/useColorClass";

const sounds = [
  { name: "Forest", file: forestSound, color: "green-500" },
  { name: "Fire", file: fireSound, color: "red-500" },
  { name: "Waves", file: wavesSound, color: "blue-500" },
  { name: "Rain", file: rainSound, color: "violet-500" },
];

function App() {
  const { currentColor, setCurrentColor } = useColor(); // Usa el contexto para obtener y actualizar el color
  const [currentSound, setCurrentSound] = useState(sounds[0]);
  const [audio, setAudio] = useState(new Audio(currentSound.file));
  const [volume, setVolume] = useState(0.5);
  const strokeColorClass = useColorClass("stroke");

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  useEffect(() => {
    audio.volume = volume;
  }, [volume, audio]);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // La reproducción fue exitosa.
          })
          .catch((error) => {
            console.log(currentSound.file);
            console.error("Error al intentar reproducir el audio:", error);
          });
      }
    } else {
      audio.pause();
    }
  }, [audio, isPlaying, currentSound.file]);

  const handleChange = (event) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    const selectedSound = sounds.find(
      (sound) => sound.name === event.target.value
    );
    setCurrentSound(selectedSound);
    const newAudio = new Audio(selectedSound.file);
    setAudio(newAudio);

    if (isPlaying) {
      newAudio
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Error al intentar reproducir el audio:", error);
          setIsPlaying(false);
        });
    }
    const newColor = selectedSound.color;
    setCurrentColor(newColor);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let lastScrollTime = 0;
    const scrollDelay = 500; // 500ms delay between scroll events

    const handleScroll = (event) => {
      const currentTime = new Date().getTime();
      if (currentTime - lastScrollTime < scrollDelay) return;
      lastScrollTime = currentTime;

      // Detecta la dirección del scroll
      const direction = event.deltaY;

      // Selecciona el elemento al que quieres desplazarte
      const nextSection = direction > 0 ? document.getElementById('nextSection') : document.getElementById('topSection');

      // Desplaza la página hacia el elemento seleccionado
      nextSection.scrollIntoView({ behavior: 'smooth' });
    };

    // Agrega el controlador de eventos al elemento deseado o al window para detectar el scroll
    window.addEventListener('wheel', handleScroll, { passive: true });

    // Limpieza del evento
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  const moveToNextSection = () => {
    const nextSection = document.getElementById('nextSection');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        id="topSection"
        className={`min-h-screen flex flex-col items-center pt-32 transition-all duration-200`}
      >
        <NavBar generalAudio={audio} setVolume={setVolume} volume={volume} />
        <div className="flex flex-col justify-center items-center gap-8 sm:gap-16">
          <Hour />
          <PlayButton
            onClick={togglePlay}
            icon={isPlaying}
            color={currentColor}
          />
          <ElementSelector
            onClick={togglePlay}
            icon={isPlaying}
            sounds={sounds}
            handleChange={handleChange}
          />
        </div>
        <div className="absolute bottom-3 animate-bounce cursor-pointer" onClick={moveToNextSection}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`icon icon-tabler icons-tabler-outline icon-tabler-arrow-down ${strokeColorClass}`}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M18 13l-6 6" />
            <path d="M6 13l6 6" />
          </svg>
        </div>
      </div>
      <About />
    </>
  );
}

export default App;
