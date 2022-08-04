/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import handleImageDiaporama from '../tools/handleImageDiaporama';

export default function ImageDiaporama({ data, setCurrentImageIndex, currentImageIndex }) {
  const [initialCursorPosition, setInitialCursorPosition] = useState(0);
  const [finalCursorPosition, setFinalCursorPosition] = useState(0);

  const calculateDeltaMvt = () => {
    const deltaMvt = finalCursorPosition - initialCursorPosition;
    // margin of Δ movement tolerance is above 40px
    if (deltaMvt > 0 && deltaMvt > 40) {
      handleImageDiaporama(currentImageIndex, data.length, 'prev', setCurrentImageIndex);
    }
    if (deltaMvt <= 0 && deltaMvt < -40) {
      handleImageDiaporama(currentImageIndex, data.length, 'next', setCurrentImageIndex);
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
      <img
        src={data[currentImageIndex].url}
        alt={data[currentImageIndex].title}
      />
    </div>
  );
}
