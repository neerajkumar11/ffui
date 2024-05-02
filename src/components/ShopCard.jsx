import React from 'react';

const ShopCard = ({ name, photoUrl="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", location="", overallRating=0, ratingCount=0 }) => {
  const wholeStars = Math.floor(overallRating);
  const fractionStar = overallRating - wholeStars;

  // Render whole stars
  const wholeStarsElements = [...Array(wholeStars)].map((_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-yellow-500 fill-current"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 0 L11.19 6.67 L17.37 7.64 L12.65 12.23 L13.82 18.36 L10 14.76 L6.18 18.36 L7.35 12.23 L2.63 7.64 L8.81 6.67 Z"
      />
    </svg>
  ));

  // Render fraction of a star, if any
  const fractionStarElement = fractionStar > 0 ? (
    <svg
      key="fraction"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-yellow-500 fill-current"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d={`M10 0 L11.19 ${fractionStar * 6.67} L${17.37 * fractionStar} ${7.64 * fractionStar} L${12.65 * fractionStar} ${12.23 * fractionStar} L${13.82 * fractionStar} ${18.36 * fractionStar} L10 ${14.76 * fractionStar} L6.18 ${18.36 * fractionStar} L${7.35 * fractionStar} ${12.23 * fractionStar} L${2.63 * fractionStar} ${7.64 * fractionStar} L${8.81 * fractionStar} ${6.67 * fractionStar} Z`}
      />
    </svg>
  ) : null;

  // Combine whole stars and fraction of a star
  const stars = [...wholeStarsElements, fractionStarElement];

  return (
    <div className="bg-rose-50 rounded-lg shadow-md p-4 mb-4">
      <div className="aspect-w-4 aspect-h-3 mb-4">
        <img src={photoUrl} alt={name} className="object-cover rounded-md" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{location}</p>
      <div className="flex items-center mb-2">
        {/* <div className="flex">
          {[...Array(wholeStars)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0 L11.19 6.67 L17.37 7.64 L12.65 12.23 L13.82 18.36 L10 14.76 L6.18 18.36 L7.35 12.23 L2.63 7.64 L8.81 6.67 Z"
              />
            </svg>
          ))}
          {[...Array(5 - wholeStars)].map((_, index) => (
            <svg
              key={index + wholeStars}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-300 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0 L11.19 6.67 L17.37 7.64 L12.65 12.23 L13.82 18.36 L10 14.76 L6.18 18.36 L7.35 12.23 L2.63 7.64 L8.81 6.67 Z"
              />
            </svg>
          ))}
        </div> */}
        <div className="flex">
          {stars}
          {[...Array(5 - wholeStars - (fractionStar > 0 ? 1 : 0))].map((_, index) => (
            <svg
              key={index + wholeStars}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-300 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0 L11.19 6.67 L17.37 7.64 L12.65 12.23 L13.82 18.36 L10 14.76 L6.18 18.36 L7.35 12.23 L2.63 7.64 L8.81 6.67 Z"
              />
            </svg>
          ))}
        </div>
        <span className="text-gray-600 ml-1">{`(${ratingCount})`}</span>
      </div>
    </div>
  );
};

export default ShopCard;
