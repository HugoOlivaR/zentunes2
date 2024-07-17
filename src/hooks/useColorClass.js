import { useColor } from '../context/ColorContext';

const useColorClass = (type = 'border') => {
  const { currentColor } = useColor();

  const colorClasses = {
    border: {
      "green-500": "border-green-500",
      "red-500": "border-red-500",
      "blue-500": "border-blue-500",
      "violet-500": "border-violet-500",
    },
    bg: {
      "green-500": "bg-green-500",
      "red-500": "bg-red-500",
      "blue-500": "bg-blue-500",
      "violet-500": "bg-violet-500",
    },
    stroke: {
      "green-500": "stroke-green-500",
      "red-500": "stroke-red-500",
      "blue-500": "stroke-blue-500",
      "violet-500": "stroke-violet-500",
    },
    text: {
      "green-500": "text-green-500",
      "red-500": "text-red-500",
      "blue-500": "text-blue-500",
      "violet-500": "text-violet-500",
    },
    hoverText: {
      "green-500": "hover:text-green-500",
      "red-500": "hover:text-red-500",
      "blue-500": "hover:text-blue-500",
      "violet-500": "hover:text-violet-500",
    },
  };

  return colorClasses[type][currentColor] || "";
};

export default useColorClass;
