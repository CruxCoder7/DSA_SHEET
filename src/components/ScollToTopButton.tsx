import { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // for initital render, before the scroll event triggers
    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 lg:right-2 md:right-1 right-1 p-2 bg-gray-700 text-white rounded ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <MdKeyboardDoubleArrowUp size={30} />
    </button>
  );
}
