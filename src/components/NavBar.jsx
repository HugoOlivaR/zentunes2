import { useState, useEffect } from "react";
import useColorClass from "../hooks/useColorClass";
import pi from "../assets/sounds/pi.mp3";
import PropTypes from "prop-types";

NavBar.propTypes = {
  generalAudio: PropTypes.object.isRequired,
  setVolume: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
};

export default function NavBar({ generalAudio, setVolume, volume }) {
  const [showChrono, setShowChrono] = useState(false);
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const textHoverColorClass = useColorClass("hoverText");
  const textColorClass = useColorClass("text");
  const borderColorClass = useColorClass("border");

  const [timerActive, setTimerActive] = useState(false);
  const [timerTime, setTimerTime] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const isMuted = volume === 0;

  useEffect(() => {
    if (generalAudio) {
      generalAudio.volume = volume;
    }
  }, [volume, generalAudio]);

  const toggleMute = () => {
    setVolume((prevVolume) => (prevVolume > 0 ? 0 : 0.5));
  };

  const [audio] = useState(new Audio(pi));

  useEffect(() => {
    const savedTimerTime = localStorage.getItem("timerTime");
    const savedTimerActive = localStorage.getItem("timerActive") === "true";

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

            localStorage.setItem("timerTime", newTime.toString());
            localStorage.setItem("timerActive", "true");

            return newTime;
          } else {
            clearInterval(interval);
            setTimerActive(false);
            localStorage.setItem("timerActive", "false");
            audio.play();
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
      localStorage.setItem("timerActive", "false");
    }

    return () => clearInterval(interval);
  }, [timerActive]);

  const startTimer = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTimerTime(totalSeconds);
    setTimerActive(true); // Activar el temporizador
    localStorage.setItem("timerTime", totalSeconds.toString());
    localStorage.setItem("timerActive", "true");
  };

  const resetTimer = () => {
    setTimerActive(false);
    setTimerTime(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    localStorage.removeItem("timerTime");
    localStorage.setItem("timerActive", "false");
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const toggleChrono = () => {
    setShowChrono(!showChrono);
  };

  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };

  useEffect(() => {
    generalAudio.muted = isMuted;
  }, [isMuted, generalAudio]);

  const moveToNextSection = () => {
    const nextSection = document.getElementById("nextSection");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="absolute top-5 sm:top-8 sm:left-8 bg-base-300 p-3 rounded-xl">
        <div className="flex">
          <button
            onClick={toggleChrono}
            className={`btn btn-ghost btn-sm ${textHoverColorClass} ${
              showChrono ? textColorClass : ""
            }`}
          >
            Chrono
          </button>
          <button
            onClick={toggleTimer}
            className={`btn btn-ghost btn-sm ${textHoverColorClass} ${
              showTimer ? textColorClass : ""
            }`}
          >
            Timer
          </button>
          <button
            className={`btn btn-ghost btn-sm ${textHoverColorClass}`}
            onClick={moveToNextSection}
          >
            About
          </button>
          <label className="swap swap-rotate px-3 btn-ghost rounded-md">
            <input
              type="checkbox"
              className="theme-controller"
              defaultChecked={true}
              onChange={(e) => {
                document.documentElement.setAttribute(
                  "data-theme",
                  e.target.checked ? "dark" : "light"
                );
              }}
            />
            <svg
              className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-on h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="relative group flex justify-center">
            <button onClick={toggleMute} className="px-2 btn-ghost rounded-md">
              {isMuted || volume === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-volume-off"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464" />
                  <path d="M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615" />
                  <path d="M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664" />
                  <path stroke="#EF4444" d="M3 3l18 18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-volume"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 8a5 5 0 0 1 0 8" />
                  <path d="M17.7 5a9 9 0 0 1 0 14" />
                  <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                </svg>
              )}
            </button>
            <div className="absolute hidden group-hover:flex top-11 translate-y-full -rotate-90 bg-base-300 pl-2 pr-4 py-2 rounded-xl justify-center">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-24"
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="absolute top-28 left-8 gap-5 flex flex-col">
        {showChrono && (
          <div className={`bg-base-300 p-3 rounded-xl border-[1px] w-fit border-base-content`}>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => setTimerOn(!timerOn)}
                className={`btn btn-ghost btn-sm ${textHoverColorClass} ${borderColorClass} border bg-base-100`}
              >
                {timerOn ? "Pausa" : "Play"}
              </button>
              <button
                onClick={() => {
                  setTime(0);
                  setTimerOn(false);
                }}
                className="btn btn-sm bg-base-100 border-0 hover:bg-base-200"
              >
                Restart
              </button>
            </div>
          </div>
        )}
        {showTimer && (
          <div className={`bg-base-300 p-3 rounded-xl border-[1px] border-base-content`}>
            <div className="flex space-x-2 items-center">
              <input
                type="number"
                value={hours}
                onChange={(e) =>
                  setHours(Math.max(0, Math.min(23, Number(e.target.value))))
                }
                className="input input-bordered input-sm w-14"
                placeholder="HH"
                max="23"
                disabled={timerActive}
              />
              <span>:</span>
              <input
                type="number"
                value={minutes}
                onChange={(e) =>
                  setMinutes(Math.max(0, Math.min(59, Number(e.target.value))))
                }
                className="input input-bordered input-sm w-14"
                placeholder="MM"
                max="59"
                disabled={timerActive}
              />
              <span>:</span>
              <input
                type="number"
                value={seconds}
                onChange={(e) =>
                  setSeconds(Math.max(0, Math.min(59, Number(e.target.value))))
                }
                className="input input-bordered input-sm w-14"
                placeholder="SS"
                max="59"
                disabled={timerActive}
              />
            </div>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={startTimer}
                className={`btn btn-ghost btn-sm ${textHoverColorClass} ${borderColorClass} border bg-base-100`}
                disabled={timerActive}
              >
                Start
              </button>
              <button
                onClick={resetTimer}
                className="btn btn-sm bg-base-100 border-0 hover:bg-base-200"
              >
                Restart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
