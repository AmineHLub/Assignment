/* eslint-disable react/prop-types */

export default function Thumbnail({ data, setCurrentImageIndex, currentImageIndex }) {
  return (
    <ul className="thumbnail-container">
      {
        data.map((item, index) => (
          <li key={item.id}>
            <img
              className={currentImageIndex === index ? 'active' : ''}
              aria-hidden
              onClick={() => setCurrentImageIndex(index)}
              src={item.thumbnailUrl}
              alt={item.title}
            />
            <p>{item.title.split(' ')[0]}</p>
          </li>
        ))
      }
    </ul>
  );
}
