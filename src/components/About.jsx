import { useState } from "react";
import useColorClass from "../hooks/useColorClass";

export default function About() {
  const [tooltipMessage, setTooltipMessage] = useState("hugoliva158@gmail.com");
  const [isCopied, setIsCopied] = useState(false); // Nueva variable de estado
  const strokeColorClass = useColorClass("stroke");

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("hugoliva158@gmail.com");
      setTooltipMessage("Mail copied!");
      setIsCopied(true); // Actualiza el estado para indicar que el correo ha sido copiado
      setTimeout(() => {
        setTooltipMessage("hugoliva158@gmail.com");
        setIsCopied(false); // Opcional: Restablece el estado después de un tiempo
      }, 2000);
    } catch (err) {
      console.error("Error al copiar el correo: ", err);
    }
  };

  return (
    <div className="bg-base-200 relative  overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        className={`absolute h-[95%] z-10 bottom-10 right-10 ${strokeColorClass} opacity-20 animate-spin-slow`}
      >
        <g fill="none" strokeWidth="3" strokeLinecap="round">
          <line
            x1="400.5"
            y1="400"
            x2="399.5"
            y2="400"
            transform="rotate(0, 400, 400)"
            opacity="0.41"
          ></line>
          <line
            x1="228.5"
            y1="400"
            x2="571.5"
            y2="400"
            transform="rotate(4, 400, 400)"
            opacity="0.81"
          ></line>
          <line
            x1="258.5"
            y1="400"
            x2="541.5"
            y2="400"
            transform="rotate(8, 400, 400)"
            opacity="0.64"
          ></line>
          <line
            x1="213"
            y1="400"
            x2="587"
            y2="400"
            transform="rotate(12, 400, 400)"
            opacity="0.70"
          ></line>
          <line
            x1="51"
            y1="400"
            x2="749"
            y2="400"
            transform="rotate(16, 400, 400)"
            opacity="0.54"
          ></line>
          <line
            x1="229.5"
            y1="400"
            x2="570.5"
            y2="400"
            transform="rotate(20, 400, 400)"
            opacity="0.22"
          ></line>
          <line
            x1="744.5"
            y1="400"
            x2="55.5"
            y2="400"
            transform="rotate(24, 400, 400)"
            opacity="0.99"
          ></line>
          <line
            x1="199"
            y1="400"
            x2="601"
            y2="400"
            transform="rotate(28, 400, 400)"
            opacity="0.98"
          ></line>
          <line
            x1="24.5"
            y1="400"
            x2="775.5"
            y2="400"
            transform="rotate(32, 400, 400)"
            opacity="0.48"
          ></line>
          <line
            x1="461"
            y1="400"
            x2="339"
            y2="400"
            transform="rotate(36, 400, 400)"
            opacity="0.44"
          ></line>
          <line
            x1="309.5"
            y1="400"
            x2="490.5"
            y2="400"
            transform="rotate(40, 400, 400)"
            opacity="0.63"
          ></line>
          <line
            x1="697"
            y1="400"
            x2="103"
            y2="400"
            transform="rotate(44, 400, 400)"
            opacity="0.72"
          ></line>
          <line
            x1="488"
            y1="400"
            x2="312"
            y2="400"
            transform="rotate(48, 400, 400)"
            opacity="0.43"
          ></line>
          <line
            x1="551.5"
            y1="400"
            x2="248.5"
            y2="400"
            transform="rotate(52, 400, 400)"
            opacity="0.45"
          ></line>
          <line
            x1="707.5"
            y1="400"
            x2="92.5"
            y2="400"
            transform="rotate(56, 400, 400)"
            opacity="0.14"
          ></line>
          <line
            x1="57.5"
            y1="400"
            x2="742.5"
            y2="400"
            transform="rotate(60, 400, 400)"
            opacity="0.62"
          ></line>
          <line
            x1="523"
            y1="400"
            x2="277"
            y2="400"
            transform="rotate(64, 400, 400)"
            opacity="0.73"
          ></line>
          <line
            x1="506"
            y1="400"
            x2="294"
            y2="400"
            transform="rotate(68, 400, 400)"
            opacity="0.63"
          ></line>
          <line
            x1="287.5"
            y1="400"
            x2="512.5"
            y2="400"
            transform="rotate(72, 400, 400)"
            opacity="0.25"
          ></line>
          <line
            x1="66"
            y1="400"
            x2="734"
            y2="400"
            transform="rotate(76, 400, 400)"
            opacity="0.52"
          ></line>
          <line
            x1="459"
            y1="400"
            x2="341"
            y2="400"
            transform="rotate(80, 400, 400)"
            opacity="0.87"
          ></line>
          <line
            x1="545.5"
            y1="400"
            x2="254.5"
            y2="400"
            transform="rotate(84, 400, 400)"
            opacity="0.84"
          ></line>
          <line
            x1="261.5"
            y1="400"
            x2="538.5"
            y2="400"
            transform="rotate(88, 400, 400)"
            opacity="0.31"
          ></line>
          <line
            x1="326"
            y1="400"
            x2="474"
            y2="400"
            transform="rotate(92, 400, 400)"
            opacity="0.34"
          ></line>
          <line
            x1="607"
            y1="400"
            x2="193"
            y2="400"
            transform="rotate(96, 400, 400)"
            opacity="0.45"
          ></line>
          <line
            x1="708"
            y1="400"
            x2="92"
            y2="400"
            transform="rotate(100, 400, 400)"
            opacity="0.65"
          ></line>
          <line
            x1="267"
            y1="400"
            x2="533"
            y2="400"
            transform="rotate(104, 400, 400)"
            opacity="0.71"
          ></line>
          <line
            x1="530.5"
            y1="400"
            x2="269.5"
            y2="400"
            transform="rotate(108, 400, 400)"
            opacity="0.68"
          ></line>
          <line
            x1="714"
            y1="400"
            x2="86"
            y2="400"
            transform="rotate(112, 400, 400)"
            opacity="0.75"
          ></line>
          <line
            x1="179"
            y1="400"
            x2="621"
            y2="400"
            transform="rotate(116, 400, 400)"
            opacity="0.75"
          ></line>
          <line
            x1="364.5"
            y1="400"
            x2="435.5"
            y2="400"
            transform="rotate(120, 400, 400)"
            opacity="0.48"
          ></line>
          <line
            x1="239.5"
            y1="400"
            x2="560.5"
            y2="400"
            transform="rotate(124, 400, 400)"
            opacity="0.72"
          ></line>
          <line
            x1="279"
            y1="400"
            x2="521"
            y2="400"
            transform="rotate(128, 400, 400)"
            opacity="0.14"
          ></line>
          <line
            x1="295.5"
            y1="400"
            x2="504.5"
            y2="400"
            transform="rotate(132, 400, 400)"
            opacity="0.94"
          ></line>
          <line
            x1="338.5"
            y1="400"
            x2="461.5"
            y2="400"
            transform="rotate(136, 400, 400)"
            opacity="0.62"
          ></line>
          <line
            x1="649"
            y1="400"
            x2="151"
            y2="400"
            transform="rotate(140, 400, 400)"
            opacity="0.62"
          ></line>
          <line
            x1="655"
            y1="400"
            x2="145"
            y2="400"
            transform="rotate(144, 400, 400)"
            opacity="0.38"
          ></line>
          <line
            x1="236"
            y1="400"
            x2="564"
            y2="400"
            transform="rotate(148, 400, 400)"
            opacity="0.98"
          ></line>
          <line
            x1="212.5"
            y1="400"
            x2="587.5"
            y2="400"
            transform="rotate(152, 400, 400)"
            opacity="0.96"
          ></line>
          <line
            x1="241"
            y1="400"
            x2="559"
            y2="400"
            transform="rotate(156, 400, 400)"
            opacity="0.71"
          ></line>
          <line
            x1="395"
            y1="400"
            x2="405"
            y2="400"
            transform="rotate(160, 400, 400)"
            opacity="0.25"
          ></line>
          <line
            x1="321.5"
            y1="400"
            x2="478.5"
            y2="400"
            transform="rotate(164, 400, 400)"
            opacity="0.11"
          ></line>
          <line
            x1="252"
            y1="400"
            x2="548"
            y2="400"
            transform="rotate(168, 400, 400)"
            opacity="0.60"
          ></line>
          <line
            x1="451"
            y1="400"
            x2="349"
            y2="400"
            transform="rotate(172, 400, 400)"
            opacity="0.33"
          ></line>
          <line
            x1="463.5"
            y1="400"
            x2="336.5"
            y2="400"
            transform="rotate(176, 400, 400)"
            opacity="0.66"
          ></line>
          <line
            x1="479.5"
            y1="400"
            x2="320.5"
            y2="400"
            transform="rotate(180, 400, 400)"
            opacity="0.94"
          ></line>
          <line
            x1="115"
            y1="400"
            x2="685"
            y2="400"
            transform="rotate(184, 400, 400)"
            opacity="0.86"
          ></line>
          <line
            x1="561.5"
            y1="400"
            x2="238.5"
            y2="400"
            transform="rotate(188, 400, 400)"
            opacity="0.80"
          ></line>
          <line
            x1="251.5"
            y1="400"
            x2="548.5"
            y2="400"
            transform="rotate(192, 400, 400)"
            opacity="0.47"
          ></line>
          <line
            x1="577"
            y1="400"
            x2="223"
            y2="400"
            transform="rotate(196, 400, 400)"
            opacity="0.51"
          ></line>
          <line
            x1="436"
            y1="400"
            x2="364"
            y2="400"
            transform="rotate(200, 400, 400)"
            opacity="0.45"
          ></line>
          <line
            x1="131"
            y1="400"
            x2="669"
            y2="400"
            transform="rotate(204, 400, 400)"
            opacity="0.62"
          ></line>
          <line
            x1="614.5"
            y1="400"
            x2="185.5"
            y2="400"
            transform="rotate(208, 400, 400)"
            opacity="0.76"
          ></line>
          <line
            x1="452.5"
            y1="400"
            x2="347.5"
            y2="400"
            transform="rotate(212, 400, 400)"
            opacity="0.09"
          ></line>
          <line
            x1="666"
            y1="400"
            x2="134"
            y2="400"
            transform="rotate(216, 400, 400)"
            opacity="0.83"
          ></line>
          <line
            x1="190.5"
            y1="400"
            x2="609.5"
            y2="400"
            transform="rotate(220, 400, 400)"
            opacity="0.20"
          ></line>
          <line
            x1="110"
            y1="400"
            x2="690"
            y2="400"
            transform="rotate(224, 400, 400)"
            opacity="0.77"
          ></line>
          <line
            x1="569.5"
            y1="400"
            x2="230.5"
            y2="400"
            transform="rotate(228, 400, 400)"
            opacity="0.28"
          ></line>
          <line
            x1="336.5"
            y1="400"
            x2="463.5"
            y2="400"
            transform="rotate(232, 400, 400)"
            opacity="0.67"
          ></line>
          <line
            x1="495"
            y1="400"
            x2="305"
            y2="400"
            transform="rotate(236, 400, 400)"
            opacity="0.33"
          ></line>
          <line
            x1="305"
            y1="400"
            x2="495"
            y2="400"
            transform="rotate(240, 400, 400)"
            opacity="0.94"
          ></line>
          <line
            x1="329.5"
            y1="400"
            x2="470.5"
            y2="400"
            transform="rotate(244, 400, 400)"
            opacity="0.83"
          ></line>
          <line
            x1="573.5"
            y1="400"
            x2="226.5"
            y2="400"
            transform="rotate(248, 400, 400)"
            opacity="0.97"
          ></line>
          <line
            x1="205.5"
            y1="400"
            x2="594.5"
            y2="400"
            transform="rotate(252, 400, 400)"
            opacity="0.59"
          ></line>
          <line
            x1="735.5"
            y1="400"
            x2="64.5"
            y2="400"
            transform="rotate(256, 400, 400)"
            opacity="0.80"
          ></line>
          <line
            x1="127.5"
            y1="400"
            x2="672.5"
            y2="400"
            transform="rotate(260, 400, 400)"
            opacity="0.97"
          ></line>
          <line
            x1="211.5"
            y1="400"
            x2="588.5"
            y2="400"
            transform="rotate(264, 400, 400)"
            opacity="0.94"
          ></line>
          <line
            x1="666"
            y1="400"
            x2="134"
            y2="400"
            transform="rotate(268, 400, 400)"
            opacity="0.98"
          ></line>
          <line
            x1="630"
            y1="400"
            x2="170"
            y2="400"
            transform="rotate(272, 400, 400)"
            opacity="0.13"
          ></line>
          <line
            x1="456.5"
            y1="400"
            x2="343.5"
            y2="400"
            transform="rotate(276, 400, 400)"
            opacity="0.70"
          ></line>
          <line
            x1="227.5"
            y1="400"
            x2="572.5"
            y2="400"
            transform="rotate(280, 400, 400)"
            opacity="0.22"
          ></line>
          <line
            x1="476"
            y1="400"
            x2="324"
            y2="400"
            transform="rotate(284, 400, 400)"
            opacity="0.15"
          ></line>
          <line
            x1="433.5"
            y1="400"
            x2="366.5"
            y2="400"
            transform="rotate(288, 400, 400)"
            opacity="0.27"
          ></line>
          <line
            x1="569.5"
            y1="400"
            x2="230.5"
            y2="400"
            transform="rotate(292, 400, 400)"
            opacity="0.74"
          ></line>
          <line
            x1="533"
            y1="400"
            x2="267"
            y2="400"
            transform="rotate(296, 400, 400)"
            opacity="0.81"
          ></line>
          <line
            x1="299.5"
            y1="400"
            x2="500.5"
            y2="400"
            transform="rotate(300, 400, 400)"
            opacity="0.52"
          ></line>
          <line
            x1="499.5"
            y1="400"
            x2="300.5"
            y2="400"
            transform="rotate(304, 400, 400)"
            opacity="0.50"
          ></line>
          <line
            x1="355.5"
            y1="400"
            x2="444.5"
            y2="400"
            transform="rotate(308, 400, 400)"
            opacity="0.48"
          ></line>
          <line
            x1="155.5"
            y1="400"
            x2="644.5"
            y2="400"
            transform="rotate(312, 400, 400)"
            opacity="0.67"
          ></line>
          <line
            x1="698.5"
            y1="400"
            x2="101.5"
            y2="400"
            transform="rotate(316, 400, 400)"
            opacity="0.83"
          ></line>
          <line
            x1="382.5"
            y1="400"
            x2="417.5"
            y2="400"
            transform="rotate(320, 400, 400)"
            opacity="0.64"
          ></line>
          <line
            x1="705"
            y1="400"
            x2="95"
            y2="400"
            transform="rotate(324, 400, 400)"
            opacity="0.71"
          ></line>
          <line
            x1="93"
            y1="400"
            x2="707"
            y2="400"
            transform="rotate(328, 400, 400)"
            opacity="1.00"
          ></line>
          <line
            x1="458.5"
            y1="400"
            x2="341.5"
            y2="400"
            transform="rotate(332, 400, 400)"
            opacity="0.80"
          ></line>
          <line
            x1="274.5"
            y1="400"
            x2="525.5"
            y2="400"
            transform="rotate(336, 400, 400)"
            opacity="0.86"
          ></line>
          <line
            x1="236.5"
            y1="400"
            x2="563.5"
            y2="400"
            transform="rotate(340, 400, 400)"
            opacity="0.93"
          ></line>
          <line
            x1="211"
            y1="400"
            x2="589"
            y2="400"
            transform="rotate(344, 400, 400)"
            opacity="0.74"
          ></line>
          <line
            x1="339.5"
            y1="400"
            x2="460.5"
            y2="400"
            transform="rotate(348, 400, 400)"
            opacity="0.86"
          ></line>
        </g>
      </svg>
      <div
        id="nextSection"
        className={`min-h-screen h-full px-10 lg:px-14 xl:px-20 py-10 transition-all duration-200 relative w-full z-20`}
      >
        <div className="mx-auto">
          <div className="flex w-fit h-fit gap-3 sm:gap-7">
            <img src="/icon.svg" alt="Zentunes Logo" className="h-14 sm:h-20" />
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">Zentunes</h1>
          </div>
          <p className="text-2xl mb-4">
            Zentunes is a music player that allows you to play relaxing sounds
            to help you focus, relax, or sleep.
          </p>
          <p className="text-2xl mb-12">This project was developed in <b>24h by Hugo Oliva.</b></p>

          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="mb-16 bg-base-300 px-10 py-5 rounded-2xl border w-full lg:w-fit">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6">
                Features
              </h2>
              <ul className="text-2xl space-y-2">
                <li>✅ High-quality relaxing sounds</li>
                <li>✅ Customizable volume control</li>
                <li>✅ Beautiful and intuitive interface</li>
                <li>✅ Supports background playback</li>
              </ul>
            </div>
            <div className="mb-16 bg-base-300 px-10 py-5 rounded-2xl border w-full lg:w-fit">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6">
                Technologies Used
              </h2>
              <ul className="text-2xl space-y-2">
                <li>⚡️ Vite</li>
                <li>⚛️ React</li>
                <li>💨 Tailwind CSS</li>
                <li>🌼 DaisyUI</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6">
              Contact
            </h2>
            <p className="text-2xl mb-4">
              If you have any questions or feedback, feel free to reach out:
            </p>
            <div className="flex gap-5">
              <div
                className={`tooltip tooltip-bottom ${
                  isCopied ? "tooltip-success" : ""
                }`}
                data-tip={tooltipMessage}
              >
                <a className={`btn btn-neutral`} onClick={copyEmailToClipboard}>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-send"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 14l11 -11" />
                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                  </svg>
                  Mail me
                </a>
              </div>
              <a
                href="https://hugooliva.com/"
                target="_blank"
                className="btn btn-neutral"
              >
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-geometry"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714" />
                  <path d="M12 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5" />
                  <path d="M12 5v-2" />
                </svg>
                Porfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
