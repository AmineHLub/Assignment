const handleImageDiaporama = (currentImageIndex, dataLength, type, setCurrentImageIndex) => {
  if (type === 'next') {
    if (currentImageIndex + 1 < dataLength) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  } else if (type === 'prev') {
    if (currentImageIndex - 1 >= 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(dataLength - 1);
    }
  }
};

export default handleImageDiaporama;
