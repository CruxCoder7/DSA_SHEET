import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaBackward } from 'react-icons/fa';

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
      className={`fixed top-4 left-4 p-2 bg-gray-700 text-white rounded ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <FaBackward size={30} />
    </button>
  );
}
