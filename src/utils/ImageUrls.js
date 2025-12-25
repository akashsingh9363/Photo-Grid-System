export const generateThumbnailUrl = (imageNumber) => {
  return `https://placehold.co/200x200/jpg?text=${imageNumber}`;
};

export const generateFullViewUrl = (imageNumber) => {
  return `https://placehold.co/2000x2000/jpg?text=${imageNumber}`;
};

export const generateDownloadUrl = (imageNumber) => {
  return `https://placehold.co/3900x3900/jpg?text=${imageNumber}`;
};

export const generateImageData = (startNumber, count) => {
  const images = [];
  for (let i = startNumber; i < startNumber + count; i++) {
    images.push({
      id: i,
      number: i,
      thumbnailUrl: generateThumbnailUrl(i),
      fullViewUrl: generateFullViewUrl(i),
      downloadUrl: generateDownloadUrl(i),
    });
  }
  return images;
};
