import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';

export default function GoBackButton() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <button
      onClick={handleGoBack}
      className={`fixed top-4 lg:left-4 md:left-2 left-2 z-10 p-2 bg-gray-700 text-white rounded ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <IoMdArrowBack size={30} />
    </button>
  );
}
