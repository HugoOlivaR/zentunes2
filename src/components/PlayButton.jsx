import PropTypes from "prop-types";
import useColorClass from '../hooks/useColorClass';
// eslint-disable-next-line no-unused-vars
import React from 'react';

PlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.bool.isRequired,
};

export default function PlayButton({ onClick, icon }) {
  const borderColorClass = useColorClass('border');

  return (
    <button
      className={`btn btn-circle btn-outline border-4 h-28 sm:h-48 w-28 sm:w-48 hover:bg-transparent hover:shadow-sm ${borderColorClass} hover:${borderColorClass}`}
      onClick={onClick}
    >
      {icon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`icon icon-tabler icons-tabler-outline h-[60px] w-[60px] sm:h-[100px] sm:w-[100px] icon-tabler-player-pause stroke-base-content`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
          <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`icon icon-tabler icons-tabler-outline h-[60px] w-[60px] sm:h-[100px] sm:w-[100px] icon-tabler-player-play stroke-base-content`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 4v16l13 -8z" />
        </svg>
      )}
    </button>
  );
}
