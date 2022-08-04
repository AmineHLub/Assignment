/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function ImageDiaporama({ data, setCurrentImageIndex, currentImageIndex }) {
  const [initialCursorPosition, setInitialCursorPosition] = useState(0);
  const [finalCursorPosition, setFinalCursorPosition] = useState(0);

  const handleImageDiaporama = (type) => {
    if (type === 'next') {
      if (currentImageIndex + 1 < data.length) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        setCurrentImageIndex(0);
      }
    } else if (type === 'prev') {
      if (currentImageIndex - 1 >= 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else {
        setCurrentImageIndex(data.length - 1);
      }
    }
  };

  const calculateDeltaMvt = () => {
    const deltaMvt = finalCursorPosition - initialCursorPosition;
    // margin of Δ movement tolerance is above 40px
    if (deltaMvt > 0 && deltaMvt > 40) {
      handleImageDiaporama('prev');
    }
    if (deltaMvt <= 0 && deltaMvt < -40) {
      handleImageDiaporama('next');
    }
    return '';
  };

  return (
    <div
      className="diaporama-image-container"
      aria-hidden
      onTouchStart={(e) => setInitialCursorPosition(e.targetTouches[0].clientX)}
      onTouchMove={(e) => setFinalCursorPosition(e.targetTouches[0].clientX)}
      onTouchEnd={() => calculateDeltaMvt()}
    >
      <div
        className="diaporama-image-button prev"
      >
        <img
          aria-hidden
          onClick={() => handleImageDiaporama('prev')}
          src="https://i.imgur.com/68ZQIM2.png"
          alt="previous-img"
        />
      </div>

      <img
        draggable="false"
        src={data[currentImageIndex].url}
        alt={data[currentImageIndex].title}
      />

      <div
        className="diaporama-image-button next"
      >
        <img
          aria-hidden
          onClick={() => handleImageDiaporama('next')}
          src="https://i.imgur.com/evo0I1R.png"
          alt="next-img"
        />
      </div>
    </div>
  );
}
