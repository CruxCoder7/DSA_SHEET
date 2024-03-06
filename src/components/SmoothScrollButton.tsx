'use client';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

export default function SmoothScrollButton() {
  const handleClick = () => {
    const element = document.querySelector('#roadmap');
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <MdOutlineKeyboardDoubleArrowDown
      color="white"
      size={70}
      className="cursor-pointer"
      onClick={handleClick}
    />
  );
}
