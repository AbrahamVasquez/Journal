import { ImageListItem, ImageList } from '@mui/material';

export const ImageGallery = ({ images }) => {
  if (!Array.isArray(images) || images.length === 0) {
    return null; // If images are empty
  }

  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
      {images.map((image, index) => (
        <ImageListItem key={index}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={`Imagen ${index}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
