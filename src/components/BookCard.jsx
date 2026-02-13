import { useState } from "react";

const BookCard = ({
  image,
  title,
  genre,
  shortDescription,
  rating = 4.8,
  pages = 320,
  published = "2024",
  price = null,
  badge = null,
  onClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative aspect-[9/10] w-full overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        <img
          src={image}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {badge}
          </span>
        )}

        {/* Hover Description */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div>
            <p className="text-white text-sm line-clamp-3">
              {shortDescription}
            </p>
            <p className="text-blue-300 text-xs mt-2 font-medium">
              Click to read more →
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title + Genre */}
        <div>
          <div className="flex justify-between items-start gap-3">
            <h3 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2">
              {title}
            </h3>
            <span className="text-sm font-medium text-blue-600 whitespace-nowrap">
              {genre}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center flex-wrap gap-3 text-sm text-gray-600">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="font-medium">{rating}</span>
          </div>

          <span>•</span>

          <span>{pages} pages</span>

          <span>•</span>

          <span>{published}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xs text-gray-500"></p>
            <p className="text-lg font-bold text-blue-600">
              {price}
            </p>
          </div>

          <span className="text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform duration-200">
            Details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
