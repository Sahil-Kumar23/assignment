import PropTypes from 'prop-types';

export function GalleryWithCarousel({ gallery }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {gallery.map((imageSrc, index) => (
        <div key={index}>
          <img
            src={imageSrc}
            alt=""
            className="h-auto max-w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}

GalleryWithCarousel.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};
